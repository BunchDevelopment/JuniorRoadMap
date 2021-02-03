import React from "react";

const InfoBlock = ({ infoToRender }) => {
  return (
    <div style={{ width: "90vw" }}>
      {infoToRender &&
        infoToRender.map((curr, ind) => {
          const alignment = ind % 2 === 0 ? "flex-end" : "flex-start";
          console.log(alignment);
          return (
            <div
              className={`infoBlock ${
                ind % 2 === 0 ? "infoBlockRight" : "infoBlockLeft"
              }`}
            >
              <div
                style={{ display: "flex", flexFlow: "column", width: "50vw" }}
              >
                <h2>{curr.title}</h2>
                <p>{curr.description}</p>
                <ul>
                  {curr.listTitle}
                  {curr.frameworks.map((curr) => {
                    return <li>{curr}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default InfoBlock;

// (<h3>{curr.title}</h3>
//     {`${curr.description}`}
//     <ul>
//       The most common JavaScript libraries/frameworks (there is a
//       difference) are:
//       <li>React</li>
//       <li>Angular</li>
//       <li>VueJS</li>
//       <li>Svelte</li>
//     </ul>)
