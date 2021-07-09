import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image, TextInput } from 'react-native';
import { WebView } from 'react-native-webview'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: '',
      longitude: '',
      path: ''
    }

    const { longitude, latitude } = this.state;
    this.state.path = "https://virtualsky.lco.global/embed/index.html?longitude=${this.state.longitude}&latitude=${this.state.latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"
  }

  render() {
      return(
        <View style = {styles.container}>
        <SafeAreaView style = {styles.androidSafeArea}/>
        
          <View style={styles.titleicon}>
              <Image style={styles.icon} source={require('../assets/star_map.png')}/>
              <Text style = {styles.title}>Star Maps</Text>
          </View>

          <View style = {{ alignItems: "center", justifyContent: 'center', marginTop: 10, marginBottom: 7 }}>
            <TextInput
              style = {{ height: 40, width: 250, borderColor: 'white', borderWidth: 1.5, borderRadius: 5, textAlign: 'center' }}
              placeholder = "Enter your Latitude"
              placeholderTextColor = "#ffffff"
              onChangeText = {(text) => {
                this.setState({
                  latitude: text
                })
              }}
            />

            <TextInput
              style = {{ height: 40, width: 250, borderColor: 'white', borderWidth: 1.5, borderRadius: 5, textAlign: 'center' }}
              placeholder = "Enter your Longitude"
              placeholderTextColor = "#ffffff"
              onChangeText = {(text) => {
                this.setState({
                  longitude: text
                })
              }}
            />
          </View>

          <WebView
            scalesPageToFit = {true}
            source = {{ uri: this.state.path }}
            style = {{ marginTop: 20, marginBottom: 20,  }}
          />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#876A7F',
    padding: 8,
  },
  androidSafeArea: {
    marginTop: Platform.OS === "android"?StatusBar.currentHeight: 0,
  },
  titleicon: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: 'center', 
    fontSize: 35,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  icon: {
    width: 60,
    height: 60,
  },
});