# google-sheet-colors
hex values of google docs/sheets colors. Adapted from <https://spreadsheet.dev/how-to-get-the-hexadecimal-codes-of-colors-in-google-sheets>

### formulae used

- `=substitute($M12," ", " "&index(split(C$4,char(10)&"#",false),1,1)&" ")&CHAR(10)&BG_HEX(C6)`
- `=let(BG_HEX, lambda(cell, BGHEXCURRENT(row(cell),column(cell)))`
- `=let(parts,split(B1,char(10)), hex, index(parts,1,2), name, index(parts,1,1), "const COLOR_"&upper(substitute(name," ","_"))&" = """&hex&"""")`
- `=join(char(10),vstack(TOCOL(N3:W3), tocol(TRANSPOSE(N4:W10))))`
- `=let(parts,split(B1,char(10)), hex, index(parts,1,2), name, index(parts,1,1), """"&substitute(name," ","_")&""": """&hex&""",")`
- `=="const COLORS={"&char(10)&"  "&join(char(10)&"  ",vstack(TOCOL(N3:W3), tocol(TRANSPOSE(N4:W10))))&char(10)&"}"`

### Display
[!light mode](light_mode.png)
