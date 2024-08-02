import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import StudentList from './Student/StudentList';
import AddStudent from './Student/AddStudent';
import EditStudent from './Student/EditStudent';
import StudentDetail from './Student/StudentDetail';

function App() {
  return (
   <>
   <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/students/:id" element={<StudentDetail />} />
        </Routes>
      </div>
    </Router>
   
   </>
  );
}

export default App;
