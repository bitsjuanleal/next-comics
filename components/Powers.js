import React from "react";

function Powers({ powers }) {
  return powers.map((power, index) => {
    return (
      <React.Fragment key={index}>
        {power.label == undefined && (
          <div className="list">
            <span>{power}</span>
          </div>
        )}
        {power.label != undefined && (
          <div>
            <span>{power.label}</span>
            <span className="power-level"> {power.value} </span>
          </div>
        )}
      </React.Fragment>
    );
  });
}

Powers.getInitialProps = async (ctx) => {
  return { powers: []};
};

export default Powers;
