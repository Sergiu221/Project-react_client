export function getHeaderTable(renderEditable) {
  let column = [];
  column.push(new ColumnHeader("Nume", "name", renderEditable, true));
  column.push(new ColumnHeader("Nr total de locuri", "size", renderEditable, true));
  return column;
}

export function getHeaderTableFilter() {
  let result = getHeaderTable().filter(function(ColumnHeader) {
    return ColumnHeader.exportHead === true;
  });
  return result;
}
class ColumnHeader {
  constructor(header, accessor, cell, exportHead) {
    this.header = header;
    this.accessor = accessor;
    this.cell = cell;
    this.exportHead = exportHead;
  }
}
