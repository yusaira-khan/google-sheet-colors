// adapted from https://spreadsheet.dev/how-to-get-the-hexadecimal-codes-of-colors-in-google-sheets

function BGHEXSHEET(sheet, row, column) {
  const background = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet).getRange(row, column).getBackground();
  return background;
}

function BGHEXCURRENT(row, column) {
  const background = SpreadsheetApp.getActiveSheet().getRange(row, column).getBackground();
  return background;
}

function SHEETNAME() {
  const background = SpreadsheetApp.getActiveSheet().getName();
  return background;
}
