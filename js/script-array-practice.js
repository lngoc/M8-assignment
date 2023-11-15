// Step 1
let favoriteMovies = ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5"];
console.log("Second Movie:", favoriteMovies[1]);

// Step 2
let moviesConstructor = new Array(5);
moviesConstructor[0] = "Movie 1";
moviesConstructor[1] = "Movie 2";
moviesConstructor[2] = "Movie 3";
moviesConstructor[3] = "Movie 4";
moviesConstructor[4] = "Movie 5";
console.log("First Movie:", moviesConstructor[0]);

// Step 3
moviesConstructor.splice(2, 0, "New Movie");
console.log("Array Length:", moviesConstructor.length);

// Step 4
let moviesLiteral1 = ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5"];
delete moviesLiteral1[0];
console.log("Movies after delete:", moviesLiteral1);

// Step 5
let moviesLiteral2 = ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5", "Movie 6", "Movie 7"];
console.log("Using for/in loop:");
for (let index in moviesLiteral2) {
  console.log(moviesLiteral2[index]);
}

// Step 6
console.log("Using for/of loop:");
for (let movie of moviesLiteral2) {
  console.log(movie);
}

// Step 7
console.log("Sorted View:");
for (let movie of moviesLiteral2.sort()) {
  console.log(movie);
}

// Step 8
let leastFavMovies = ["Regret 1", "Regret 2", "Regret 3"];
console.log("Movies I like:\n" + moviesLiteral2.join("\n") + "\n\nMovies I regret watching:\n" + leastFavMovies.join("\n"));

// Step 9
let mergedMovies = moviesLiteral2.concat(leastFavMovies);
console.log("Merged and reverse sorted:", mergedMovies.sort().reverse());

// Step 10
console.log("Last item:", mergedMovies.slice(-1)[0]);

// Step 11
console.log("First item:", mergedMovies.slice(0, 1)[0]);

// Step 12
let indicesToRemove = [0, 1, 2];
let moviesToRemove = mergedMovies.filter((movie, index) => indicesToRemove.includes(index));
let moviesToAdd = ["New Movie 1", "New Movie 2", "New Movie 3"];
indicesToRemove.forEach(index => mergedMovies[index] = moviesToAdd.shift());

// Step 13
let favoriteMoviesRanking = [
  ["Movie 1", 1],
  ["Movie 2", 2],
  ["Movie 3", 3],
  ["Movie 4", 4],
  ["Movie 5", 5]
];

// Filter and display movie names
let movieNames = favoriteMoviesRanking.map(movie => movie[0]);
console.log("Filtered Movie Names:", movieNames);

// Step 14
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

// Anonymous function to display employees
let showEmployee = function (employeeArray) {
  console.log("Employees:\n" + employeeArray.join("\n"));
};

showEmployee(employees);

// Step 15
function filterValues(array) {
  return array.filter(value => value !== false && value !== null && value !== 0 && value !== '');
}

console.log("Filtered Values:", filterValues([58, '', 'abcd', true, null, false, 0]));

// Step 16
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Random Item:", getRandomItem(numericArray));

// Step 17
function getLargestNumber(array) {
  return Math.max(...array.filter(value => typeof value === 'number'));
}

console.log("Largest Number:", getLargestNumber([3, 7, 1, 10, 5]));
