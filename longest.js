// Write a function called "rokket" which receives
// an array with several strings. 
// It must output the longest (character length) string in the array.
/*
 * Example: 
 * const list = ['best', 'company', 'ever']
 * console.log(rokket(list)) // this outputs 'company'
 */
const rokket = (list) => {
  let maxLen = 0;
  let lastStr = '';
  list.forEach((item) => {
    if (item.length > maxLen) {
      maxLen = item.length;
      lastStr = item;
    }
  })
  return lastStr;
}
console.log(rokket(['best', 'company', 'ever']));
console.log(rokket(['structure', 'animals', 'algorithms']));
