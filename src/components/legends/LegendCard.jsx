import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const LegendCard = ({ legend }) => {
  const [image, setImage] = useState(true);
  return (
    <Col xs={12} sd={8} md={6} lg={4} xl={3}>
      <Card onClick={() => setImage(!image)} className="legend-card">
        {image ? (
          <Card.Img variant="top" src={legend.img} />
        ) : (
          <Card.Body>
            <Card.Header>{legend.name}</Card.Header>
            <ul className="m-auto ps-0">
              {legend.statistics.map((item, index) => (
                <li key={index} className="list-unstyled h5 text-start">
                  ⚽{item}
                </li>
              ))}
            </ul>
            <Card.Footer className="text-muted">
              Career Years: {legend.official_career}
            </Card.Footer>
          </Card.Body>
        )}
      </Card>
    </Col>
  );
};

export default LegendCard;
