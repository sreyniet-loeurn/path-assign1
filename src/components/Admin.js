import React from "react";
import { Navbar, Nav, Col,Form,Container,Header } from "react-bootstrap";

function Admin() {
  return (
    <Navbar className="topbar bg-dark" data-navbarbg="skin5">
            <Nav class="navbar top-navbar navbar-expand-md">
                <div class="navbar-header" data-logobg="skin5">
                   
                    <a class="navbar-brand" href="index.html">
                        <b class="logo-icon">
                           <img src ="imgAdmin/logo-light-icon.png" ></img>
                           <img src ="imgAdmin/extreme-light.png" ></img>
                           
                        </b>
                       
                        {/* <span class="logo-text">
                            <img src="../../assets/images/logo-text.png" alt="homepage" class="dark-logo">
                            <img src="../../assets/images/logo-light-text.png" class="light-logo" alt="homepage">
                        </span> */}
                    </a>
                    
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
                </div>
               
                <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                  
                    <ul class="navbar-nav float-start me-auto">
                       
                        {/* <li class="nav-item search-box"> <a class="nav-link waves-effect waves-dark" href="javascript:void(0)"><i class="ti-search"></i></a>
                            <Form class="app-search position-absolute" style="display: none;">
                                <input type="text" class="form-control" placeholder="Search &amp; enter"> <a class="srh-btn"><i class="ti-close"></i></a>
                            </Form> */}
                        {/* </li> */}
                    </ul>
                   
                    <ul class="navbar-nav ">
                        <li class="nav-item dropdown">
                            {/* <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="imgAdmin/1.jpg" alt="user" class="rounded-circle" width="31"></img>
                            </a> */}
                            {/* <ul class="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user m-r-5 m-l-5"></i>
                                    My Profile</a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-wallet m-r-5 m-l-5"></i>
                                    My Balance</a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-email m-r-5 m-l-5"></i>
                                    Inbox</a>
                            </ul> */}
                        </li>
                       
                    </ul>
                </div>
            </Nav>
        </Navbar>

    // <Navbar collapseOnSelect expand="lg" bg="dark">
    //   <Navbar.Brand href="#home">
    //     <img src="imgAdmin/logo-light-icon.png" alt="logo" />
    //   </Navbar.Brand>
    //   <Navbar.Brand href="#home">
    //     <img src="imgAdmin/extreme-light.png" alt="logo" />
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
               
    //       <Nav.Link>
    //       </Nav.Link>
    //     </Nav>
    //     <Nav>
    
    //       <Nav.Link>
         
    //       </Nav.Link>
    //       <Nav.Link>
            
    //           <img src="imgAdmin/1.jpg" alt="" className ="img-1"/>
            
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
      
    // </Navbar> 
  );
}

export default Admin;
