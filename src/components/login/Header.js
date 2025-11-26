import { Container, Navbar, Image } from "react-bootstrap";
import Logo from "../../assets/logo.jpg";

export default function Header() {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm px-3 header-custom header ">
      <Container fluid className="mx-3 cont">
        <Navbar.Brand href="#home" data-aos="fade-right" className="d-flex align-items-center m-0">
          <Image src={Logo} alt="Logo" roundedCircle className="me-2 logo" />
          <span className="brand_name ms-3">SMART OLAM</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
