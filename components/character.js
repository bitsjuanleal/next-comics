import React from "react";
// import './styles/character.scss';
// import { Link } from 'react-router-dom';
import Link from "next/link";

function Character({ datacharater, type }) {
  const styleImg = {
    width: "100%",
  };
  const styleDiv = {
    backgroundImage: "url(" + datacharater.image + ")",
    minHeight: "200px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="card">
      <Link href={`/detail/${type}/${datacharater.name}`}>
        <a>
          <div className="card-body">
            <div className="hero-img" style={styleDiv}></div>
            <div className="card-container">
              <h4>
                <b>{datacharater.name}</b>
              </h4>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

Character.getInitialProps = async (ctx) => {
  return { datacharater: [], type: "marvel" };
};

export default Character;
