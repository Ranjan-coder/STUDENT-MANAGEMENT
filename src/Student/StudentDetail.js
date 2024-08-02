import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import StudentService from '../Services/StudentService';
import styles from './StudentDetail.module.css';

const StudentDetail = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const studentData = StudentService.getStudent(Number(id));
    if (studentData) {
      setStudent(studentData);
    }
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Student Detail</h2>
      <p className={styles.detail}>Name: {student.name}</p>
      <p className={styles.detail}>Email: {student.email}</p>
      <Link to={`/edit-student/${id}`} className={styles.link}>Edit</Link>
    </div>
  );
};

export default StudentDetail;
