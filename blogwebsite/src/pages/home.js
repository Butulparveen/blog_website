import React from "react";
import Header from "../components/header.js";
import Posts from "../components/posts.js";
// import Sidebar from "../components/sidebar.js";
import "../styles/home.css";
import Footer from "../components/footer.js"


function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        {/* <Sidebar /> */}
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
