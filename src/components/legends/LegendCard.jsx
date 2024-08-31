import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


const LegendCard = ({legend}) => {
  return (
    <Col xs={12} sd={8} md={6} lg={4} xl={3} >
      <Card>
        <Card.Img variant="top" src={legend.img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default LegendCard;
