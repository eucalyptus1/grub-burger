import React from "react";
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import "./menu.css"
import apple from "../../assets/desserts/apple-pie.webp"
import brownie from "../../assets/desserts/brownie-sundae.jpg"
import oreos from "../../assets/desserts/fried-oreos.webp"
import milk from "../../assets/desserts/milkshake.jpg"
import strawberry from "../../assets/desserts/strawberry-cheesecake.jpg"

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
                    src={milk}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">Milk Shake</Card.Title>
                    <Card.Text>Handcrafted milkshake of your choice: Vanilla, Chocolate, Strawberry, Oreo</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center">$4</ListGroupItem>
                </ListGroup>
                <Button variant="dark">Add to cart</Button>
            </Card>

            <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={brownie}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">Brownie Sundae</Card.Title>
                    <Card.Text>Vanilla ice cream with delicious chocolate brownie toped with chocolate syrup.</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center">$7</ListGroupItem>
                </ListGroup>
                <Button variant="dark">Add to cart</Button>
            </Card>

            <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={oreos}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">Fried Oreos</Card.Title>
                    <Card.Text>Deep fried Oreo cookies, a Texas State Fair favorite!</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center">$7</ListGroupItem>
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
                    <Card.Title className="text-center">Strawberry Cheesecake</Card.Title>
                    <Card.Text>Light and creamy cheesecake topped with sweet strawberry sauce.</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-center">$7</ListGroupItem>
                </ListGroup>
                <Button variant="dark">Add to Cart</Button>
            </Card>

            <Card className="p-2" border="dark" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={apple}
                    style={{ width: "16.9rem", height:"14rem" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">Apple Pie</Card.Title>
                    <Card.Text>A delicious classic pie filled with apples and topped with a scoop of vanilla ice cream</Card.Text>
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

export default Desserts;