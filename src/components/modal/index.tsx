import * as React from "react";
import {
    Modal, TouchableWithoutFeedback, StyleProp, Pressable, View, ViewStyle, Text,
} from "react-native";
import styles from "./styles";
import { Colour } from "../styles";

interface ModalProps {
    onRequestClose(): void;
    visible: boolean;
    modalBackgroundStyle?: StyleProp<ViewStyle>;
    newOffer(): void;
    toExistingBidders(): void;
    acceptDeal(): void;
}

export default function BidModal(props: ModalProps) {
    
    return (

        <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={props.onRequestClose}
        >
            <TouchableWithoutFeedback onPress={() => props.onRequestClose(false)}>
                 <View style={[ styles.container, props.modalBackgroundStyle]} />

            </TouchableWithoutFeedback>
                
             <View style={styles.innerContainerTransparentStyle}>
                 <View style={styles.modalTitleContainer}>
                    <Text style={styles.modalTitle}>looks like you are not happy with the deal</Text>
                    <Text style={styles.modalTitleInfo}>what will you like to do now ?</Text>
                 </View>
                 <View>
                     <Pressable onPress={props.toExistingBidders}>
                        <Text style={styles.modalLinks}>{"Send a new offer to all existing bidders".toUpperCase()}</Text>
                     </Pressable>
                     <Pressable onPress={props.onRequestClose}>
                         <Text style={[styles.modalLinks, styles.linkMargin]}>{"list on marketplace".toUpperCase()}</Text>
                     </Pressable>
                     <Pressable onPress={props.acceptDeal}>
                         <Text style={styles.modalLinks}>{"changed my mind, i want the deal".toUpperCase()}</Text>
                     </Pressable>
                 </View>
            </View>
            
        </Modal>
        </View>

    );
}
