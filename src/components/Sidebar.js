import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import FaceIcon from "@material-ui/icons/Face";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Combine.scss";
function Sidebar() {
  return (
    <aside class="left-sidebar" data-sidebarbg="skin6">
      <div class="scroll-sidebar">
        <nav class="sidebar-nav">
          <ul id="sidebarnav">
            <li>
              <div class="user-profile d-flex no-block dropdown m-t-20">
                <div class="user-pic">
                  <img
                    src="imgAdmin/1.jpg"
                    alt="users"
                    class="rounded-circle"
                    width="40"
                  />
                </div>
                <Dropdown>
                  <Dropdown.Toggle className="text-dark bg-white border border-0 borderDropdown">
                    <strong>Steve jobs</strong>
                  </Dropdown.Toggle>
                  <span class="op-5 user-email text-dark">varun@gmail.com</span>
                  <Dropdown.Menu>
                    <Dropdown.Item href="javascript:void(0)">
                      <PersonOutlineIcon class="m-r-5 m-l-5" width="17" /> My
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="javascript:void(0)">
                      <AccountBalanceWalletIcon
                        class="m-r-5 m-l-5"
                        width="17"
                      />{" "}
                      My Balance
                    </Dropdown.Item>
                    <Dropdown.Item href="javascript:void(0)">
                      <MailOutlineIcon class="m-r-5 m-l-5" width="17" /> Inbox
                    </Dropdown.Item>
                    <Dropdown.Item href="javascript:void(0)">
                      <SettingsIcon class="m-r-5 m-l-5" width="17" /> Account
                      Setting
                    </Dropdown.Item>
                    <Dropdown.Item href="javascript:void(0)">
                      <PowerSettingsNewIcon class="m-r-5 m-l-5" width="17" />{" "}
                      Account Setting
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </li>
            <li class="text-center p-40 create-btn ml-3 mt-4 border border-0 text-white d-flex">
              <a
                class="btn d-block text-white"

              >
                <LocalHospitalIcon />
                Create New
              </a>
            </li>
            {/* <li class="p-15 m-t-10">
              hello
              <a class="btn d-block create-btn text-white no-block d-flex align-items-center ml-2">
                <LocalHospitalIcon />
                Create New
              </a>
            </li> */}
            <li class="sidebar-item">
              <a
                class="sidebar-link waves-effect waves-dark sidebar-link"
                href="index.html"
                aria-expanded="false"
              >
                <Link to="/admin" style={{ textDecoration: 'none' }}>
                  <DashboardIcon className="text-dark" />
                  <span class="hide-menu ml-2 text-dark">Dashboard</span>
                </Link>
              </a>
            </li>
            <li class="sidebar-item">
              {" "}
              <a
                class="sidebar-link waves-effect waves-dark sidebar-link"
                href="pages-profile.html"
                aria-expanded="false"
              >
                <Link to="/profile">
                  <PersonOutlineIcon className="text-secondary" />
                  <span class="hide-menu ml-2 text-dark">Profile</span>
                </Link>
              </a>
            </li>
            <li class="sidebar-item">
              {" "}
              <a
                class="sidebar-link waves-effect waves-dark sidebar-link"
                href="table-basic.html"
                aria-expanded="false"
              >
                <Link to="/table">
                  <BorderAllIcon className="text-secondary" />
                  <span class="hide-menu ml-2 text-dark">Table</span>
                </Link>
              </a>
            </li>
            <li class="sidebar-item">
              {" "}
              <a
                class="sidebar-link waves-effect waves-dark sidebar-link"
                href="icon-material.html"
                aria-expanded="false"
              >
                <FaceIcon className="text-secondary" />
                <span class="hide-menu ml-2">Icon</span>
              </a>
            </li>
            <li class="sidebar-item">
              {" "}
              <a
                class="sidebar-link waves-effect waves-dark sidebar-link"
                href="starter-kit.html"
                aria-expanded="false"
              >
                <Link to="/blank">
                  <InsertDriveFileIcon className="text-secondary" />
                  <span class="hide-menu ml-2 text-dark">Blank</span>
                </Link>
              </a>
            </li>
            <li class="sidebar-item">
              {" "}
              <a
                class="sidebar-link waves-effect waves-dark sidebar-link"
                href="error-404.html"
                aria-expanded="false"
              >
                <Link to="/error">
                  <ReportProblemIcon className="text-secondary" />
                  <span class="hide-menu ml-2 text-dark">404</span>
                </Link>
              </a>
            </li>
            <li class="text-center p-40 upgrade-btn ml-5 mt-5 border border-0">
              <a
                href="https://www.wrappixel.com/templates/xtremeadmin/"
                class="btn d-block btn-danger text-white"
                target="_blank"
              >
                Upgrade to Pro
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
