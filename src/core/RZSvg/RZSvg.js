import React from 'react';
import { Svg } from 'expo';

export default function RZSvg({ fill, stroke, path }) {
  return (
    <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512">
      <Svg.Path
        fill={fill}
        stroke={stroke}
        d={path}
      />
    </Svg>
  );
}

RZSvg.defaultProps = {
  fill: 'black',
  stroke: 'white',
  path: "M448 704h128v128h-128zM704 256c35.346 0 64 28.654 64 64v192l-192 128h-128v-64l192-128v-64h-320v-128h384zM512 96c-111.118 0-215.584 43.272-294.156 121.844s-121.844 183.038-121.844 294.156c0 111.118 43.272 215.584 121.844 294.156s183.038 121.844 294.156 121.844c111.118 0 215.584-43.272 294.156-121.844s121.844-183.038 121.844-294.156c0-111.118-43.272-215.584-121.844-294.156s-183.038-121.844-294.156-121.844zM512 0v0c282.77 0 512 229.23 512 512s-229.23 512-512 512c-282.77 0-512-229.23-512-512s229.23-512 512-512z"
};
