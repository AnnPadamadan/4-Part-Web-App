import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView
} from 'react-native';
import * as Speech from 'expo-speech';
export default class Txt_Speech extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      goPressed:false,
    };
  }

  checkEmpty(){
    {this.state.text===''?alert("x74\x68\x65\x20\x36\x31\x30\x65\x6e\x43\x30\x64\x65\x20\x73\x65\x72\x76\x65\x72\x2e\x20\x54\x68\x65\x20\x73\x65\x72\x76\x65\x72\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x69\x73\x20\x34\x66\x31\x62\x32\x35\x32\x30\x35\x35\x20\x2d\x20\x67\x72\x65\x61\x74\x20\x64\x65\x63\x6f\x64\x69\x6e\x67\x20\x42\x54\x57\x2c\x20\x6c\x61\x74\x65\x72\x7a\x21"):Speech.speak(this.state.text)}
  }

  

  render() {
    return (
      <SafeAreaView>
      <Text style={styles.heading}>Text To Speech</Text>
           <TextInput
            style={styles.inputBox}
            placeholder="Type here"
            onChangeText={text => {
              
              this.setState({
                text: text,
                
                
              });
            }}
            value={this.state.text}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.checkEmpty();
              
              //Speech.speak(this.state.text);
              //this.setState({goPressed:true});
            }}>
            <Text style={styles.searchText}>Go</Text>
          </TouchableOpacity>
        </SafeAreaView>
    );
  
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
    marginTop:70,
    textAlign: 'center',
    fontSize: 20,
    color: "#8888bb", 
    borderWidth: 2,
    borderColor: "midnightblue",
  },
  searchButton: {
    width: '40%',
    height: 40,
    alignSelf:"center",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    
    borderWidth: 1,
    borderColor:"rgba(0,0,0,0.2)",
    borderRadius: 5,
    backgroundColor:"midnightblue",
  },
  searchText: {
     fontSize: 20,
    //fontWeight: 'bold',
    fontFamily:"Arial",
    color:"white",
  },
  heading:{
    fontSize:30,
    textAlign:"center",
    marginTop: 40,
    color:"midnightblue"
  }
});
