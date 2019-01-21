export function getHeaderTable(renderEditable) {
  let column = [
    {
      Header: "Nume",
      accessor: "firstName",
      Cell: renderEditable,
      exportHead: true
    },
    {
      Header: "Prenume",
      accessor: "lastName",
      Cell: renderEditable,
      exportHead: true
    }
  ];
  return column;
}

export function getHeaderTableFilter(renderEditable) {
  let result = getHeaderTable(renderEditable).filter(function(ColumnHeader) {
    return ColumnHeader.exportHead === true;
  });
  return result;
}
