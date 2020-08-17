import * as React from "react";
import {
    Image, ImageSourcePropType, ImageStyle, StyleProp, TouchableOpacity, View, ViewStyle, Text,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { Colour } from "../styles";

interface CardProps {
    source: ImageSourcePropType;
    imageStyle?: StyleProp<ImageStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    onClick?(): void;
    price: string;
    views: string;
    bids: string;
    time: string;

}

export default function Card(props: CardProps) {
    const content = (
        <View style={[styles.cardContainer, props.containerStyle]}>
            <View style={styles.imageDesc}>
                <Image source={props.source} style={[styles.imageStyle, props.imageStyle]} /> 
                <View style={styles.desc}> 
                    <Text style={styles.carTitle}> 2018 Mclaren 720s </Text>
                    <Text style={{ color: Colour.margRed }}>4.2 <Icon name="star" size={13} color={Colour.margRed} />&nbsp;
                        <Icon name="star" size={13} color={Colour.margRed} />&nbsp;
                        <Icon name="star" size={13} color={Colour.margRed} />&nbsp;
                        <Icon name="star-sharp" size={13} color={Colour.lightGrey} />&nbsp;
                        <Icon name="star-sharp" size={13} color={Colour.lightGrey} />
                    </Text>
                    <Text style={styles.price}><Icon name="pricetags" size={16} color={Colour.lightGrey} /> #52,000,000</Text>
                    <Text style={styles.buyText}> Buy now price</Text>
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.centerNum}>
                    <Text style={[styles.numDet, {color: Colour.margRed}]}><Icon name="pricetags" size={15} color={Colour.lightGrey} /> {props.price} </Text>
                    <Text style={styles.buyText}>Highest Bid</Text>
                </View>
                <View style={styles.centerNum}>
                    <Text style={styles.numDet}> <Icon name="flag-outline" size={16} /> {props.bids} </Text>
                    <Text style={styles.buyText}>Total Bids</Text>
                </View>
                <View style={styles.centerNum}>
                    <Text style={styles.numDet}> <Icon name="time-outline" size={16} /> {props.time} </Text>
                    <Text style={styles.buyText}>Time left</Text>
                </View>
                <View style={styles.centerNum}>
                    <Text style={styles.numDet}> <Icon name="eye-outline" size={16} /> {props.views} </Text>
                    <Text style={styles.buyText}>Views</Text>
                </View>
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
