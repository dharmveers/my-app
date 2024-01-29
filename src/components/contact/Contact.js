import React, { useEffect } from "react";

const Contact=()=>{
    useEffect(()=>{
        document.title="Contct Us";
    });
    return(
        <div>
            <h1 className="text center my-5">Contact US </h1>
        </div>
    );
}

export default Contact;