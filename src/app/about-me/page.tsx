'use client';
import { Button, Card } from 'react-bootstrap';
import { Navbar } from '../../modules/shared/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <Card>
        <Card.Header>About Me</Card.Header>
        <Card.Body>
          <Card.Title>Matias Stefanutti</Card.Title>
          <Card.Text>
            I've developed this web application and am eager to discuss my
            approach, decisions, and potential enhancements in an upcoming
            interview.
          </Card.Text>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/matiasstefanutti/"
            target="blank"
          >
            Check my Linkedin profile
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
