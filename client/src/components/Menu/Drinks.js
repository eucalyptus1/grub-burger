import React from "react";
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./menu.css"
import tea from "../../assets/drinks/sweet-tea.jpg"
import lemonade from "../../assets/drinks/lemonade.webp"
import passion from "../../assets/drinks/passion-fruit.jpg"
import strawberry from "../../assets/drinks/strawberry-marg.jpg"
import beer from "../../assets/drinks/beer.jpg"

function Drinks() {
    return (
        <Container>
        <div className="text-center">
        <h1>Drinks</h1>
        </div>
    <Row>
        <Col className="container-fluid d-flex justify-content-center mt-2 card-columns">
        <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={tea}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">Fresh Brewed Sweet Tea</Card.Title>
                    <Card.Text>This delicious sweet tea is freshly brewed each day </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center">$3</ListGroupItem>
                </ListGroup>
                <Button variant="dark">Add to cart</Button>
            </Card>

            <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={lemonade}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">Lemonade</Card.Title>
                    <Card.Text>Freshly squeezed lemons make a tasty lemonade!</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center">$3</ListGroupItem>
                </ListGroup>
                <Button variant="dark">Add to cart</Button>
            </Card>

            <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={passion}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">Passion Fruit Martini</Card.Title>
                    <Card.Text> Fresh passion fruit, passion fruit juice, and passion fruit flavored vodka.</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center">$8</ListGroupItem>
                </ListGroup>
                <Button variant="dark">Add to cart</Button>
            </Card>

        </Col>
    </Row>

    <Row>
        <Col className="container-fluid d-flex justify-content-center g-4 card-columns">
        <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={strawberry}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">Frozen Strawberry Margarita</Card.Title>
                    <Card.Text>Strawberry, tequila, and salt/sugar on the rim</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center">$8</ListGroupItem>
                </ListGroup>
                <Button variant="dark">Add to cart</Button>
            </Card>

            <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={beer}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">House Beer</Card.Title>
                    <Card.Text>Enjoy a cold house beer.</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center">$5</ListGroupItem>
                </ListGroup>
                <Button variant="dark">Add to cart</Button>
            </Card>
            
        </Col>
    </Row>
    </Container>
    );
}

export default Drinks;