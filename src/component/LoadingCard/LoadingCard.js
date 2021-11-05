import React from "react";
import "./style.css";

export default function LoadingCard(props) {
  const { data } = props;

  return (
    <section className='card-loading'>
      {data.map((el, idx) => {
        return (
          <section className='card-loading-container' key={idx}>
            <div>
              <div className='card-loading-image'></div>
            </div>
            <div></div>
            <div>
              <div className='name-loading'></div>
              <div className='phone-loading'></div>
              <div className='location-loading'></div>
            </div>
          </section>
        );
      })}
    </section>
  );
}
