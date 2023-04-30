// Create an array of students holding their last name, first name, and age with 3 students. To validate, please
// log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my
// name is John Doe and I'm 19 years old."

var students = [
  {
    firstName: "Yoni",
    lastName: "Getachew",
    age: "23",
  },
  {
    firstName: "Jazer",
    lastName: "Linares",
    age: "22",
  },
  {
    firstName: "Phil",
    lastName: "Minard",
    age: "33",
  },
];

// if (students[0]) {
//     console.log(`Hello! My name is ${students[0].firstName} ${students[0].lastName} and I am ${students[0].age} years old.`)
// }
// if (students[1]) {
//     console.log(`Hello! My name is ${students[1].firstName} ${students[1].lastName} and I am ${students[1].age} years old.`)
// }
// if (students[2]) {
//     console.log(`Hello! My name is ${students[2].firstName} ${students[2].lastName} and I am ${students[2].age} years old.`)
// }
// else {
//     console.log(`Hello! My name is ${students[4].firstName} ${students[4].lastName} and I am ${students[4].age} years old.`)
// }


function displayStudent (student) {
  if (student) {
      console.log(`Hello! My name is ${student.firstName} ${student.lastName} and I am ${student.age} years old.`)
  }
  else {
      console.log(`Student not in the system`)
  }
}

displayStudent(students[1])