// NavBar.js
import { Container, Nav, Navbar } from "react-bootstrap";
import './Navbar.css';
import canvas from '../assets/Canvas-Logo-only.png';
import dashboard from '../assets/dashboard.png';
import courses from '../assets/courses.png';
import Calander from '../assets/calander.png';
import userProfile from '../assets/userProfile.png';
import announcements from "../assets/announcements.png";
const NavBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light"  className="navbar-nav nav-fill w-100">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={canvas}
            width="150"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <p className="brand-header">Alterna-Canvas</p>
          <Nav>
            <Nav.Link href="/"> <img src={userProfile} width="50" height="50"/></Nav.Link>
            <Nav.Link href="/dashboard"><img src={dashboard} width="50" height="50"/></Nav.Link>
            <Nav.Link href="/courses"><img src={courses} width="50" height="50"/></Nav.Link>
            <Nav.Link href="/announcements"><img src={announcements} width="50" height="50"/></Nav.Link>
            <Nav.Link href="/calender"><img src={Calander} width="50"height="50" /></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
