const instructors = [
  { id: 1, name: "Gavin", subject: "Mathematics" },
  { id: 2, name: "Deliang", subject: "Science" },
];

const students = [
  { id: 1, name: "John", grade: "Secondary 1" },
  { id: 2, name: "Jack", grade: "Secondary 2" },
];

const classes = [
  { classId: 101, instructorId: 1 },
  { classId: 102, instructorId: 2 },
];

// Add a new instructor
function addInstructor(name, subject) {
  instructors.push({ id: instructors.length + 1, name, subject });
  return `Instructor ${name} added successfully.`;
}

// Add a new student
function addStudent(name, grade) {
  students.push({ id: students.length + 1, name, grade });
  return `Student ${name} added successfully.`;
}

// List all instructors
function listInstructors() {
  return instructors.map((inst) => `${inst.name} (${inst.subject})`).join("\n");
}

// View all students
function listStudents() {
  return students.map((stu) => `${stu.name} (${stu.grade})`).join("\n");
}

// Get the schedule of a class
function viewClassDetails(classId) {
  const classInfo = classes.find((cls) => cls.classId === classId);
  if (!classInfo) return `Class ID ${classId} not found.`;
  const instructor = instructors.find(
    (inst) => inst.id === classInfo.instructorId
  );
  return `Class ${classId} is taught by ${instructor.name} (${instructor.subject}).`;
}

// Export the functions
module.exports = {
  addInstructor,
  addStudent,
  listInstructors,
  listStudents,
  viewClassDetails,
};
