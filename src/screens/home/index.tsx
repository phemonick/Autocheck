import * as React from 'react';
import {NavigationInjectedProps} from 'react-navigation';
import {Routes} from '../../navigation/routes';
import Bidder from '../../components/Bidder';
import BidWon from '../../components/bidwon';
import styles from './styles';
import { ScrollView, View, StatusBar } from "react-native";
import BidModal from "../../components/modal";
import OfferSent from "../../components/offerSent";
import Card from "../../components/card";
import benz from "../../assets/benz.jpeg"
import Bid from "../../components/bid";
import AcceptBid from '../../components/acceptBid';

export default function Home(props: NavigationInjectedProps) {
  const indexOffset = 1;

    const [isVisible, setVisible] = React.useState(false);
    const [hideDetails, setHideDetails] = React.useState()
    const [bidDetails, showBidDetails] = React.useState(false);
    const [newOffer, setNewOffer] = React.useState(false);
    const [offerSent, setOfferSent] = React.useState(false);
    const [acceptBid, setAcceptBid] = React.useState(false);

    function toExistingBidders() {
        setVisible(false);
        showBidDetails(false);
        setNewOffer(true);
    }

    const setAllToFalse = () => {

        if(!hideDetails) {
            setHideDetails(!hideDetails)
            showBidDetails(true);
        } else {
            setVisible(false);
            setNewOffer(false);
            setHideDetails(!hideDetails)
            setAcceptBid(false);
            showBidDetails(false);
            setOfferSent(false);
        }
    }

    const myBids = [
        {
            date: "07/25/2020",
            bidNumber: "0025",
            amount: "52,000,000",
            time: "04:31",
            highest: true
        },
        {
            date: "07/25/2020",
            bidNumber: "0024",
            amount: "51,000,000",
            time: "04:31"
        },
        {
            date: "07/25/2020",
            bidNumber: "0023",
            amount: "48,000,000",
            time: "04:31"
        },
        {
            date: "07/25/2020",
            bidNumber: "0022",
            amount: "42,000,000",
            time: "04:31"
        },
        {
            date: "07/25/2020",
            bidNumber: "0021",
            amount: "39,000,000",
            time: "04:31"
        },
        {
            date: "07/25/2020",
            bidNumber: "0020",
            amount: "20,000,000",
            time: "04:31"
        },
        {
            date: "07/25/2020",
            bidNumber: "0019",
            amount: "18,000,000",
            time: "04:31"
        }
    ]

    return (
        <ScrollView>
            <StatusBar barStyle="dark-content"  />
            <Card  source={benz} price="#52M" bids="30" time="2d 3h" views="1,355" />
            {
                myBids.map((info) => (
                    <>

                    <Bid date={info.date} bidNumber={info.bidNumber} amount={info.amount} time={info.time} onClick={info.highest ? () => setAllToFalse() : null }  />
                    {
                        hideDetails ?
                        (
                            <>
                                {!acceptBid && !newOffer && bidDetails && info.highest && <BidWon onReject={() => setVisible(true)} onAccept={() => setAcceptBid(true)} />}
                                {!offerSent && newOffer && info.highest && <Bidder setOfferSent={() => setOfferSent(true)} />}
                                {!acceptBid && offerSent && info.highest && <OfferSent days="01" hours="02" minutes="03" seconds="04" />}
                                {acceptBid && info.highest && <AcceptBid source={benz} />}
                            </>
                        ) : null
                    }
                    
                    </>
                ))
            }
            <BidModal toExistingBidders={toExistingBidders} visible={isVisible} onRequestClose={() => setVisible(false)} acceptDeal={() => setAcceptBid(true)} />

        </ScrollView>
    );
}
