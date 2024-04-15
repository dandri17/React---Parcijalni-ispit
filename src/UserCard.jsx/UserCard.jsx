import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function UserCard(response) {
  return (
    <Card  style={{ minWidth: '18rem' }}>
      <Card.Img variant="top" src={response.avatar_url} />
      <Card.Body>
        <Card.Title>User name</Card.Title>
        <Card.Text>BIO:{response.bio} </Card.Text>
        <Card.Text>LOCATION:{response.location} </Card.Text>
        <Card.Text>REPOSITORIES: </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{response.repos_url}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="success">Reset</Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default UserCard;