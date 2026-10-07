---
title: Installation
description: Build the mira CLI from source and check that it works.
section: Getting started
order: 102
---

Mira is a single binary named `mira`. Prebuilt, signed binaries for macOS, Linux, and Windows are planned; today you build it from the Mira source with Cargo.

## Requirements

- A Rust toolchain with Cargo, version 1.85 or newer. Install it from [rustup.rs](https://rustup.rs).
- The Mira source checkout.

No Node.js, package manager, or other runtime is needed to build or serve a site.

## Build and install

From the root of the Mira source:

```bash
cargo install --path crates/mira_cli
```

Cargo builds an optimized binary and puts it in `~/.cargo/bin`, which rustup adds to your `PATH`.

> [!TIP]
> If your shell cannot find `mira` afterwards, open a new terminal or add `~/.cargo/bin` to your `PATH`.

## Check the install

```bash
mira --version
```

```bash
mira --help
```

`mira --help` lists every command. Each command has its own help, for example `mira build --help`.

## Update

Pull the latest source and run the same `cargo install` command. Cargo replaces the old binary.

## Next

Create your first site in [Quick start](/docs/quick-start/).
