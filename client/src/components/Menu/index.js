import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./menu.css"
import MenuList from './MenuList';
import { appetizers, entrees, desserts, drinks } from './MenuData';



function Menu() {


  const [currentCategory, setCurrentCategory] = useState(0)
  const [currentMenu, setCurrentMenu] = useState([]);


  const list = [
    {
      id: "app",
      title: "Appetizers"
    },
    {
      id: "ent",
      title: "Entrees"
    },
    {
      id: "des",
      title: "Desserts"
    },
    {
      id: "drink",
      title: "Drinks"
    }
  ];

  useEffect(() => {

    switch (currentCategory) {
      case "app":
        setCurrentMenu(appetizers);
        break;
      case "ent":
        setCurrentMenu(entrees);
        break;
      case "des":
        setCurrentMenu(desserts);
        break;
      case "drink":
        setCurrentMenu(drinks);
        break;
      default:
        setCurrentMenu(appetizers);
    }

  },
   [currentCategory])


  return (
    <Container className="text-center mt-5">
      <h1>Menu</h1>
      <ul className="flex-row justify-content-around mt-3 p-2">
        {list.map((item) => (
          <MenuList
            title={item.title}
            active={currentCategory === item.id}
            setCurrentCategory={setCurrentCategory}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container-fluid d-flex flex-row justify content-center card-columns">
        {currentMenu.map((data) => (

          <Row>
            <Col/>
            <Card className="p-2" border="dark" style={{ width: "18rem " }}>
              <Card.Img
                variant="top"
                src={data.img}
                style={{ width: "16.9rem", height: "14rem" }}
              />
              <Card.Body>
                <Card.Title className="text-center">{data.name}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="text-center ">{data.price}</ListGroupItem>
              </ListGroup>
              <Button variant="dark">Add to cart</Button>

            </Card>
          </Row>


        ))}
      </div>
    </Container>
  );
}

export default Menu;
