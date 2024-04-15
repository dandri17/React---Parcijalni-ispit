import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';




function FormCard() {

  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`https://api.github.com/users/${value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((json) => {
        console.log("API response:", json); // Log API response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const showInfo = (value) => {
    return
  };

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }


  return (
    <Card >
      <Card.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name of the user:</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="User" 
        value={input} 
        onChange={(e) => handleChange(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={(e) => showInfo(e.target.value)}>
        Find user!
      </Button>{` `}
    </Form>
      </Card.Body>
    </Card>
  );
}

export default FormCard;