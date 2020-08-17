import { TextStyle } from "react-native";

export const Colour = {
    black: "#000",
    checkBlue: "#013049",
    grey:      "#7C7676",
    lightGrey: "#7f7f7f",
    magenta:   "#ED6174",
    offWhite:  "#DDE2EB",
    primary:   "#4467B3",
    purpleIsh: "#393443",
    textColor: "#373542",
    white:     "#FFFFFF",
    margRed: "#ff5723",
    lightYellow: "#fbf9f1",
    thinLine: "#e4e3dc"
};

export const textStyles = {
    color:    Colour.textColor,
    fontSize: 16,
};

export const headerStyles: TextStyle = {
    color:      Colour.textColor,
    fontSize:   18,
    fontWeight: "bold",
};
