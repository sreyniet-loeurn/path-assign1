import React from "react";
import { Navbar, Nav, Dropdown,Image,DropdownMenu,SplitButton, Container } from "react-bootstrap";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';


function Admin() {
  return (
      <>
    <Navbar collapseOnSelect expand="lg" className="topbar bg-dark" data-navbarbg="skin5">
      <Navbar.Brand href="#home">
        <img src="imgAdmin/logo-light-icon.png" alt="logo" />
      </Navbar.Brand>
      <Navbar.Brand href="#home">
        <img src="imgAdmin/extreme-light.png" alt="logo"  />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
               
          <Nav.Link>
              <SearchIcon className ="text-white" style ={{marginLeft:'120'}} />
          </Nav.Link>
        </Nav>
        <Nav>
    
          <Nav.Link>
         
          </Nav.Link>
          <Nav.Link>
          <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <Dropdown>
                    <Dropdown.Toggle className="text-muted border-0 pro-pic" style={{ background: "#414755" }}>
                      <Image src="imgAdmin/1.jpg" alt="users" className="rounded-circle mr-auto" width="31" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="">
                        <PersonOutlineIcon className="m-r-5 m-2 m-l-5" width="17" /> My Profile
                                        </Dropdown.Item>
                      <Dropdown.Item href="">
                        <AccountBalanceWalletIcon className="m-r-5 m-2 m-l-5" width="17" /> My Balance
                                        </Dropdown.Item>
                      <Dropdown.Item href="">
                        <MailOutlineIcon className="m-r-5 m-2 m-l-5" width="17" /> Inbox
                                        </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar> 

</>
);
  
}

export default Admin;
