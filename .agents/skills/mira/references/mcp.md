---
title: MCP server
description: Serve a Mira site to agents over the Model Context Protocol.
section: Agents
order: 602
---

`mira mcp` runs an MCP server over standard input and output. Any MCP client can connect and list, search, and read the site.

```bash
mira mcp --root ./my-site
```

## Tools

| Tool | Arguments | Returns |
| --- | --- | --- |
| `list_pages` | none | Every page's URL, title, and description |
| `read_page` | `url`, such as `/docs/routing/` | The page's Markdown twin |
| `search` | `query`, optional `limit` from 1 to 25 | The best matches with URL, title, and a snippet |

The server rebuilds the site before answering each call, so answers always match the source on disk. It builds into `.mira/mcp/` and never touches `dist/`.

## Connecting a client

Most clients take a command to launch. For example, a client configured with a JSON file:

```json
{
  "mcpServers": {
    "my-site": {
      "command": "mira",
      "args": ["mcp", "--root", "/path/to/my-site"]
    }
  }
}
```

## Protocol details

The server speaks JSON-RPC 2.0, one message per line. It handles `initialize`, `ping`, `tools/list`, and `tools/call`, and ignores notifications. Tool failures, such as an unknown URL or a broken build, come back as tool results with `isError: true` and a message the agent can act on. Logs go to standard error so they never mix with protocol messages.

## Security

The server only reads the project and its own build folder. `read_page` maps URLs into the build output and drops `..` segments, so a request cannot read files outside it.
