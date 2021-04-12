
import React, { useState } from 'react';
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Dropdown, Image, Nav, Navbar, NavbarBrand, Button, NavItem } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Sidebar from './Sidebar';

function NavbarAdmin() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [icons, setIcons] = useState(true);



  const [form, setForm] = useState(false);
  const [search, setSearchIcon] = useState(true);
  const showForm = () => setForm(!form);

  return (
    <>

      <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
        data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
        <header className="topbar" data-navbarbg="skin5">

          <Nav className="navbar top-navbar navbar-expand-md navbar-dark">
            <div className="navbar-header" data-logobg="skin5">
              <NavbarBrand>
                <b className="logo-icon">
                  <Image src="imgAdmin/logo-light-icon.png" alt="homepage" className="light-logo logoIcon" />
                </b>
                <span className="logo-text">
                  <Image src="imgAdmin/extreme-light.png" className="light-logo logoIcon" alt="homepage" />
                </span>
              </NavbarBrand>
              <NavbarToggle className="show-sidebar waves-effect waves-light d-block d-md-none" href="">
                <Navbar>
                  <Link to='#' className='ml-auto '>
                    <a className="menuIconAndCloseIcon border border-0"
                      onClick={() => setIcons(icons => !icons)} >{icons ?
                        <FaIcons.FaBars className="" onClick={showSidebar} /> :
                        <AiIcons.AiOutlineClose className="" onClick={showSidebar} />}
                    </a>
                  </Link>
                </Navbar>
              </NavbarToggle>
            </div>
            <NavbarCollapse id="navbarSupportedContent" data-navbarbg="skin5">
              <Navbar className=" float-start me-auto">
                <NavItem className=" search-box">
                  <a className="nav-link waves-effect waves-dark"
                    onClick={() => setSearchIcon(search => !search)} >{search ? <SearchIcon className="coloSearchIcon"
                      onClick={showForm} /> : <CloseIcon onClick={showForm} className="d-none" />}
                  </a>
                </NavItem>
              </Navbar>
              <ul className="navbar-nav ml-auto">
                <NavItem>
                  <Dropdown>
                    <Dropdown.Toggle className="text-muted border-0 pro-pic" style={{ background: "#414755" }}>
                      <Image src="imgAdmin/1.jpg" alt="users" className="rounded-circle mr-auto" width="40" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="javascript:void(0)">
                        <PersonOutlineIcon className="m-r-5 m-2 m-l-5" width="17" /> My Profile
                                        </Dropdown.Item>
                      <Dropdown.Item href="javascript:void(0)">
                        <AccountBalanceWalletIcon className="m-r-5 m-2 m-l-5" width="17" /> My Balance
                                        </Dropdown.Item>
                      <Dropdown.Item href="javascript:void(0)">
                        <MailOutlineIcon className="m-r-5 m-2 m-l-5" width="17" /> Inbox
                        </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavItem>
              </ul>
            </NavbarCollapse>
            <form className={form ? 'form-search active' : 'form-search'}>
              <div className="d-flex">
                <input type="text" className="form-control" placeholder="Search &amp; enter" style={{ padding: 30 }} />
                <a className="srh-btn mt-3"
                  onClick={() => setSearchIcon(search => !search)} >{search ? <SearchIcon className="coloSearchIcon"
                    onClick={showForm} /> : <CloseIcon onClick={showForm} />}
                </a>
              </div>
            </form>
          </Nav>
        </header>
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul>
        <Sidebar />

          </ul>
        </div>

      </div>
    </>
  );  
}

export default NavbarAdmin;