import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite/no-important";
import { css, withStyles } from "react-with-styles";
import * as THEME from "./MainTheme";

/**Decided to implement airbnb's react-with-styles to be able to write styles as js objects,
 this would serve a greater purpose in bigger projects since I can set themes much like mixins etc. */

ThemedStyleSheet.registerTheme({
  /* Colors */
  colors: {
    success: THEME.COLOR_SUCCESS
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
