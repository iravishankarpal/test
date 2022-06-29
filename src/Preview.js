import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import PreviewContent from "./PreviewContent";
function Preview() {
  return (
    <Container>
      <h1>Pain & Functional Description</h1> <PreviewContent></PreviewContent>
      <Link to="/">
        <Button>back</Button>
      </Link>
      <Button>submit</Button>
    </Container>
  );
}

export default Preview;
