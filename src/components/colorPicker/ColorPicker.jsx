import { useState } from "react";

export const ColorPicker = () => {
  const [color, setColor] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ margin: "15px" }}>
      <p>try to change</p>
      <div
        style={{ backgroundColor: color || "black", width: 50, height: 50 }}
        onMouseEnter={(e) => {
          setTimeout(() => {
            setVisible(true);
          }, 250);
        }}
        onMouseLeave={(e) => {
          setTimeout(() => {
            setVisible(false);
          }, 250);
        }}
      ></div>
      {visible && (
        <p
          style={{
            position: "fixed",
            backgroundColor: "yellow",
            top: "50%",
            left: "50%",
          }}
        >
          {color}
        </p>
      )}
      <input
        id="inputChanger"
        type="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
    </div>
  );
};
