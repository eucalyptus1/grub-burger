import React from "react";
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import "./menu.css"

function Desserts() {
    return (
        <Container>
        <div className="text-center">
        <h1>Desserts</h1>
        </div>
    <Row>
        <Col className="container-fluid d-flex justify-content-center mt-2 card-columns">
        <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={pic}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">Milk Shake</Card.Title>
                    <Card.Text>Handcrafted milkshake of your choice: Vanilla, Chocolate, Strawberry, Oreo</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center"></ListGroupItem>
                </ListGroup>
                <Button variant="dark">Add to cart</Button>
            </Card>

            <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={pic}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">Brownie Sundae</Card.Title>
                    <Card.Text>Vanilla ice cream with delicious chocolate brownie toped with chocolate syrup.</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center"></ListGroupItem>
                </ListGroup>
                <Button variant="dark">Add to cart</Button>
            </Card>

            <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={pic}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center"></Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center"></ListGroupItem>
                </ListGroup>
                <Button variant="dark">Add to cart</Button>
            </Card>

        </Col>
    </Row>

    <Row>
        <Col>
        <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={pic}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center"></Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center"></ListGroupItem>
                </ListGroup>
                <Button variant="dark"></Button>
            </Card>

            <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={pic}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center"></Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center"></ListGroupItem>
                </ListGroup>
                <Button variant="dark"></Button>
            </Card>
            
        </Col>
    </Row>
    </Container>
    );
}

export default Desserts;