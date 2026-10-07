BoxGrid splits a box into equal cells divided by hairlines, each cell led by a pixel icon.

**You provide:** `columns` (2, 3 or 4), a list of `cells` with an `icon`, `tone`, `title`, `body` and `chips`, and an optional `rails` flag.

- Write cell titles in sentence case at two to four words. Write the body in one or two short sentences.
- Fill a grid completely. Use 4 columns for 4 or 8 cells, 3 columns for 3 or 6 and 2 columns for 2 or 4.
- Give every cell a different `tone` from the secondary palette, and repeat a tone only across rows.
- End a cell with one `Chip` that names the command or attribute.
- The grid folds to 2 columns below 900px and to 1 column below 560px.
