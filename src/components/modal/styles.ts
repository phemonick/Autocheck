import { Colour } from "../styles";
import { Platform, StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      innerContainerTransparentStyle: {
        flex: 1,
        backgroundColor: '#fff', padding: 20,
        marginHorizontal: "10%",

        ...Platform.select({
            android: { elevation: 3, marginVertical: "50%", },
            ios:     {
                shadowColor:   "#000",
                shadowOffset:  { height: 4, width: 0 },
                shadowOpacity: 0.5,
                shadowRadius:  3,
                marginVertical: "80%",
            },
        }),
      },
      modalTitleContainer: {
        marginBottom: 25
      },
      modalTitle: {
          fontSize: 20,
          fontWeight: "500",
          marginBottom: 5,
          
      },
      modalTitleInfo: {
          color: Colour.lightGrey
      },
      modalLinks: {
        fontSize: 12,
        color: Colour.checkBlue,
        
      },
      linkMargin: {
          marginVertical: 10
      }
});
