import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'reactstrap';
import Update from './Update';
import { toast } from 'react-toastify';

const Course=({course})=>{
  //update course...
  const updateCourse=(id)=>{
    axios.get(`/courses/${id}`).then(
      (response)=>{
        console.log("loaded...");
        console.log(response.data);

      },
      (error)=>{
        console.log("something went wrong");
      }
    );
  }
  
  const[showModel,setShowModel]=useState(false);
    
  // delete course...
    const deleteCourse=async(id)=>{
      await axios.post(`/deleteCourse/${id}`)
                 .then((response)=>{toast.warning(response.data,{position:"bottom-center"})})
                 .catch(error=>console.log(error));
    }
    const closeModel=()=>setShowModel(false);
    return (
        <Card className='mt-1'>
            <Card.Header className='bg-info mt-1'>{course.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
            <Card.Text>{course.id} : {course.description}</Card.Text>
            <footer className="d-flex justify-content-between">
             <cite>{course.author}</cite>
             <caption>Rs {course.price}</caption>
          </footer>
            </blockquote>
            <Container className='text-center'>
            <Button variant="danger" onClick={()=>{deleteCourse(course.id)}}>
              Delete</Button>
            <Button variant="warning" 
                    className='ms-1'
                    onClick={()=>{
                      updateCourse(course.course_id);
                      setShowModel(true);
                    }}>
              Update</Button>
              {showModel && <Update closeModel={closeModel} item={course}/>} 
            </Container>
          </Card.Body>
        </Card>
      );
}

export default Course;