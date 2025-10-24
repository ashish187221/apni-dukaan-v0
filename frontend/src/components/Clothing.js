import React from 'react'
import { Link } from 'react-router-dom';
import './product.css'

export default function Clothing() {
  return (
    <>     
        <img className='clothingHeroImg' src="Images\HeroImg.webp" alt="Clothing" />

        <h2>Hoodies</h2>
        <div className="clothing">
            <div className="card">
            <Link to = '/hoodie1' ><img src="Images\hoodie-1.webp" alt="hoodie" style={{ height: "auto", width: "auto" }} /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1,599.00</p>
            </div>

            <div className="card">
            <Link to = '/hoodie2' ><img src="Images\hoodie-2.webp" alt="hoodie" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>999.00</p>
            </div>

            <div className="card">
            <Link to = '/hoodie3' ><img src="Images\hoodie-3.webp" alt="hoodie" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1,399.00</p>
            </div>

            <div className="card">
            <Link to = '/hoodie4' ><img src="Images\hoodie-4.webp" alt="hoodie" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1,999.00</p>
            </div>
        </div>

        <h2>T-Shirts</h2>
        <div className="clothing">
            <div className="card">
            <Link to = '/tshirt1' ><img src="Images\tshirt-1.webp" alt="tshirt" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1099.00</p>
            </div>

            <div className="card">
            <Link to = '/tshirt2' ><img src="Images\tshirt-2.webp" alt="tshirt" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>999.00</p>
            </div>

            <div className="card">
            <Link to = '/tshirt3' ><img src="Images\tshirt-4.webp" alt="tshirt" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1599.00</p>
            </div>

            <div className="card">
            <Link to = '/tshirt4' ><img src="Images\tshirt-3.webp" alt="tshirt" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1199.00</p>
            </div>
        </div>

        <h2>Shirts</h2>
        <div className="clothing">
            <div className="card">
            <Link to = '/shirt1' ><img src="Images\shirt-1.webp" alt="shirt"/></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1,099.00</p>
            </div>

            <div className="card">
            <Link to = '/shirt2' ><img src="Images\shirt-2.webp" alt="shirt"/></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1,299.00</p>
            </div>

            <div className="card">
            <Link to = '/shirt3' ><img src="Images\shirt-3.webp" alt="shirt" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1,599.00</p>
            </div>

            <div className="card">
            <Link to = '/shirt4' ><img src="Images\shirt-4.webp" alt="shirt" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>2,199.00</p>
            </div>
        </div>

        <h2>Jeans</h2>
        <div className="clothing">
            <div className="card">
            <Link to = '/jean1' ><img src="Images\jean-1.webp" alt="jean" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1,499.00</p>
            </div>

            <div className="card">
            <Link to = '/jean2' ><img src="Images\jean-2.jpeg" alt="jean" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1,799.00</p>
            </div>

            <div className="card">
            <Link to = '/jean3' ><img src="Images\jean-3.webp" alt="jean" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>1,999.00</p>
            </div>

            <div className="card">
            <Link to = '/jean4' ><img src="Images\jean-4.jpeg" alt="jean" /></Link>
            <p><img src="Images/rupeeSymbol.png"  alt=""/>2,299.00</p>
            </div>
        </div>
    </>
  );
}
