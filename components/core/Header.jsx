import React from "react";

const Header = (props) => {
  const { title, imgUrl, textColor } = props;
  var divStyle = {
    backgroundImage: "url(" + imgUrl + ")",
  };
  var h1Style = {
    color: textColor,
  };
  return (
    <header style={divStyle}>
      <h1 style={h1Style}>{title}</h1>
    </header>
  );
};

Header.getInitialProps = async (ctx) => {
  return { title: "", imgUrl: "", textColor: "" };
};
export default Header;
