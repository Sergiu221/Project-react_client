export function getHeaderTable(renderEditable) {
  let column = [
    {
      Header: "CNP",
      accessor: "cnp",
      Cell: renderEditable,
      exportHead: true
    },
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
    },
    {
      Header: "Limba examen",
      accessor: "examLanguage",
      Cell: renderEditable,
      exportHead: true
    },
    {
      Header: "Materie examen",
      accessor: "examField",
      Cell: renderEditable,
      exportHead: true
    },
    {
      Header: "Tip examen",
      accessor: "examType",
      Cell: renderEditable,
      exportHead: true
    },
    {
      Header: "Liceu",
      accessor: "highSchool",
      Cell: renderEditable,
      exportHead: false
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
