"use client";
import React from "react";

export const RightClipPath = () => {
  return (
    <svg
      className="absolute -bottom-32 -right-28 animate-pulseh md:-right-16"
      width="200"
      height="200"
      fill="none"
      viewBox="0 0 200 200"
    >
      <defs>
        <pattern
          id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            className="text-primary-900/60"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width="404"
        height="784"
        fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
      />
    </svg>
  );
};
