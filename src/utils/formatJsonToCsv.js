const formatJsonToCsv = (arr, columns, delimiter = ',') => [
  columns.join(delimiter),
  ...arr.map(obj => columns.reduce(
    (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
    '',
  )),
].join(',');

export default formatJsonToCsv;
