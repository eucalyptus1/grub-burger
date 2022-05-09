import React from "react";
import { Navbar, Container, Nav, NavbarBrand} from "react-bootstrap"

function Navigation({currentPage, handlePageChange }) {
    return (
        <Navbar>
           <Container>
               <Navbar.Brand>Grub Burger</Navbar.Brand>
               <Navbar.Toggle></Navbar.Toggle>
               
               </Container> 
        </Navbar>
    )
}



            
                {/* <ul className="flex-row">
                    <li>
                        <a href="#Home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#About">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#Staff">
                            Staff
                        </a>
                    </li>
                    <li>
                        <a href="#Login">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="#Cart">
                            Cart
                        </a>
                    </li>
                </ul> */}
     

export default Navigation;