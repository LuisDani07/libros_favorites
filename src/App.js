
import {Navbar, Nav} from 'react-bootstrap'
function App() {
  return (
    <div className="container">
         <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">Home</Navbar.Brand>
              <Nav className="mr-auto">
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="#features">Features</Nav.Link>
                   <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
         </Navbar>
    </div>
  );
}

export default App;
