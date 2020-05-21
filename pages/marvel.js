/*import ListCharacters from "./../components/list-characters";
const Marvel = (props) => {
  return (
    <section>
      <div>Heroes de Marvel</div>
      <ListCharacters characters={props.characters} comic={props.comic} />
    </section>
  );
};

Marvel.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:4000/marvel");
  const json = await res.json();
  return { characters: json, comic: "marvel" };
};

export default Marvel;*/

import React from "react";
import ListCharacters from "./../components/list-characters";
import Search from './../components/core/Search';

class Marvel extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch("http://localhost:4000/marvel");
    const json = await res.json();
    return { characters: json, comic: "marvel" };
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
        <div>Personajes de Marvel</div>
        <Search
          placeholder="Search Marvel character"
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

export default Marvel;
