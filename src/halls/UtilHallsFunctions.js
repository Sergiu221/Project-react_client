export function getHeaderTable(renderEditable) {
  let column = [
    {
      Header: "Nume",
      accessor: "name",
      Cell: renderEditable,
      exportHead: true
    },
    {
      Header: "Nr total de locuri",
      accessor: "size",
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
