import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite/no-important";
import { css, withStyles } from "react-with-styles";
import * as THEME from "./MainTheme";

ThemedStyleSheet.registerTheme({
  /* Colors */
  colors: {
    success: THEME.COLOR_SUCCESS,
    danger: THEME.COLOR_DANGER,
    successHighlight: THEME.COLOR_SUCCESS_HIGHLIGHT,
    dangerHighlight: THEME.COLOR_DANGER_HIGHLIGHT
  },
  /* Gradients */
  gradients: {
    success: THEME.GRADIENT_SUCCESS,
    danger: THEME.GRADIENT_DANGER
  },
  /* themes */
  themes: {
    success: {
      color: "white",
      backgroundColor: THEME.COLOR_SUCCESS,
      borderColor: THEME.COLOR_SUCCESS,
      ":hover": {
        backgroundColor: THEME.COLOR_SUCCESS_HIGHLIGHT
      }
    },
    danger: {
      color: "white",
      borderColor: THEME.COLOR_DANGER,
      backgroundColor: THEME.COLOR_DANGER,
      ":hover": {
        backgroundColor: THEME.COLOR_DANGER_HIGHLIGHT
      }
    },

    successGradient: {
      background: THEME.GRADIENT_SUCCESS,
      ":active": {
        background: THEME.GRADIENT_SUCCESS_INVERSE
      },
      ":hover": {
        background: THEME.COLOR_SUCCESS_HIGHLIGHT
      }
    },
    dangerGradient: {
      background: THEME.GRADIENT_DANGER,
      ":active": {
        background: THEME.GRADIENT_DANGER_INVERSE
      },
      ":hover": {
        background: THEME.COLOR_DANGER_HIGHLIGHT
      }
    }
  },

  text: {
    xs: {
      fontSize: "10px"
    },
    small: {
      fontSize: "14px"
    },
    medium: {
      fontSize: "16px"
    },
    large: {
      fontSize: "24px"
    },
    xl: {
      fontSize: "36px"
    }
  }
});
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, ThemedStyleSheet };
