# Assignment 1

This Node.js module provides basic school management functionalities, such as managing instructors, students, and class details.

# Installation

Create a new file called app.js and insert the following code:

```ruby
const school = require("./Gavin_SchoolManagement.js");

// Add and display instructors
console.log(school.addInstructor("Max", "English"));
console.log(school.listInstructors());

// Add and display students
console.log(school.addStudent("Paul", "Secondary 3"));
console.log(school.listStudents());

// View class details
console.log(school.viewClassDetails(101));
console.log(school.viewClassDetails(999)); // Non-existing class

```

# How to use

Run the following command in the terminal: node app.js

# Features

1. addInstructor(name, subject)

   - Adds a new instructor to the system

2. addStudent(name, grade)

   - Adds a new student to the system

3. listInstructors()

   - Lists all instructors currently in the system

4. listStudents()

   - Lists all students currently in the system

5. viewClassDetails(classID)
   - Displays the details of a specific class

# References

Looked at github docs about basic formatting syntax to help me format. [Documenet Link](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

Refered to Lab 2

Used chatgpt for the viewclassdetails function and to make my code cleaner
