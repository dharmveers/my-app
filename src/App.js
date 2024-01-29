
import './App.css';
import AllCourses from './components/course/AllCourses';
import AddCourse from './components/course/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/commonModule/Header';
import Menus from './components/commonModule/Menus';
import Home from './components/Home';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route ,Routes} from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import '../src/components/assets/css/style.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
        <div>
          <Header/>
           <Router>
            <Container style={{backgroundColor:'greenyellow', marginTop:'20px', padding:'1rem',minHeight:"80vh"}}>
              <Row>
                <Col md={4}>
                  <Menus/>
                </Col>
                <Col md={8}>
                 
                    <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path='/add-Courses' element={<AddCourse/>}/>
                    <Route exact path='/view-Courses' element={<AllCourses/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/contact' element={<Contact/>}/>
                    </Routes>
                </Col>
              </Row>
            </Container>
            </Router>
            <ToastContainer/>
        </div>
  );
}

export default App;
