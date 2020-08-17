import { Colour } from "../styles";
import { Platform, StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 20,
      },
      imageStyle:      {
        borderRadius:  6,
        resizeMode:           "cover",
        width:                "30%",
        maxHeight: 130
    },
      imageDesc: {
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    desc: {
        justifyContent: "space-around",
        paddingHorizontal: 10,
        width: "60%"

    },
    buyText: {
        color: Colour.black,
        fontSize: 10,
        padding: 10
    },

    carTitle: {
        color: Colour.checkBlue
    }
    
});
