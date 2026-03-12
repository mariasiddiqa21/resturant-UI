import React from 'react';
import './Style.css';

const Menucard = ({ menudata }) => {
  return (
    <>
      <div className="card_container">
        {menudata.map((item) => {
          const { id, name, category, description, price, image } = item;
          return (
            <div className="card" key={id}>
              <img src={image} alt={name} className="card-image" />
              <div className="card-body">
                <span className="card-no">{id}</span>
                <span className="card-title">{category}</span>
                <h1>{name}</h1>
                <p className="para">{description}</p>
                <p className="price">Rs {price}</p>
              </div>
              <button className="order">Order Now</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menucard;