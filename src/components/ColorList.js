import React from "react";

// ColorItem Component
function ColorItem(props) {
  return <li style={{ color: props.color }}>{props.color}</li>
}
// ColorList Component
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const colorELements = colors.map((color) => {
    return <ColorItem key={color} color={color} />;
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* display the array of <li> elements here! */}
        {colorELements}
      </ol>
    </div>
  );
}

export default ColorList;
