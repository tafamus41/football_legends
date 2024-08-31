import { data } from "../../helpers/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import LegendCard from "./LegendCard";
import React,{useState} from "react"

const LegendsContainer = () => {
  // console.log(data);
  const [search,setSearch]=useState("");

  return (
    <>
      <Form.Control onChange={(e)=>setSearch(e.target.value)} type="search" className="w-50 mx-auto my-2" placeholder="Search legends..."/>
      <Container className="p-3 rounded-4 card-container my-3">
        <Row>
          {data.filter((legend)=>legend.name.toLowerCase().includes(search.trim().toLowerCase())).map((legend) => (
            <LegendCard key={legend.id} legend={legend} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default LegendsContainer;
