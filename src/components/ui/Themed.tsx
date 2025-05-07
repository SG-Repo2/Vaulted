/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';
import { ms, vs } from 'react-native-size-matters';
import Colors from '../../theme/Colors';
import { ExternalLink } from '../layout/ExternalLink';
import { MonoText } from './StyledText';
import { useColorScheme } from '../../hooks/useColorScheme';

const defaultFont = 'SFPro-Regular';
const fontConfig = {
  h1: { size: ms(32), lineHeight: vs(40) },
  h2: { size: ms(24), lineHeight: vs(32) },
  h3: { size: ms(20), lineHeight: vs(28) },
  body: { size: ms(16), lineHeight: vs(24) },
  caption: { size: ms(14), lineHeight: vs(20) },
};

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'] & {
  variant?: keyof typeof fontConfig;
  accessibilityRole?: 'header' | 'text' | 'link' | 'button' | 'none';
};
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, variant = 'body', accessibilityRole, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const font = variant === 'body' ? defaultFont : 'SFPro-Semibold';
  const { size, lineHeight } = fontConfig[variant];

  return (
    <DefaultText 
      style={[
        { 
          color, 
          fontFamily: font,
          fontSize: size,
          lineHeight,
          // Ensure minimum touch target size for accessibility
          minHeight: vs(44),
        }, 
        style
      ]} 
      accessibilityRole={accessibilityRole}
      {...otherProps} 
    />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
