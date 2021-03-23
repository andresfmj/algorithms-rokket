// Write a function called "rokket" which receives a string A 
// and an integer N and returns a new string with A repeated N times.
/*
 * Example:
 * console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
 * console.log(rokket('abc', 2)) // this outputs 'abcabc'
 */
const rokket = (string, number) => {
  let i = number;
  let repeated = '';
  while (i > 0) {
    repeated += string;
    i--;
  }
  return repeated;
}
console.log(rokket('node', 5));
console.log(rokket('abc', 2));

