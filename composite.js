// Write a function called "rokket" 
// which produces the following output when called:
/*
 * console.log(rokket(2)(5)(3)) // this outputs 30
 * console.log(rokket(4)(2)(2)) // this outputs 16
 * console.log(rokket(8)(2)(1)) // this also outputs 16
 */
const rokket = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 * num2 * num3;
    }
  }
}
// thanks to the context of the outer function 
// can access its value within inner one
console.log(rokket(2)(5)(3))
console.log(rokket(4)(2)(2))
console.log(rokket(8)(2)(1))

