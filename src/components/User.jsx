import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center shrink-0">
      <img
        className="w-8 h-8 rounded-full"
        src={photoURL}
        alt={displayName}
      />
      {/* <span className="hidden md:block">{displayName}</span> */}
    </div>
  );
}
