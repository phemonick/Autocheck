import React, {useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import styles from "./styles";

interface BidWonProps {
    onAccept(): void;
    onReject(): void;

}

const BidWon = (props: BidWonProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputTile}>
          <Text style={{fontSize: 35}}> ✩ </Text>
          <Text style={{color: '#AE3838', fontWeight: 'bold'}}>
            This Bid won the auction
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={{fontSize: 30, marginRight: 10}}> 👍</Text>
          <View>
            <Text
              style={{marginBottom: 10, color: '#022F49', fontWeight: 'bold'}}>
              Bid no: 0025
            </Text>
            <Text>07/25/2020 04:31</Text>
          </View>
        </View>
        <View style={styles.text}>
          <Text style={{fontWeight: 'bold'}}> Bid </Text>
          <Text style={{fontWeight: 'bold'}}> N52, 000, 000 </Text>
        </View>
        <View style={styles.text}>
          <Text> Net Pay </Text>
          <Text> -N1,000 </Text>
        </View>

        <View style={styles.text}>
          <Text> Service Charge </Text>
          <Text> -N1,000 </Text>
        </View>

        <View style={styles.text}>
          <Text> Logistics fee </Text>
          <Text> N51, 700,000 </Text>
        </View>

        <View style={styles.text}>
          <Text> Total </Text>
          <Text> -N1,000 </Text>
        </View>

        <View style={styles.button}>
          <Text onPress={props.onAccept} style={{...styles.buttonText, backgroundColor: '#022F49'}}>
            Accept Bid
          </Text>
          <Text onPress={props.onReject} style={{...styles.buttonText, backgroundColor: '#F1453E'}}>
            Reject Bid
          </Text>
        </View>
      </View>
    </>
  );
};

export default BidWon;
