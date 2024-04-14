import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


function FormCard() {
  return (
    <Card>
      <Card.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter user name:</Form.Label>
        <Form.Control type="text" placeholder="User" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Find user!
      </Button>{` `}
    </Form>
      </Card.Body>
    </Card>
  );
}

export default FormCard;