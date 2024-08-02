import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentService from '../Services/StudentService';
import styles from './StudentList.module.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(StudentService.getStudents());
  }, []);

  const handleDelete = (id) => {
    StudentService.deleteStudent(id);
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Student List</h2>
      <p className={styles.username}>Click on Student name to See details</p>
      <Link to="/add-student" className={styles.addLink}>Add Student</Link>
      <ul className={styles.list}>
        {students.map(student => (
          <li key={student.id} className={styles.listItem}>
            <Link to={`/students/${student.id}`} className={styles.itemLink}>{student.name}</Link>
            <button
              onClick={() => handleDelete(student.id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
