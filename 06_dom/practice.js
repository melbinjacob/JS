// function doubleNumbers(numbers) {
//     return numbers.map((item) => item*2);
// }

// const inputArray = [1, 2, 3, 4, 5];
// const doubledArray = doubleNumbers(inputArray);


// console.log(doubledArray);
// // Output should be: [2, 4, 6, 8, 10]

function capitalizeNames(names) {
    return names.map((item) => item.charAt(0).toUpperCase() + item.slice(1))
}
  
  const inputNames = ['john', 'alice', 'bob', 'carol'];
  const capitalizedNames = capitalizeNames(inputNames);

  console.log(inputNames[0].charAt(0).toUpperCase());
  console.log(inputNames[0].slice(1));
  
  console.log(capitalizedNames);
  // Output should be: ['John', 'Alice', 'Bob', 'Carol']
  