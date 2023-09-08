'use client'
import React from 'react'

export const LeftClipPath = () => {
  return (
    <svg
    className="absolute xl:-top-10 sm:-top-24 sm:right-52 xl:right-96 animate-pulse"
    width="200"
    height="200"
    fill="none"
  >
    <defs>
      <pattern
        id="a"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <path
          className="text-primary-900/50"
          fill="currentColor"
          d="M0 0h4v4H0z"
        />
      </pattern>
    </defs>
    <path fill="url(#a)" d="M0 0h300v300H0z" />
  </svg>
  )
}