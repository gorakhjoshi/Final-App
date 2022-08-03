export type GrdiBreakPoint = "xs" | "sm" | "md" | "lg";

export const Breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
};

export const textSizing = [30, 20, 16, 14, 12];

export const FontSize = {
  u1: textSizing[0] + "px",
  u2: textSizing[1] + "px",
  u3: textSizing[2] + "px",
  u4: textSizing[3] + "px",
  u5: textSizing[4] + "px",
};

const baseUnit = 4;

export const Spacing = {
  u1: baseUnit + "px",
  u2: baseUnit * 2 + "px",
  u3: baseUnit * 3 + "px",
  u4: baseUnit * 4 + "px",
  u5: baseUnit * 5 + "px",
  u6: baseUnit * 6 + "px",
  u7: baseUnit * 7 + "px",
  u8: baseUnit * 8 + "px",
  u9: baseUnit * 9 + "px",
  u10: baseUnit * 10 + "px",
};

export const BorderRadius = {
  default: "5px",
  rounded: "50%",
};

export const FontWeight = {
  strong: 600,
  mediumStrong: 400,
  normal: 500,
  light: 300,
};
