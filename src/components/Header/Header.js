import React from 'react';
import logo from '../../asset/images/logo.png'
import './Header.css';
import { Link,useHistory} from 'react-router-dom';
import useAuth from '../../Context/Contexthook'
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const {users,LogOut,setUsers} = useAuth();
    const History = useHistory()
    const LogoutHandle = () => {
      LogOut()
      .then(() => {
        setUsers({})
        History.push('/')
        }).catch((error) => {
        // An error happened.
        });
    }
    return (
        <div className="header container-fluid">
            <div className="w-50 mx-auto" ><img className="img-fluid" src={logo} alt="" /></div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
                <Link to="/">Shop</Link>
                <Link to="/orderreview">Order</Link>
                <Link to="/inventory">Manage Inventory</Link>
    </Nav>
    <Nav className="me-4">
    {
         users.email ? <button className="btn btn-warning fw-bold" onClick={LogoutHandle} >Log Out</button> : <Link to="/login">Log in</Link>
    }
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;