import React from 'react';
import { RZSvg } from '../core/RZSvg';

export default function AidKit({ fill, stroke, style }) {
  return (
    <RZSvg
      fill={fill}
      stroke={stroke}
      style={style}
      path="M448 128h-96v-64c0-17.6-14.4-32-32-32h-128c-17.6 0-32 14.4-32 32v64h-96c-35.2 0-64 28.8-64 64v256c0 35.2 28.8 64 64 64h384c35.2 0 64-28.8 64-64v-256c0-35.2-28.8-64-64-64zM192 64h128v64h-128v-64zM384 352h-96v96h-64v-96h-96v-64h96v-96h64v96h96v64z"
    />
  );
}
