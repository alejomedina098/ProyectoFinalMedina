import CartWidget from "./CartWidget"
import "../styles/NavBar.css"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <NavLink to={"/"} className="nav-link-logo">
                        <Container className="logo-container d-flex gap-3">
                             <span className="logo-text">TiendaManga-React</span>
                        </Container>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="menu mx-auto text-center gap-md-3 gap-lg-4">
                            <NavLink to="/tipo/Aventuras" className="nav-link" href="#">Aventuras</NavLink>
                            <NavLink to="/tipo/Deportes" className="nav-link" href="#">Deportes</NavLink>
                            <NavLink to="/tipo/Mechas" className="nav-link" href="#">Mechas</NavLink>
                            <NavLink to="/tipo/Peleas" className="nav-link" href="#">Peleas</NavLink>
                            <NavLink to="/tipo/Humor" className="nav-link" href="#">Humor</NavLink>
                        </Nav>
                        <Nav>
                            <CartWidget/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar