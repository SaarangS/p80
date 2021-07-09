import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return(
      <View style = {styles.container}>
        <SafeAreaView style = {styles.androidSafeArea}/>
        <ImageBackground
          style = {styles.background}
          source = {
            require('../assets/stars.gif')
          }
        >

          <View style={styles.titleicon}>
            <Image style={styles.icon} source={require('../assets/main-icon.png')}/>
            <Text style = {styles.title}>Stellar App</Text>
          </View>

          <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("spacecraft")}>
            <Text style={styles.routeText}>Spacecrafts</Text>
            <Image source={require("../assets/space_crafts.png")} style={styles.routeImg}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("star-map")}>
            <Text style={styles.routeText}>Star Map</Text>
            <Image source={require("../assets/star_map.png")} style={styles.routeImg}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("daily-pic")}>
            <Text style={styles.routeText}>Daily Pictures</Text>
            <Image source={require("../assets/daily_pictures.png")} style={styles.routeImg}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeArea: {
    marginTop: Platform.OS === "android"?StatusBar.currentHeight: 0,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    textAlign: 'center', 
    fontSize: 45,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  
  titleicon: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
  routeCard: {
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    
  },
  routeText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: 'purple'

  },
  routeImg: { 
    width:65,
    height: 100,
    position: "absolute",
    resizeMode: 'contain',
    right: -15,
  }
});