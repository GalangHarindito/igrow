import React from "react";
import "./style.css";
import background from '../../assets/background.png';
import background2 from '../../assets/cool-background-1.png';

export default function Card(props) {
  const { data } = props;

  return (
    <section className='card'>
      {data.map((el, idx) => {
        return (
          <section className='card-container' key={idx}>
            <div style={{ backgroundImage: el.gender === 'female'? `url(${background2})` : `url(${background})` }}>
              <div
                className='card-image'
                style={{ backgroundImage: `url(${el.picture.large})` }}
              ></div>
            </div>
            <div></div>
            <div>
              <p className='name'>
                {el.name.first} {el.name.last}
              </p>
              <p className='phone'>{el.phone}</p>
              <p className='location'>
                {el.location.city} - {el.location.country}
              </p>
            </div>
          </section>
        );
      })}
    </section>
  );
}
