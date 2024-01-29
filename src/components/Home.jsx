import {React, useEffect} from "react";
import { Button, Container } from "reactstrap";


const Home =()=>{
    useEffect(()=>{
      document.title="Home";
    });
    return(
        <div className="bg-secondary">
            <h1 className="text-center">Learn Code with Dharam</h1>
            <p className="mx-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            
              </p>
              <Container  className="text-center py-2">
                <Button color="primary"><a href="/add-Courses" className="text-white">Start Learning</a></Button>
              </Container>
        </div>
    );
}

export default Home;