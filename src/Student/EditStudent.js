import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentService from '../Services/StudentService';
import styles from './EditStudent.module.css';

const EditStudent = () => {
  const [student, setStudent] = useState({ name: '', email: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const studentData = StudentService.getStudent(Number(id));
    if (studentData) {
      setStudent(studentData);
    } else {
      alert('Student not found');
      navigate('/students');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    StudentService.updateStudent(Number(id), student);
    navigate('/students');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Edit Student</h2>
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
        <button type="submit" className={styles.button}>Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
