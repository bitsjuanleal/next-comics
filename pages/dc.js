/*import React, { useContext } from "react";
import ListCharacters from "./../components/list-characters";
import Search from "./../components/core/Search";

class Dc extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch("http://localhost:4000/dc");
    const json = await res.json();
    return { characters: json, comic: "dc" };
  }

  constructor(props) {
    super(props);
    this.state = {
      charactersList: this.props.characters,
    };
  }

  filterData = (value) => {
    const excludeColumns = ["image", "url", "biography", "power"];
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "" || lowercasedValue.length <= 2) {
      this.setState({ charactersList: this.props.characters });
    } else {
      if (lowercasedValue.length > 2) {
        const filteredData = this.props.characters.filter((item) => {
          return Object.keys(item).some((key) =>
            excludeColumns.includes(key)
              ? false
              : item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        this.setState({ charactersList: filteredData });
      }
    }
  };

  render() {
    return (
      <section>
        <Search
          placeholder="Search DC character"
          color="#d40317"
          borderColor="#d40317"
          charactersList={this.state.charactersList}
          onUpdateCharacters={(query) => this.filterData(query)}
        />
        <ListCharacters
          characters={this.state.charactersList}
          comic={this.props.comic}
        />
      </section>
    );
  }
}

export default Dc;*/
import React, { useState, useContext, useEffect } from "react";
import ListCharacters from "./../components/list-characters";
import Search from "./../components/core/Search";
import { getCharacters } from "./../components/data/characters";
import { Context } from "./../components/hooks/initialState";

const Dc = ({ statusCode, characters }) => {
  const { store, dispatch } = useContext(Context);

  if (statusCode !== 200) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Something has gone wrong</p>
      </div>
    );
  }

  useEffect(() => {
    dispatch({ tab: "dc", detailUrl: store.detailUrl });
  }, []);

  const [charactersList, setCharactersList] = useState(characters);
  const filterData = (value) => {
    const excludeColumns = ["image", "url", "biography", "power"];
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "" || lowercasedValue.length <= 2) {
      setCharactersList(characters);
    } else {
      if (lowercasedValue.length > 2) {
        const filteredData = characters.filter((item) => {
          return Object.keys(item).some((key) =>
            excludeColumns.includes(key)
              ? false
              : item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setCharactersList(filteredData);
      }
    }
  };
  return (
    <section>
      <Search
        placeholder="Search DC character"
        color="#d40317"
        borderColor="#d40317"
        charactersList={charactersList}
        onUpdateCharacters={(query) => filterData(query)}
      />
      <ListCharacters characters={charactersList} comic="dc" />
    </section>
  );
};

Dc.getInitialProps = async (ctx) => {
  const { statusCode, characters } = await getCharacters("dc");

  return {
    statusCode,
    characters,
  };
};
export default Dc;
