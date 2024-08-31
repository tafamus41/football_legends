import { data } from "../../helpers/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import LegendCard from "./LegendCard";

const LegendsContainer = () => {
  // console.log(data);
  return (
    <>
      <Form.Control type="search" className="w-50 mx-auto my-2" placeholder="Search legends..."/>
      <Container>
        <Row>
          {data.map((legend) => (
            <LegendCard key={legend.id} legend={legend} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default LegendsContainer;
