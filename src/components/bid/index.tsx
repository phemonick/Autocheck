import * as React from "react";
import {
    Image, ImageSourcePropType, ImageStyle, StyleProp, TouchableOpacity, View, ViewStyle, Text,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { Colour } from "../styles";

interface BidProps {
    date: string;
    bidNumber: string;
    amount: string;
    onClick?(): void;
    containerStyle?: StyleProp<ViewStyle>;
    time: string;
}

export default function Bid(props: BidProps) {
    const content = (
        <View style={[styles.cardContainer, props.containerStyle]}>
            <View style={styles.bidInfo}>
                <Icon name="flag-outline" size={20} color={Colour.lightGrey} />
                <View style={styles.bidNoDate}>
                    <Text style={styles.bidNo}>Bid no: {props.bidNumber}</Text>
                    <View style={styles.bidDate}>
                        <Text style={styles.bidData}>{props.date} {props.time} </Text>
                    </View>
                    
                </View>
            </View>
            <View style={styles.bidAmount}>
                <Icon name="pricetags" size={17} color={Colour.lightGrey} />
                <Text style={styles.amountText}>{`#${props.amount}`}</Text>
            </View>
        </View>
    );

    return !!props.onClick
        ? (
            <TouchableOpacity activeOpacity={0.8} onPress={props.onClick}>
                {content}
            </TouchableOpacity>
        )
        : content;
}
