import React, { useState } from 'react';
import StudentService from '../Services/StudentService';
import styles from './AddStudent.module.css';

const AddStudent = () => {
  const [student, setStudent] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    StudentService.addStudent(student);
    setStudent({ name: '', email: '' });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
