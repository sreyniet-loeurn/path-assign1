import React from "react";
// import Content4 from "./components/Content4";
// import Footer from "./components/Footer";
// import Content1 from "./components/Content1";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/AdminPage/Dashboard";
import TopSellingProduct from "./components/AdminPage/TopSellingProduct";
import RecentCommentAndTempGuide from "./components/AdminPage/RecentCommentAndTempGuide";
// import "./custom.css";
import Profile from "./components/AdminPage/Profile";
import Table from "./components/AdminPage/Table";
import Blank from "./components/AdminPage/Blank";
import Error404 from "./components/AdminPage/Error404";
import NavbarClient from "./components/ClientPage/NavbarClient";
import GetStart from "./components/ClientPage/GetStart";
import ThreeBox from "./components/ClientPage/ThreeBox";
import Footer from "./components/ClientPage/Footer";
import NavbarAdmin from "./components/AdminPage/NavbarAdmin";
import './AdminStyle/scss/Combine.scss'

function App() {
  return (
    <Router>

      {/* Landing page  */}
      <Route
        path="/"
        exact
        render={() => (
          <>
            <NavbarClient />
            <GetStart />
            <ThreeBox />
            <Footer />
          </>
        )}
      ></Route>



      {/* Admin page  */}
      <Route
        path="/admin"
        render={() => (
          <>
            <div className="page-wrapper">
              <NavbarAdmin />
              <Dashboard />
              <TopSellingProduct />
              <RecentCommentAndTempGuide />
            </div>
          </>
        )}
      ></Route>

      {/* Profile page  */}
      <Route path="/profile" render={() => (
        <div className="page-wrapper">
          <Profile />
        </div>
      )}></Route>

      {/* Table page  */}
      <Route path="/table" exact render={() => (
        <div className="page-wrapper">
          <Table />
        </div>
      )}>
      </Route>

      {/* Blank page  */}
      <Route path="/blank" render={() => (
        <div className="page-wrapper">
          <Blank />
        </div>
      )}>
      </Route>

      {/* Error 404  */}
      <Route path="/error" render={() => (
        <Error404 />
      )}></Route>

    </Router>
  );
}

export default App;
