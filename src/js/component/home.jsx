import React from "react";
import Bootstrap from "bootstrap";
import Navbar from "../navbar.jsx";
import Jumbotron from "../jumbotron.jsx";
import Cards from "../cards.jsx";
import Footer from "../footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
let title = "A warm Welcome!";
let description = "React is the most popular rendering library in the worldp"
const Home = () => {
  return (
    <div>
     <Navbar />
     <Jumbotron title = {title} description = {description}/>
     <Cards />
     <Footer />
    </div>
  );
};

export default Home;
