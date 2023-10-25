import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const colorELements = colors.map((color) => {
    return <li style={{ color: color }}>{color}</li>;
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorELements}
      </ol>
    </div>
  );
}

export default ColorList;
