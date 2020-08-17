import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import styles from "./styles";

interface OfferSentProps {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

export default function OfferSent(props: OfferSentProps) {

    return (
       <View style={styles.container}>
           <Text style={styles.offerSent}> Offer Sent! </Text>
           <Text style={styles.offerDesc}> a gaming tournament looks at the choice of venue, equipment setup, prize setting,
                tournament structure, digital tools, and more. ... It's not uncommon for stores these days
                 to sell both board games and video games together 
            </Text>
            <View>
                <Text style={styles.remain}>Remaining Time</Text>
                <View style={styles.time}>
                    <View>
                        <Text style={styles.numTime}>{props.days}</Text>
                        <Text style={styles.tstStr}>Days</Text>
                    </View>
                    <Text style={styles.numTime}> {":"} </Text>
                    <View>
                        <Text style={styles.numTime}>{props.hours}</Text>
                        <Text style={styles.tstStr}>Hours</Text>
                    </View>
                    <Text style={styles.numTime}> {":"} </Text>
                    <View>
                        <Text style={styles.numTime}>{props.minutes}</Text>
                        <Text style={styles.tstStr}>Minutes</Text>
                    </View>
                    <Text style={styles.numTime}> {":"} </Text>
                    <View>
                        <Text style={styles.numTime}>{props.seconds}</Text>
                        <Text style={styles.tstStr}>Seconds</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.remain}>Rejected your offer</Text>
       </View>
    );
}
