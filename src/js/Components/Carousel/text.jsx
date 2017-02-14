import React, { Component } from 'react';


export function text(key, words, style) {
  return (
    <p 
      className="text"
      style={style}
      key={key}
    >
      {words}
    </p>
  );
}