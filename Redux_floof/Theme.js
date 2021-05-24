import { Dimensions } from "react-native";
export const { width, height } = Dimensions.get('window');

// for margin, padding etc
export const vSpacing = width * 0.05;
export const hSpacing = height * 0.05;
export const SPACING = Math.round(vSpacing * 0.5833);

// for fonts
export const FONT_10PX = Math.round(vSpacing * 0.4861);
export const FONT_12PX = Math.round(vSpacing * 0.5833);
export const FONT_14PX = Math.round(vSpacing * 0.6805);
export const FONT_16PX = Math.round(vSpacing * 0.7777);
export const FONT_17PX = Math.round(vSpacing * 0.8264);
export const FONT_18PX = Math.round(vSpacing * 0.875);
export const FONT_20PX = Math.round(vSpacing * 0.9722);
export const FONT_22PX = Math.round(vSpacing * 1.0694);
export const FONT_24PX = Math.round(vSpacing * 1.1667);
export const FONT_36PX = Math.round(vSpacing * 2.1875);
export const FONT_45PX = Math.round(vSpacing * 2.1875);

//for button
export const BUTTON_WIDTH = width * 0.85;
export const BUTTON_HEIGHT = FONT_10PX + FONT_45PX;