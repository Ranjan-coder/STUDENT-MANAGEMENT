const STUDENTS_KEY = 'students';

class StudentService {
  getStudents() {
    return JSON.parse(localStorage.getItem(STUDENTS_KEY)) || [];
  }

  getStudent(id) {
    const students = this.getStudents();
    return students.find(student => student.id === id);
  }

  addStudent(student) {
    const students = this.getStudents();
    student.id = new Date().getTime();
    students.push(student);
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
  }

  updateStudent(id, updatedStudent) {
    const students = this.getStudents();
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      students[index] = updatedStudent;
      localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
    }
  }

  deleteStudent(id) {
    const students = this.getStudents();
    const updatedStudents = students.filter(student => student.id !== id);
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(updatedStudents));
  }
}

export default new StudentService();
