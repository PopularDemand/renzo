import React from 'react';
import { RZSvg } from '../core/RZSvg';

export default function GrinFace({ fill, stroke }) {
  return (
    <RZSvg
      fill={fill}
      stroke={stroke}
      path="M256 512c141.385 0 256-114.615 256-256s-114.615-256-256-256-256 114.615-256 256 114.615 256 256 256zM256 48c114.875 0 208 93.125 208 208s-93.125 208-208 208-208-93.125-208-208 93.125-208 208-208zM96 256v32c0 70.4 57.6 128 128 128h64c70.4 0 128-57.6 128-128v-32h-320zM192 378.494c-13.269-4.729-25.462-12.411-35.772-22.723-18.203-18.201-28.228-42.27-28.228-67.771h64v90.494zM288 384h-64v-96h64v96zM355.772 355.771c-10.312 10.312-22.505 17.994-35.772 22.723v-90.494h64c0 25.501-10.024 49.57-28.228 67.771zM112.676 192c0.001 0 0 0 0 0 4.884 0 9.054-3.528 9.862-8.345 3.079-18.342 18.834-31.655 37.462-31.655s34.383 13.313 37.462 31.655c0.808 4.816 4.978 8.345 9.861 8.345 4.884 0 9.054-3.528 9.862-8.344 0.541-3.218 0.814-6.467 0.814-9.656 0-31.981-26.019-58-58-58s-58 26.019-58 58c0 3.189 0.274 6.438 0.814 9.656 0.81 4.816 4.98 8.344 9.863 8.344zM304.676 192c0.001 0 0 0 0 0 4.885 0 9.056-3.528 9.862-8.345 3.079-18.342 18.834-31.655 37.462-31.655s34.383 13.313 37.462 31.655c0.808 4.816 4.979 8.345 9.861 8.345s9.054-3.528 9.861-8.344c0.541-3.218 0.814-6.467 0.814-9.656 0-31.981-26.019-58-58-58s-58 26.019-58 58c0 3.189 0.272 6.438 0.813 9.656 0.812 4.816 4.982 8.344 9.865 8.344z"
    />
  );
}
