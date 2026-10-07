/* @ds-bundle: {"format":4,"namespace":"Mira","components":[{"name":"Button"},{"name":"Eyebrow"},{"name":"Highlight"},{"name":"CursorTag"},{"name":"Atmosphere"},{"name":"GlassShape"},{"name":"PixelMark"},{"name":"Chip"},{"name":"PixelIcon"},{"name":"Box"},{"name":"BoxGrid"}]} */
(function () {
  var ENT = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return ENT[c]; });
  }

  // Button: label, variant (solid | outline | accent), size (md | sm), disabled
  function Button(p) {
    p = p || {};
    return '<button class="mira-btn" type="button" data-variant="' + esc(p.variant || 'solid') +
      '" data-size="' + esc(p.size || 'md') + '"' + (p.disabled ? ' disabled' : '') + '>' +
      esc(p.label || 'Button') + '</button>';
  }

  // Eyebrow: items (array of strings), joined by a middle dot
  function Eyebrow(p) {
    p = p || {};
    var items = p.items || ['Company', 'Brand'];
    var html = items.map(function (t, i) {
      return (i ? '<span aria-hidden="true">·</span>' : '') + '<span>' + esc(t) + '</span>';
    }).join('');
    return '<span class="mira-eyebrow">' + html + '</span>';
  }

  // Highlight: text, tone (sun | ember | lime | haze | cobalt)
  function Highlight(p) {
    p = p || {};
    return '<span class="mira-hl" data-tone="' + esc(p.tone || 'sun') + '"><i></i><i></i><i></i><i></i>' +
      esc(p.text || 'Highlight') + '</span>';
  }

  // CursorTag: name, tone (cobalt | ember | sun | lagoon | rose)
  function CursorTag(p) {
    p = p || {};
    return '<span class="mira-cursor" data-tone="' + esc(p.tone || 'cobalt') + '">' +
      '<svg viewBox="0 0 18 22" width="18" height="22" aria-hidden="true">' +
      '<path d="M2 2v15.5l4.2-3.9 2.7 6.2 2.6-1.1-2.7-6.1h5.8z" fill="#ffffff" stroke="#0b0b0d" stroke-width="1.2" stroke-linejoin="round"/></svg>' +
      '<span class="mira-cursor__tag">' + esc(p.name || 'Name') + '</span></span>';
  }

  // Atmosphere: palette (sunset | sky | cobalt | meadow), height (px), content (trusted HTML)
  function Atmosphere(p) {
    p = p || {};
    var h = p.height ? ' style="height:' + Number(p.height) + 'px"' : '';
    return '<div class="mira-atmo" data-palette="' + esc(p.palette || 'sunset') + '"' + h + '>' +
      '<div class="mira-atmo__field"><i class="mira-atmo__orb"></i></div>' +
      '<div class="mira-atmo__body">' + (p.content || '') + '</div></div>';
  }

  // GlassShape: shape (disc | ring | tile | plus | steps), size (px)
  function GlassShape(p) {
    p = p || {};
    return '<span class="mira-glass" data-shape="' + esc(p.shape || 'tile') +
      '" style="--mira-size:' + Number(p.size || 96) + 'px"></span>';
  }

  // PixelMark: size (px), tone (dark | light | ember | cobalt | glyph)
  var ROWS = ['X...X', 'XX.XX', 'X.X.X', 'X...X', 'X...X'];
  var TONES = {
    dark: { tile: '#0b0b0d', pix: '#ffffff' },
    light: { tile: '#ffffff', pix: '#0b0b0d', edge: '#d2d2cd' },
    ember: { tile: '#f4561e', pix: '#0b0b0d' },
    cobalt: { tile: '#0a1ffa', pix: '#ffffff' },
    glyph: { pix: 'currentColor' }
  };
  function PixelMark(p) {
    p = p || {};
    var size = Number(p.size || 64);
    var t = TONES[p.tone] || TONES.dark;
    var px = 46, gap = 6, pitch = px + gap, off = (400 - (5 * pitch - gap)) / 2;
    var rects = '';
    ROWS.forEach(function (row, r) {
      row.split('').forEach(function (ch, c) {
        if (ch === 'X') {
          rects += '<rect x="' + (off + c * pitch) + '" y="' + (off + r * pitch) + '" width="' + px + '" height="' + px + '" rx="3"/>';
        }
      });
    });
    var tile = t.tile
      ? (t.edge
        ? '<rect x="1" y="1" width="398" height="398" rx="79" fill="' + t.tile + '" stroke="' + t.edge + '" stroke-width="2"/>'
        : '<rect width="400" height="400" rx="80" fill="' + t.tile + '"/>')
      : '';
    return '<svg viewBox="0 0 400 400" width="' + size + '" height="' + size + '" role="img" aria-label="Mira">' +
      tile + '<g fill="' + t.pix + '">' + rects + '</g></svg>';
  }

  // Chip: label, mono (default true)
  function Chip(p) {
    p = p || {};
    return '<span class="mira-chip" data-mono="' + (p.mono === false ? 'false' : 'true') + '">' + esc(p.label || 'Chip') + '</span>';
  }

  // PixelIcon: name, tone, size (px). A 12 by 12 grid of pixels, the glyph lit over a dim grid.
  var ICONS = {
    morph: ['............', '.##########.', '.#........#.', '.#........#.', '.#.##.....#.', '.#.##.....#.', '.#.....##.#.', '.#.....##.#.', '.#........#.', '.##########.', '............', '............'],
    content: ['............', '..########..', '..#......#..', '..#.####.#..', '..#......#..', '..#.####.#..', '..#......#..', '..#.##...#..', '..#......#..', '..########..', '............', '............'],
    check: ['............', '............', '..........##', '.........##.', '........##..', '##.....##...', '.##...##....', '..##.##.....', '...###......', '....#.......', '............', '............'],
    search: ['............', '..#####.....', '.#.....#....', '#.......#...', '#.......#...', '#.......#...', '.#.....#....', '..#####.#...', '.......#.#..', '........#.#.', '.........##.', '............'],
    shield: ['............', '.##########.', '.#........#.', '.#........#.', '.#........#.', '.#........#.', '..#......#..', '..#......#..', '...#....#...', '....#..#....', '.....##.....', '............'],
    alert: ['............', '.....##.....', '....#..#....', '....#..#....', '...#.##.#...', '...#.##.#...', '..#..##..#..', '..#......#..', '.#...##...#.', '.#........#.', '.##########.', '............'],
    bars: ['............', '............', '..........##', '..........##', '.....##...##', '.....##...##', '.....##...##', '..##..##..##', '..##..##..##', '..##..##..##', '..##..##..##', '............'],
    bolt: ['............', '.......##...', '......##....', '.....##.....', '....##......', '...######...', '......##....', '.....##.....', '....##......', '...##.......', '..#.........', '............'],
    globe: ['............', '...######...', '..#..##..#..', '.#...##...#.', '.#...##...#.', '.##########.', '.#...##...#.', '.#...##...#.', '..#..##..#..', '...######...', '............', '............'],
    pin: ['............', '...######...', '..#......#..', '.#........#.', '.#...##...#.', '.#...##...#.', '.#........#.', '..#......#..', '...#....#...', '....#..#....', '.....##.....', '............'],
    lock: ['............', '...#####....', '..#.....#...', '..#.....#...', '..#.....#...', '.#########..', '.#.......#..', '.#...#...#..', '.#...#...#..', '.#.......#..', '.#########..', '............'],
    arrow: ['............', '............', '.......#....', '........#...', '.##########.', '.##########.', '........#...', '.......#....', '............', '............', '............', '............']
  };
  function PixelIcon(p) {
    p = p || {};
    var rows = ICONS[p.name] || ICONS.check;
    var size = Number(p.size || 40);
    var rects = '';
    rows.forEach(function (row, r) {
      row.split('').forEach(function (ch, c) {
        rects += '<rect' + (ch === '#' ? ' class="on"' : '') + ' x="' + (c * 10) + '" y="' + (r * 10) + '" width="8" height="8" rx="1.5"/>';
      });
    });
    return '<svg class="mira-pxi" data-tone="' + esc(p.tone || 'ink') + '" viewBox="0 0 118 118" width="' + size + '" height="' + size + '" aria-hidden="true">' + rects + '</svg>';
  }

  // Box: content (trusted HTML), rails (dotted margin with extended hairlines)
  function Box(p) {
    p = p || {};
    var box = '<div class="mira-box"><i></i><i></i><i></i><i></i>' + (p.content || '') + '</div>';
    return p.rails ? '<div class="mira-stage">' + box + '</div>' : box;
  }

  // BoxGrid: columns (2 | 3 | 4), cells [{ icon, tone, title, body, chips }], rails
  function BoxGrid(p) {
    p = p || {};
    var cells = (p.cells || []).map(function (c) {
      var chips = (c.chips || []).map(function (l) { return Chip({ label: l }); }).join('');
      return '<div class="mira-cell">' +
        (c.icon ? PixelIcon({ name: c.icon, tone: c.tone, size: 36 }) : '') +
        '<div class="mira-cell__title">' + esc(c.title || '') + '</div>' +
        '<div class="mira-cell__body">' + esc(c.body || '') + '</div>' +
        (chips ? '<div class="mira-cell__chips">' + chips + '</div>' : '') + '</div>';
    }).join('');
    return Box({ rails: p.rails, content: '<div class="mira-cells" data-cols="' + Number(p.columns || 4) + '">' + cells + '</div>' });
  }

  window.Mira = {
    Button: Button,
    Eyebrow: Eyebrow,
    Highlight: Highlight,
    CursorTag: CursorTag,
    Atmosphere: Atmosphere,
    GlassShape: GlassShape,
    PixelMark: PixelMark,
    Chip: Chip,
    PixelIcon: PixelIcon,
    Box: Box,
    BoxGrid: BoxGrid
  };
})();
