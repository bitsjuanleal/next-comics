import React from 'react';
import '../styles/footer.scss';

function Footer(props) {
  const { backgroundColor } = props;
  var footerStyle = {
    backgroundColor: backgroundColor,
  };
  return (
    <footer style={footerStyle}>
      <span>Marvel vs DC</span>
    </footer>
  );
}

export default Footer;
