import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center shrink-0">
      <img
        className="w-9 h-9 rounded-full"
        src={photoURL}
        alt={displayName}
      />
      {/* <span className="hidden md:block">{displayName}</span> */}
    </div>
  );
}
