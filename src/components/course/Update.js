import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Update = ({closeModel,item}) => {
  
    const[course,setCourse]=useState(item);
    const update=async(e)=>{
      e.preventDefault();
      await axios.post('https://user.up.railway.app/addCourse',course)
                 .then(()=>{
                  toast.success("Course Updated Successfully",{position:"top-center"})
                  closeModel();
                  }).catch(err=>console.log(err));
      //updateCourseOnServer(course);
        
  }

  return (
    <> 
    <Modal isOpen={closeModel} size="lg">
    <ModalHeader className="bg-primary">Update Course Here</ModalHeader>
    <ModalBody>
    <div className="modal-wrapper"></div>
    <div className="modal-container">   
      <Form onSubmit={update}>
        {/* course id */}
        <FormGroup row>
          <Label for="id" sm={2}>
            Course ID :
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="id"
              id="id"
              placeholder="Enter courseID.."
              value={item.id}
              disabled
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="title" sm={2}>
            Course Title :
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="title"
              id="title"
              defaultValue={item.title}
              onChange={(e)=>{
                setCourse({...course, course_title: e.target.value});
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="desc" sm={2}>
            Course Desc :
          </Label>
          <Col sm={10}>
            <textarea type="text"
                      name="description"
                      id="description"
                      defaultValue={item.description}
                      rows={4}
                      onChange={(e)=>{
                        setCourse({...course, course_desc: e.target.value});
                      }}
                      style={{width:"100%"}}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}></Label>
          <Col sm={4}>
            <Input type="text" name="author" defaultValue={item.author}/>
          </Col>
          <Col sm={2}></Col>
          <Col sm={4}>
            <Input type="text" name="price" defaultValue={item.price}/>
          </Col>
        </FormGroup>
        <ModalFooter>
        <Container className="text-center">
            <Button type="submit"
                    color="success"
            >Update</Button>
            <Button className="ms-2 bg-danger"
                    onClick={closeModel}
            >Cancel</Button>
        </Container>
        </ModalFooter>
      </Form>
      </div>
      </ModalBody>
    </Modal>

    </>  );
};

export default Update;
