import React from "react";
import SearchBar from "./SearchBar";
import Food1 from "../images/food1.jpg";
import Food3 from "../images/food3.jpg";
import Food4 from "../images/food4.jpg";
import Food5 from "../images/food5.jpg";
import Food6 from "../images/food6.jpg";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <main className="home">
        <section className="welcome-section">
          <h2>Welcome, To Little Lemon Restaurant</h2>
          <p>Find your favorite meal you want</p>
          <SearchBar />

          <blockquote>
            "Discover the charm of Little Lemon, your go-to destination for
            fresh, flavorful, and unforgettable dining. Nestled in the heart of
            the city, our restaurant brings you a delightful blend of classic
            and contemporary dishes, all crafted with the freshest ingredients
            and a touch of love. From our zesty lemon-infused specialties to our
            mouthwatering desserts, every dish is a celebration of taste and
            quality. Whether you're looking for a cozy spot for a morning
            coffee, a lively lunch with friends, or a romantic dinner under the
            stars, Little Lemon offers an inviting atmosphere that suits every
            occasion. Come for the food, stay for the experience, and leave with
            a smile. Visit us today and let Little Lemon brighten up your day!"
          </blockquote>

          <button className="read-more-btn">Read more .....</button>
        </section>

        <section className="trending-books-section">
          <div className="section-header">
            <h3>Start up</h3>
            <a href="/all-trending-books">See all</a>
          </div>
          <div className="food-list">
            <div className="food">
              <img src={Food1} alt="Zesty Lemon Chicken" />
              <p>Zesty Lemon Chicken</p>
              <div>
                <button>Read</button>
                <button>Order</button>
              </div>
            </div>
            <div className="food">
              <img src={Food5} alt="Lemon Herb Grilled Salmon" />
              <p>Lemon Herb Grilled Salmon</p>
              <div>
                <button>Read</button>
                <button>Order</button>
              </div>
            </div>
            <div className="food">
              <img src={Food3} alt="Lemon Pepper Shrimp Skewers" />
              <p>Lemon Pepper Shrimp Skewers:</p>
              <div>
                <button>Read</button>
                <button>Order</button>
              </div>
            </div>
            <div className="food">
              <img src={Food4} alt="Sunny Lemon Pasta" />
              <p>Sunny Lemon Pasta</p>
              <div>
                <button>Read</button>
                <button>Order</button>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-food-section">
          <div className="section-header">
            <h3>Delcious</h3>
            <a href="/all-delcious-food">See all</a>
          </div>
          <div className="food-list">
            <div className="food">
              <img src={Food5} alt="Golden Lemon Risotto" />
              <p>Golden Lemon Risotto</p>
              <div>
                <button>Read</button>
                <button>Order</button>
              </div>
            </div>
            <div className="food">
              <img src={Food6} alt="Mediterranean Lemon Flatbread" />
              <p>Mediterranean Lemon Flatbread:</p>
              <div>
                <button>Read</button>
                <button>Order</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
