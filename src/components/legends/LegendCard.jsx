import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const LegendCard = ({ legend }) => {
  return (
    <Col xs={12} sd={8} md={6} lg={4} xl={3}>
      <Card>
        <Card.Img variant="top" src={legend.img} />
        <Card.Body>
          <Card.Header>{legend.name}</Card.Header>
          <ul>
            {legend.statistics.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Card.Footer className="text-muted">
            Career Years: {legend.official_career}
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default LegendCard;
