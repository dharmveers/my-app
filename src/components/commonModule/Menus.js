import React from "react";
import { Link } from "react-router-dom";
import { ListGroup} from "reactstrap";

const Menus = () => {
  return (
    <ListGroup>
      <Link className="list-group-item list-group-item-action" to="/" tag="a" action>
        Home
      </Link>
      <Link className="list-group-item list-group-item-action" to="/add-Courses" tag="a"  action>
        Add Courses
      </Link>
      <Link className="list-group-item list-group-item-action" to="/view-Courses" tag="a" action>
        View Courses
      </Link>
      <Link className="list-group-item list-group-item-action" to="/about" tag="a" action>
        About
      </Link>
      <Link className="list-group-item list-group-item-action" to="/contact" tag="a" action>
        Contact Us
      </Link>
    </ListGroup>
  );
};

export default Menus;