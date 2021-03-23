/*
 * Write a function called "rokket" which receives two number arrays 
 * of any size. 
 * Return a list containing the intersection of the two arrays 
 * (all unique numbers in both arrays).
  
 * Example:
 * console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
 * console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]
 */
const rokket = (list1, list2) => {
  let merged = list1.concat(list2);
  return merged.reduce(
    (prev, item) => prev.includes(item) ? prev : [...prev, item], 
    []
  )
}
console.log(rokket([1, 2, 5], [2, 1, 6])); 
console.log(rokket([1, 2, 3], [4, 5, 6]));
