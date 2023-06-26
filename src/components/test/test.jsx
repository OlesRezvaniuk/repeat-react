import { useState } from "react";

export const Test = () => {
  const [size, setSize] = useState({ width: "", height: "" });
  const [value, setValue] = useState({ width: "", height: "" });

  console.log(value);
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          width: value.width,
          height: value.height,
        }}
      ></div>
      <p>choose the width(m)</p>
      <input
        type="number"
        value={size.width}
        onChange={(e) => {
          setSize({ ...size, width: Number(e.target.value) });
        }}
        onBlur={() => {
          setValue({ ...value, width: Number(size.width) });
        }}
      />
      <p>choose the height(m)</p>
      <input
        type="number"
        value={size.height}
        onChange={(e) => {
          setSize({ ...size, height: Number(e.target.value) });
        }}
        onBlur={() => {
          setValue({ ...value, height: Number(size.height) });
        }}
      />
    </>
  );
};
