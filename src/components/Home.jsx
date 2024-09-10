import React from "react";
import SearchBar from "./SearchBar";
import TheBikeGuy from "../images/TheBikeGuy.jpg";
import DifferentWinter from "../images/DifferentWinter.jpg";
import WalkIntoTheShadow from "../images/WalkIntoTheShadow.jpg";
import Soul from "../images/Soul.jpg";
import Alone from "../images/Alone.jpg";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <main className="home">
        <section className="welcome-section">
          <h2>Welcome, John Doe</h2>
          <p>Find the book you want</p>
          <SearchBar />

          <blockquote>
            "Explore our library and discover the joy of reading. With a wide
            range of books, it's the perfect place to satisfy your curiosity and
            find inspiration. Come in, grab a book, and let your imagination
            soar!"
          </blockquote>
          <button className="read-more-btn">Read more .....</button>
        </section>

        <section className="trending-books-section">
          <div className="section-header">
            <h3>Trend books</h3>
            <a href="/all-trending-books">See all</a>
          </div>
          <div className="book-list">
            <div className="book">
              <img src={TheBikeGuy} alt="The bike guy" />
              <p>The bike guy</p>
            </div>
            <div className="book">
              <img src={DifferentWinter} alt="Different Winter" />
              <p>Different Winter</p>
            </div>
            <div className="book">
              <img src={WalkIntoTheShadow} alt="Walk into the shadow" />
              <p>Walk into the shadow</p>
            </div>
            <div className="book">
              <img src={Soul} alt="Soul" />
              <p>Soul</p>
            </div>
          </div>
        </section>
        <section className="popular-books-section">
          <div className="section-header">
            <h3>Popular books</h3>
            <a href="/all-popular-books">See all</a>
          </div>
          <div className="book-list">
            <div className="book">
              <img src={Alone} alt="Alone" />
              <p>ALONE</p>
              <div>
                <button>Read</button>
                <button>Share</button>
              </div>
            </div>
            <div className="book">
              <img src={Soul} alt="Soul" />
              <p>Soul</p>
              <div>
                <button>Read</button>
                <button>Share</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
