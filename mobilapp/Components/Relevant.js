import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from '../styles'

export default class AnnatInfo extends React.Component {
    static navigationOptions = ({navigation}) => {
        return{
            title: navigation.state.params.item2.island,
        }; 
    };

    render(){
        return(
            <ScrollView>
                <View style={styles.background}>
                    <View style={styles.container}>
                        <Text style={styles.detailsTextStyle}><Text style={styles.rubrik}>Island:</Text> {this.props.navigation.state.params.item2.island}</Text>
                        <Text style={styles.detailsTextStyle}><Text style={styles.rubrik}>Island Size:</Text> {this.props.navigation.state.params.item2.islandSize}</Text>
                        <Text style={styles.detailsTextStyle}><Text style={styles.rubrik}>Island Population:</Text> {this.props.navigation.state.params.item2.IslandPopulation}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}



