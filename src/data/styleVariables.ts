import { devices } from "./breakpoints";

export const theme = {
  breakpoints: devices,
  color: {
    Primary: "#f8f9fa",
    Secondary: "#ffffff",
    Surface: "#FFFFFF",
    Background: "#FFFFFF",
    Error: "#B00020",
    OnPrimary: "#000000",
    OnSecondary: "#000000",
    OnBackground: "#000000",
    OnSurface: "#000000",
    OnError: "#FFFFFF",
  },
  font: {
    weight: 300,
    size: {
      big: "2rem",
      middle: "1.5rem",
      normal: "1rem",
    },
  },
  boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
};
