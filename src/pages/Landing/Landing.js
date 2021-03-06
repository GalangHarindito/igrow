import React, { useState } from "react";
import Card from "../../component/Card";
import axios from "axios";
import "./style.css";
import Button from "../../component/Button";
import LoadingCard from "../../component/LoadingCard";

export default function Landing() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApi = () => {
    setLoading(true);

    axios.get(`https://randomuser.me/api/?results=2`)
      .then((res) => {
        setLoading(false);
        setState(res.data.results);
      })
      .catch((err) => {
      });
  };

  return (
    <section className='landing'>
      <h3>Find Your Friends</h3>
      {loading ? <LoadingCard data={state} /> : <Card data={state} />}
      <section>
        <Button
          className='find'
          label="Let's Find"
          isLoading={loading}
          onClick={() => fetchApi()}
        />
      </section>
    </section>
  );
}
