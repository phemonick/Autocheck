import { Colour } from "../styles";
import { Platform, StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: Colour.white,
        paddingHorizontal: 15,
        paddingVertical: 20
      },
    offerSent: {
        fontSize: 14,
        fontWeight: "400",
        color: Colour.checkBlue
    },
    offerDesc: {
        fontSize: 12,
        marginVertical: 16
    },
    remain: {
        fontSize: 12,
        color: Colour.lightGrey
    },
    time: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 25
    },
    numTime: {
        fontSize: 50,
        fontWeight: "500",
        color: Colour.checkBlue
    },
    tstStr: {
        textAlign: "center",
        color: Colour.lightGrey
    }
});
