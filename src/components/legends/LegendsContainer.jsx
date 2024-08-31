import { data } from "../../helpers/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LegendCard from "./LegendCard";

const LegendsContainer = () => {
  // console.log(data);
  return (
    <Container>
      <Row>
        {data.map((legend) => (
          <LegendCard key={legend.id} legend={legend}/>
        ))}
      </Row>
    </Container>
  );
};

export default LegendsContainer;
