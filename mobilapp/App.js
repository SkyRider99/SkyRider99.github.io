import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableWithoutFeedback, Button } from 'react-native';
import styles from './styles'
import Details from './Components/Details';
import AnnatInfo from './Components/Relevant';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';





class FetchExample extends React.Component {
  static navigationOptions = {
    title: 'WorldSafari',
    headerTitleStyle:{
      fontWeight: 'bold',
      fontSize: 30,
      flex: 1,
      textAlign: 'center'
    }
  };

  //Loading funktion
  constructor(props){
    super(props);
    this.state ={ isLoading: true }
  }

  //Funktion när man trycker på något i listan
  actionOnRow(item){
    this.props.navigation.navigate('Details', {item});
  }

  //Anropa API
  componentDidMount(){
    return fetch('http://192.168.1.68:3000/lander')
    .then((resp) => resp.json())
    .then((respJson) => {
      this.setState({
        isLoading: false,
        dataSource: respJson,
      },
      );
    }).catch((error) =>{
      console.error(error);
    });
  }

  buttonPushedInfo(){
    this.props.navigation.navigate('RelevantInfo');
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.background}>
        <View style={styles.container}>
          <FlatList data={this.state.dataSource}
            renderItem={({item}) => 
            <TouchableWithoutFeedback onPress={() => this.actionOnRow(item)}>
              <Text style = {styles.listTextStyle}>{item.name}</Text>
            </TouchableWithoutFeedback>
          }
            keyExtractor={item => item._id.toString()}/>
          <Button title="Annat intressant info" onPress={() => this.buttonPushedInfo()} />
        </View>  
      </View>
    );
  }
} 

/* Ny Sida */
/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

class RelevantInfo extends React.Component {
  static navigationOptions = {
    title: 'ISLANDS',
    headerTitleStyle:{
      fontWeight: 'bold',
      fontSize: 30,
      flex: 1,
      textAlign: 'center'
    }
  };

  //Loading funktion
  constructor(props2){
    super(props2);
    this.state ={ isLoading2: true }
  }

  //Funktion när man trycker på något i listan
  actionOnRow(item){
    this.props2.navigation.navigate('AnnatInfo', {item});
  }

  //Anropa API
  componentDidMount(){
    return fetch('http://192.168.1.68:3000/lander')
    .then((resp2) => resp2.json())
    .then((respJson2) => {
      this.setState({
        isLoading2: false, 
        dataSource: respJson2,
      },
      );
    }).catch((error) =>{
      console.error(error);
    });
  }

  render(){

    if(this.state.isLoading2){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.background}>
        <View style={styles.container}>
          <FlatList data={this.state.dataSource}
            renderItem={({item}) => 
            <View style= {styles.ramKort}>
              <Text style = {styles.detailsTextStyle}>Island: {item.island}</Text>
              <Text style = {styles.detailsTextStyle}>Island Size: {item.islandsize}</Text>
              <Text style = {styles.detailsTextStyle}>Island Population: {item.Islandpopulation}</Text>
            </View>
          }
            keyExtractor={item => item._id.toString()}/>
        </View>  
      </View>
    );
  }
}



const AppNavigator = createStackNavigator(
  {
    Home: FetchExample,
    Details: Details,
    RelevantInfo: RelevantInfo,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'green'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20
      }
    }
  });

export default createAppContainer(AppNavigator);


