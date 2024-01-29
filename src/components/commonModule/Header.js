
import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
        return (
            <div>
                <Card>
                    <CardBody className="bg-warning">
                    <h1 className="text-center"> Welcome to React Application</h1>
                    </CardBody>
                </Card>
            </div>
        );
}

export default Header;