import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Accessibility/Button (default example)',
} as Meta;

export const accessible = () => <button>Accessible button</button>;

export const inaccessible = () => (
  <button
    style={{
      backgroundColor: 'red',
      color: 'darkRed',
    }}
  >Inaccessible button</button>
);
