import Identicon from "identicon.js";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

const SiteNavbar = ({ token, account, setAccount, setToken }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("account");
    setToken("");
    setAccount("");
    navigate("/login");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant="dark"
      bg="coolColor"
      fixed="top"
      className="site-navbar"
    >
      <Container>
      <Link to="/" style={{textDecoration:'none'}}>

        <div className="flex items-center">
          <img src={logo} alt="logo" style={{ maxWidth: '8%',marginRight:"6px"}} />
          <div className="text-white text-2xl"> MediBloc</div>
        </div>
        </Link>


        <Nav justify>
          {token !== "" && account !== "" ? (
            <>
              <Nav.Link className="img">
                <img
                  className="ml-2"
                  width="40"
                  height="40"
                  src={`data:image/png;base64,${new Identicon(
                    account,
                    40
                  ).toString()}`}
                  alt="profile"
                />
              </Nav.Link>
              <Nav.Link>
                <small className="text-nav">
                  {account.slice(0, 5) + "..." + account.slice(-4)}
                </small>
              </Nav.Link>
              <Nav.Link onClick={logout}>
                <small className="text-nav">Log&nbsp;Out</small>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                <small className="text-nav text-white font-semibold ">Login</small>
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                <small className="text-nav text-white font-semibold">Register</small>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
