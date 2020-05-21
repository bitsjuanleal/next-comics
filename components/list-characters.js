/*import React, { useEffect, useState } from "react";
import Character from "./character";
// import "./styles/listcharacters.scss";

const ListCharacters = (props) => {
  const [charactersList, setCharacters] = useState([]);
  useEffect(() => {
    setCharacters(props.characters);
    window.scrollTo(0, 0);
  }, [props.characters]);
  return (
    <section className="cards-heroes">
      {charactersList.map((child, index) => {
        return <Character key={index} type={props.comic} datacharater={child} />;
      })}
    </section>
  );
};

ListCharacters.getInitialProps = async (ctx) => {
  return { characters: [], comic: "marvel" };
};

export default ListCharacters;*/

import React from "react";
import Character from "./character";

class ListCharacters extends React.Component {
  static async getInitialProps(ctx) {
    return { characters: [], comic: "marvel" };
  }

  render() {
    return (
      <section className="cards-heroes">
        {this.props.characters.map((child, index) => {
          return <Character key={index} type={this.props.comic} datacharater={child} />;
        })}
      </section>
    );
  }
}

export default ListCharacters;
