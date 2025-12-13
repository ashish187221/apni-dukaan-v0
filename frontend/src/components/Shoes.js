import React from "react";
import { Link } from "react-router-dom";
import "./Shoes.css";

export default function Shoes() {
  return (
    <>
      <img className="shoesHeroImg" src="images/shoesPageHero.jpg" alt="shoesHeroImg" />

      <h2>Red Tape</h2>

      <div className="shoes">
        <div className="card">
          <Link to = '/redtape1' ><img src="images\redTape-1.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>2,999.00</p>
        </div>

        <div className="card">
          <Link to = '/redtape2' ><img src="images\redTape-2.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>1,999.00</p>
        </div>

        <div className="card">
          <Link to = '/redtape3' ><img src="images\redTape-3.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>2,499.00</p>
        </div>

        <div className="card">
          <Link to = '/redtape4' ><img src="images\redTape-4.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>1,899.00</p>
        </div>
      </div>

      <h2>Puma</h2>
      <div className="shoes">
        <div className="card">
          <Link to = '/puma1' ><img src="images\puma-1.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>2,599.00</p>
        </div>

        <div className="card">
          <Link to = '/puma2' ><img src="images\puma-2.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>2,999.00</p>
        </div>

        <div className="card">
          <Link to = '/puma3' ><img src="images\puma-3.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>3,399.00</p>
        </div>

        <div className="card">
          <Link to = '/puma4' ><img src="images\puma-4.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>2,199.00</p>
        </div>
      </div>

      <h2>Nike</h2>
      <div className="shoes">
        <div className="card">
        <Link to = '/nike1' ><img src="images\Nike-1.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>1,999.00</p>
        </div>

        <div className="card">
        <Link to = '/nike2' ><img src="images\Nike-2.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>2,599.00</p>
        </div>

        <div className="card">
        <Link to = '/nike3' ><img src="images\Nike-3.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>1,299.00</p>
        </div>

        <div className="card">
        <Link to = '/nike4' ><img src="images\Nike-4.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>1,199.00</p>
        </div>
      </div>

      <h2>Campus</h2>
      <div className="shoes">
        <div className="card">
          <Link to = '/campus1' ><img src="images\campus-1.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>1,499.00</p>
        </div>

        <div className="card">
          <Link to = '/campus2' ><img src="images\campus-2.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>1,199.00</p>
        </div>

        <div className="card">
          <Link to = '/campus3' ><img src="images\campus-3.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>1,799.00</p>
        </div>

        <div className="card">
          <Link to = '/campus4' ><img src="images\campus-4.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="images/rupeeSymbol.png"  alt=""/>1,999.00</p>
        </div>
      </div>
    </>
  );
}
