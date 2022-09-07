import React from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";
import styles from '../styles'

export default class Details extends React.Component{
    buttonPushedInfo(){
        this.props.navigation.navigate('RelevantInfo');
      }

    static navigationOptions = ({navigation}) => {
        return{
            title: navigation.state.params.item.name,
        };
    };

    render(){
        return( 
        <ScrollView>
            <View style={styles.background}>
                <View style={styles.container}>  
                    <Text style={styles.detailsTextStyle}><Text style={styles.rubrik}>Country:</Text> {this.props.navigation.state.params.item.name}</Text>
                    <Text style={styles.detailsTextStyle}><Text style={styles.rubrik}>Land Size:</Text> {this.props.navigation.state.params.item.size}</Text>
                    <Text style={styles.detailsTextStyle}><Text style={styles.rubrik}>Population:</Text> {this.props.navigation.state.params.item.population}</Text>
                    <Text style={styles.detailsTextStyle}><Text style={styles.rubrik}>GPD:</Text> {this.props.navigation.state.params.item.gpd}</Text>  
                    <Text style={styles.detailsTextStyle}><Text style={styles.rubrik}>BC History:</Text> {this.props.navigation.state.params.item.bchistory}</Text>
                    <Text style={styles.detailsTextStyle}><Text style={styles.rubrik}>AD History:</Text> {this.props.navigation.state.params.item.achistory}</Text> 
                    <Button title="Annat intressant info" onPress={() => this.buttonPushedInfo()} />
                </View>
            </View>
        </ScrollView>
        )
    }
} 

