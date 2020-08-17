import { headerStyles } from "../../components/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        width: '95%',
        paddingVertical: 20,
        paddingHorizontal: 10
      },
      inputTile: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        fontWeight: 'bold',
      },
      item: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
      },
      inputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        padding: 5,
      },
      text: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      buttonText: {
        padding: 15,
        borderRadius: 8,
        color: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 120,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: {width: 1, height: 13},
        width: '50%',
        textAlign: 'center',
        marginRight: 10,
        fontWeight: 'bold',
      },
      button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      requestButton: {
        textAlign: 'center',
        backgroundColor: '#022F49',
        padding: 15,
        color: 'white',
      },
});
