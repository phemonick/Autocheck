import React, {useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import { Colour } from './styles';
const Bidder = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputTile}>
          <Text>Bid</Text>
          <Text>N52, 000, 000</Text>
        </View>

        <Text style={styles.text}>Your Expected Price</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Your expected Price" style={styles.input}>
            N12,100, 000
          </TextInput>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+100</Text>
          <Text style={styles.buttonText}>+1000</Text>
          <Text style={styles.buttonText}>+10,000</Text>
          <Text style={styles.buttonText}>+100,000</Text>
        </View>
        <Text onPress={props.setOfferSent} style={styles.requestButton}>
          REQUEST
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '90%',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  inputTile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    fontWeight: '900',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    borderColor: Colour.lightGrey,
  },
  text: {
    marginBottom: 20,
  },
  buttonText: {
    backgroundColor: '#2D98F0',
    padding: 15,
    borderRadius: 18,
    color: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 120,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
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

export default Bidder;
