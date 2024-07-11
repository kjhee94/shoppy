import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="font-semibold bg-brand p-2 rounded-lg text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
