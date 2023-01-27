import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard(props) {
  return (
    <Card>
      <Card.Img variant="right" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.data.dataToDisplay.firstName} {props.data.dataToDisplay.lastName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Profession</Card.Subtitle>
        <Card.Title>Citizen</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.data.dataToDisplay.city}, {props.data.dataToDisplay.country}</Card.Subtitle>
        <Card.Title>Hobby</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Hobby</Card.Subtitle>
        <Button variant="secondary">Close</Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;