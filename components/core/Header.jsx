import React from "react";

const Header = (props) => {
  var divStyle = {
    backgroundImage: "url(/marvel-dc.svg)",
  };
  return (
    <header style={divStyle}>
    </header>
  );
};

Header.getInitialProps = async (ctx) => {
  return { title: "", imgUrl: "", textColor: "" };
};
export default Header;
