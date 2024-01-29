
import axios from "axios";
import { Fragment,useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Button , FormGroup,Label,Input, Form } from "reactstrap";
import { render } from "react-dom";

const AddCourse = () => {
  useEffect(()=>{
    document.title="Add Courses";
  },[]);
  
  const [course,setCourse]=useState({
    title:"",
    author:"",
    description:"",
    price:0
  });
  const handleInputs=(e)=>{
    setCourse({...course,[e.target.name]:e.target.value});
  }
  const addCourses=async(e)=>{
        e.preventDefault();
        await axios.post('https://user.up.railway.app/addCourse',course)
                   .then((response)=>{
                    toast.success(response.data,{position:"top-center"})
                    render("/add-Course");                   
                  })
                   .catch((error)=>console.log(error));
  }

  return (
    <Fragment>
        <h1 className="text-center"> Add Courses Here</h1>
      <Form onSubmit={addCourses}>
      <FormGroup>
        <Label for="title">Course Title</Label>
        <Input id="title"
               type="text"
               name="title"
               placeholder="Enter course title"
               onChange={handleInputs}
        />
      </FormGroup>
      <FormGroup>
        <Label for="author">Author Name</Label>
        <Input id="author"
               type="text"
               name="author"
               placeholder="Enter Author name"
               onChange={handleInputs}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Course Description</Label>
        <textarea id="description"
                  name="description"
                  placeholder="Enter course desc"
                  rows={4}
                  onChange={handleInputs}
                  style={{width:"100%"}}
        />
      </FormGroup>
      <FormGroup>
        <Label for="price">Course Price</Label>
        <Input id="price"
               type="number"
               name="price"
               placeholder="Enter course price"
              onChange={handleInputs}
        />
      </FormGroup>
      <Container className="text-center py-2">
        <Button type="submit" color="success">Add Course</Button>
        <Button type="reset" color="warning" className="ms-1">Reset</Button>
      </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;