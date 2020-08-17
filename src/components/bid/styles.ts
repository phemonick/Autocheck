import { Colour } from "../styles";
import { Platform, StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    cardContainer: {
        backgroundColor: Colour.white,
        width: Dimensions.get("window").width,
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 18,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: Colour.thinLine,
        borderBottomWidth: 1
    },
    childrenWrapper: { padding: 16 },
    imageStyle:      {
        borderTopLeftRadius:  6,
        borderTopRightRadius: 6,
        resizeMode:           "cover",
        width:                "100%",
    },
    bidNoDate: {
        justifyContent: "space-between",
        marginLeft: 8
    },
    bidNo: {
        color: Colour.black,
        fontSize: 17,
        fontWeight: "500"
    },
    bidInfo: {
        flexDirection: "row",
        alignItems: "center"

    },
    bidDate: {
        flexDirection: "row",
        marginTop: 8,
    },
    bidData: {
        color: Colour.lightGrey,
        
    },
    bidAmount: {
        flexDirection: "row"
    },
    amountText: {
        fontSize: 17,
        fontWeight: "bold",
        color: Colour.margRed,
        marginLeft: 5
    }
});
