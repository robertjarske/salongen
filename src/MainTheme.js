/* COLORS */

export const COLOR_SUCCESS = "#2FF9D7";
export const COLOR_DANGER = "#FF4181";

export const COLOR_SUCCESS_HIGHLIGHT = "#8BF9E7";
export const COLOR_DANGER_HIGHLIGHT = "#FF8FB5";

/* GRADIENTS */
export const GRADIENT_SUCCESS = `linear-gradient(to top, ${COLOR_SUCCESS}, ${COLOR_SUCCESS_HIGHLIGHT})`;
export const GRADIENT_DANGER = `linear-gradient(to top, ${COLOR_DANGER}, ${COLOR_DANGER_HIGHLIGHT})`;
export const GRADIENT_SUCCESS_INVERSE = `linear-gradient(to bottom, ${COLOR_SUCCESS}, ${COLOR_SUCCESS_HIGHLIGHT})`;
export const GRADIENT_DANGER_INVERSE = `linear-gradient(to bottom, ${COLOR_DANGER}, ${COLOR_DANGER_HIGHLIGHT})`;

export const linearGradient = (direction, color1, color2) => {
  return `linear-gradient(to ${direction}, ${color1}, ${color2}`;
};
