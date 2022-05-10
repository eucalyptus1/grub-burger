import React from "react";
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./menu.css"
import fish from "../../assets/entrees/fish-sandwich.jpg"
import angus from "../../assets/entrees/angus-burger.jpeg"
import mushroom from "../../assets/entrees/mushroom-burger.jpg"
import bleu from "../../assets/entrees/bleu-burger.jpg"
import cheese from "../../assets/entrees/phillys.webp"


function Entrees() {
    return (


        <Container>
            <div className="text-center">
                <h1>Entrees</h1>
            </div>
            <Row>
                <Col className="container-fluid d-flex justify-content-center mt-2 card-columns">
                    <Card className="p-2" border="dark" style={{ width: "18rem " }}>
                        <Card.Img
                            variant="top"
                            src={fish}
                            style={{ width: "16.9rem", height: "14rem" }}
                        />
                        <Card.Body>
                            <Card.Title className="text-center">Fish Sandwich</Card.Title>
                            <Card.Text> On salted rye, grilled or fried Mahi Mahi with lettuce,
                                tomato, and smoked tartar sauce </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="text-center ">$12</ListGroupItem>
                        </ListGroup>
                        <Button variant="dark">Add to cart</Button>

                    </Card>

                    <Card className="p-2" border="dark" style={{ width: "18rem " }}>
                        <Card.Img
                            variant="top"
                            src={angus}
                            style={{ width: "16.9rem", height: "14rem" }}
                        />
                        <Card.Body>
                            <Card.Title className="text-center">Angus Hamburger</Card.Title>
                            <Card.Text>On a fresh baked bun, half pound of angus beef, with lettuce, tomato, and
                                your choice of cheddar or swiss cheese</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="text-center">$9</ListGroupItem>
                        </ListGroup>
                        <Button variant="dark">Add to cart</Button>
                    </Card>

                    <Card className="p-2" border="dark" style={{ width: "18rem " }}>
                        <Card.Img
                            variant="top"
                            src={mushroom}
                            style={{ width: "16.9rem", height: "14rem" }}
                        />
                        <Card.Body>
                            <Card.Title className="text-center">Mushroom and Swiss Burger</Card.Title>
                            <Card.Text> On a fresh baked bun, half pound of angus beef topped with sauteed
                                mushrooms, swiss cheese, lettuce and tomato</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="text-center">$10</ListGroupItem>
                        </ListGroup>
                        <Button variant="dark">Add to cart</Button>
                    </Card>

                    <Card  className="p-2" border="dark" style={{ width: "18rem " }}>
                        <Card.Img
                            variant="top"
                            src={bleu}
                            style={{ width: "16.9rem", height: "14rem" }}
                        />
                        <Card.Body>
                            <Card.Title className="text-center">Black and Bleu Burger</Card.Title>
                            <Card.Text> On a fresh baked bun, half pound of angus beef blackened and topped with bleu cheese crumbles,
                                lettuce, and tomato</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="text-center">$10</ListGroupItem>
                        </ListGroup>
                        <Button variant="dark">Add to cart</Button>

                    </Card>

                </Col>
            </Row>

             <Row>

                <Col className="container-fluid d-flex justify-content-center g-4">
                    <Card className="p-2" border="dark" style={{ width: "18rem " }}>
                        <Card.Img
                            variant="top"
                            src={cheese}
                            style={{ width: "16.9rem", height: "14rem" }}
                        />
                        <Card.Body>
                            <Card.Title className="text-center">Cheesesteak Sandwich</Card.Title>
                            <Card.Text> On a fresh baked baquette, ribeye steak, onions, green peppers, and
                                shredded mozzarella</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="text-center">$11</ListGroupItem>
                        </ListGroup>
                        <Button variant="dark">Add to cart</Button>
                    </Card>


                </Col>
            </Row> 
        </Container>

    );
}

export default Entrees;