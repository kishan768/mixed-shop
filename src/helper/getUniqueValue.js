export function getUniqueValue(data, type) {
  let unique = ["all", ...new Set(data.map((item) => item[type]))];
  //   console.log(unique);
  return unique;
}
