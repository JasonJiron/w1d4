var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "bruce",    age: 10}
];

var sortedNames = students.sort((a,b) => {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  if (a.name - b.name === 0) {
    return a.age - b.age
  }
});




console.log(sortedNames)


