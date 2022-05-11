import React from "react";
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import "./menu.css"
import buffalo from "../../assets/appetizers/buffalo-chicken.jpeg"
import shrimp from "../../assets/appetizers/grilled-shrimp.webp"
import wings from "../../assets/appetizers/chicken-wings.jpeg"
import bites from "../../assets/appetizers/pepper-bites.jpeg"

function Appetizers() {
    return (
        <Container>
            <div className="text-center">
            <h1>Appetizers</h1>
            </div>
        <Row>
            <Col className="container-fluid d-flex justify-content-center mt-2 card-columns">
            <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src={buffalo}
                        style={{ width: "16.9rem", height:"14rem" }}
                    />
                    <Card.Body>
                        <Card.Title className="text-center">Buffalo Style Chicken Egg Rolls</Card.Title>
                        <Card.Text>Stuffed with chicken, pepperoni, black beans, and smoked gouda served
                            with a blend of hot sauce and bleu cheese crumbles.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="text-center">$8.50</ListGroupItem>
                    </ListGroup>
                    <Button variant="dark">Add to cart</Button>
                </Card>

                <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src={shrimp}
                        style={{ width: "16.9rem", height:"14rem" }}
                    />
                    <Card.Body>
                        <Card.Title className="text-center">Grilled Shrimp</Card.Title>
                        <Card.Text>Six shrimp in a chipotle marinade served with chipotle aioli.</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="text-center">$8.50</ListGroupItem>
                    </ListGroup>
                    <Button variant="dark">Add to cart</Button>
                </Card>

                <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src={wings}
                        style={{ width: "16.9rem", height:"14rem" }}
                    />
                    <Card.Body>
                        <Card.Title className="text-center">Chicken Wings</Card.Title>
                        <Card.Text>Choice of hot, mild, BBQ, or teriyaki sauce served 
                            with celery and your choice of bleu cheese or ranch dressing</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="text-center">$8.50</ListGroupItem>
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
                        src={bites}
                        style={{ width: "16.9rem", height:"14rem" }}
                    />
                    <Card.Body>
                        <Card.Title className="text-center">Pepperjack Cheese Bites</Card.Title>
                        <Card.Text>Lightly breaded pepperjack cheese served with Ranch dressing</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="text-center">$6</ListGroupItem>
                    </ListGroup>
                    <Button variant="dark">Add to cart</Button>
                </Card>

                <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src={bites}
                        style={{ width: "16.9rem", height:"14rem" }}
                    />
                    <Card.Body>
                        <Card.Title className="text-center">Hot Pretzel Sticks</Card.Title>
                        <Card.Text>Six fresh made pretzel sticks served with house made dijon cheese.</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="text-center">$6</ListGroupItem>
                    </ListGroup>
                    <Button variant="dark">Add to cart</Button>
                </Card>

            </Col>
        </Row>
        </Container>
        
    );
}

export default Appetizers;