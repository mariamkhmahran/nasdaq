import React from 'react';
import { MoonLoader } from 'react-spinners';
import { LoaderContainer } from '../styles';

export const LoadingRow: React.FC = () => (
  <LoaderContainer>
    <MoonLoader color="#fff" size={20} />
  </LoaderContainer>
);
