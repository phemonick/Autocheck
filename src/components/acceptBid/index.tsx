import * as React from "react";
import { Text, View, Image, ImageSourcePropType } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import styles from "./styles";

interface AcceptBid {
    source: ImageSourcePropType;
    onClick?(): void;
    price: string;
    views: string;
    bids: string;
    time: string;
}

export default function AcceptBid(props: AcceptBid) {

    return (
        <View style={styles.imageDesc}>
            <Image source={props.source} style={styles.imageStyle} /> 
            <View style={styles.desc}> 
                <Text style={styles.carTitle}> Bid Accepted! </Text>
                <Text style={styles.buyText}>optional chaining operator provides a way to simplify
                 accessing values through connected objects when it's possible that a reference or function may be undefined or null</Text>
            </View>
    </View>
    );
}

