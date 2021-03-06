import { createStyleSheet } from '@dyst/react';

export const useTheme = () => {
  return {
    colors: {
      white: '#FFFFFF',
      red: '#FF0000',
      green: '#00FF00',
      blue: '#0000FF',
    },
    spacing: {
      md: 10,
    },
  };
};

export const styleSheet = createStyleSheet({ theme: useTheme });

export default styleSheet;
