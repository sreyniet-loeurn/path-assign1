import React from "react";
import Header from "./components/Header";
import Content4 from "./components/Content4";
import Footer from "./components/Footer";
import Content1 from "./components/Content1";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Admin from "./components/Admin";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import SaleSummaryAndFeed from "./components/SaleSummaryAndFeed";
import TopSellingProduct from "./components/TopSellingProduct";
import RecentCommentAndTempGuide from "./components/RecentCommentAndTempGuide";

function App() {
  return (
      <Router>
    <Route path ="/" exact
    render ={() =>(
      <>
      <Header />
      <Content1 />
      <Content4 />
      <Footer />
      </>
    )}
      >
    </Route>
        <Route path ="/admin"
        render ={() => (
          <>
          <Admin />
          <Sidebar />
          <Dashboard />
          <SaleSummaryAndFeed />
          <TopSellingProduct />
          <RecentCommentAndTempGuide />
          </>
        )}
        ></Route>
      </Router>

  );
}

export default App;
