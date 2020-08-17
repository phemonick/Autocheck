import { Colour } from "../styles";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    cardContainer: {
        backgroundColor: Colour.lightYellow,
        borderRadius:    6,
    },
    childrenWrapper: { padding: 16 },
    imageStyle:      {
        borderRadius:  6,
        resizeMode:           "cover",
        width:                "55%",
        maxHeight: 130
    },
    imageDesc: {
        flexDirection: "row",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colour.thinLine
    },
    desc: {
        justifyContent: "space-around",
        paddingHorizontal: 10,

    },
    buyText: {
        color: Colour.lightGrey,
        fontSize: 14
    },
    price: {
        fontSize: 16,
        fontWeight: "400"
    },
    carTitle: {
        fontSize: 14,
        fontWeight: "400",
        color: Colour.black
    },
    details: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    numDet: {
        fontSize: 15,
        fontWeight: "600",
        paddingBottom: 10,
    },
    centerNum: {
        justifyContent: "center",
        marginRight: 24
    }
});
