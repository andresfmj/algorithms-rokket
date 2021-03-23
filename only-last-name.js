/*
 * Write a function called "rokket" which receives a list of names 
 * from a contact book. 
 * Each name is an object consisting of a first name and last name. 
 * Return a list that shows only the last names.

 * Example:
 * const contacts = [
 *   { firstName: 'Juanito', lastName: 'Rokket' },
 *   { firstName: 'James', lastName: 'Bond' },
 *   { firstName: 'Harry', lastName: 'Potter' }
 * ]
 * console.log(rokket(contacts)) // this outputs ['Rokket', 'Bond', 'Potter']
 */
const rokket = (names) => {
  const lastnames = names.map(item => {
    return item.lastName
  })
  return lastnames;
}
console.log(
  rokket([
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
  ])
)
