import React from "react";
import Header from "./components/Header";
import Content4 from "./components/Content4";
import Footer from "./components/Footer";
import Content1 from "./components/Content1";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import SaleSummaryAndFeed from "./components/SaleSummaryAndFeed";
import TopSellingProduct from "./components/TopSellingProduct";
import RecentCommentAndTempGuide from "./components/RecentCommentAndTempGuide";
import "./custom.css";
import Profile from "./components/Profile";
import Table from "./components/Table";
import Blank from "./components/Blank";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>

      {/* Landing page  */}
      <Route
        path="/"
        exact
        render={() => (
          <>
            <Header />
            <Content1 />
            <Content4 />
            <Footer />
          </>
        )}
      ></Route>

      {/* Admin page  */}
      <Route
        path="/admin" 
        render={() => (
          <>
            <Admin />
            <Sidebar />
            <div className="page-wrapper">
              <Dashboard />
              <SaleSummaryAndFeed />
              <TopSellingProduct />
              <RecentCommentAndTempGuide />
            </div>
          </>
        )}
      ></Route>

    {/* Profile page  */}
        <Route path ="/profile" render = {() => (
          <div className ="page-wrapper">
            <Profile />
          </div>
        )}></Route>

      {/* Table page  */}
        <Route path ="/table" exact render ={() => (
          <div className ="page-wrapper">
            <Table />
          </div>
        )}>
        </Route>

    {/* Blank page  */}
    <Route path = "/blank" render ={() => (
      <div className="page-wrapper">
        <Blank />
      </div>
    )}>
    </Route>

  {/* Error 404  */}
      <Route path ="/error" render ={() => (
        <Error404 />
      )}></Route>
  
    </Router>
  );
}

export default App;
