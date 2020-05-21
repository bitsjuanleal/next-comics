import React from 'react';

function Container(props) {
  return (
    <section>        
        {props.children}
    </section>
  );
}

export default Container;