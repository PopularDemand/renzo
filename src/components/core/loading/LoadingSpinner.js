import React from 'react';
import { Rotate } from '../transforms';
import { Earth } from '../../svg';
import whenLoading from './whenLoading';

// TODO: Customize icon
export const LoadingSpinner = () => (
  <Rotate>
    <Earth fill="blue" />
  </Rotate>
);

export default whenLoading(LoadingSpinner);
