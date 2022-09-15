import colors from '@/helpers/theme/colors';

const textColor = {
  primary: {
    color: colors.primary.main,
  },
  secondary: {
    color: colors.secondary.main,
  },
  white: {
    color: colors.grey[0],
  },
  black: {
    color: colors.grey[1000],
  },
  grey300: {
    color: colors.grey[300],
  },
  grey400: {
    color: colors.grey[400],
  },
  grey700: {
    color: colors.grey[700],
  },
};

export type TextColor = keyof typeof textColor;

export default textColor;
