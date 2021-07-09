import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image, Alert, Linking } from 'react-native';
import axios from 'axios';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apod: {}
    }
  }

  componentDidMount() {
    this.getAPOD()
  }

  getAPOD = () => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=QCTbdnne003pkMTe1LagMLN648U1yKDg8LcNxmHX')
      .then(response => {
        this.setState({ apod: response.data })
      })
      .catch(error => {
          Alert.alert(error.message)
      })
  }

  render() {
    return(
      <View style = {styles.container}>
        <SafeAreaView style = {styles.androidSafeArea}/>

        <ImageBackground source = {require('../assets/stars.gif')} style={styles.backgroundImage}>
        <View style = {styles.header}>
	        <Text style={styles.routeText}>Space Picture of the Day:</Text>
	        <Text style={styles.titleText}>{this.state.apod.title}</Text>
        </View>

          <TouchableOpacity 
            style = {styles.listContainer}
            onPress = {() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
          >

            <View style={styles.iconContainer}>
                <Image source={require('../assets/play-video.png')} style={{ width: 50, height: 50}}></Image>
		        </View>
	        </TouchableOpacity>
	
	        <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
        </ImageBackground>
	
	
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  androidSafeArea: {
    marginTop: Platform.OS === "android"?StatusBar.currentHeight: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    backgroundColor: 'white',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 200,
    marginTop: 5,
    marginLeft: 60,
  },
  iconContainer: {
    marginTop: 15,
    marginLeft: 125,
  },
  explanationText:{
    fontSize: 12,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    width: 275,
    marginTop: 25,
    marginLeft: 15,
  },
});