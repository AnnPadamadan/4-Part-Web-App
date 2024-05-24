import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
import db from './localDNAdb';
import Card from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';  
export default class DNAmRNA extends React.Component{
  constructor() {
    super();
    this.state = {
      text: '',
      goPressed:false,
      mRNA:[],
      DNA:[],
      full:[]
    };
  }
  render(){
  return (
    <ScrollView>
    <View>
      <Text style={styles.heading}>DNA Transcription</Text>

      <TextInput style={styles.input} placeholder="Type here"
      onChangeText={text => {
              this.setState({
                text: text,
              });
            }}
            value={this.state.text}
      />
     


     <TouchableOpacity style={styles.button} onPress={() => {
            var word = this.state.text.toUpperCase().trim();
            db[word]?(
            this.setState({ mRNA: db[word].mRNA }),
            this.setState({ DNA: db[word].DNA }),
            this.setState({ full: db[word].full })
            
            )
            
            :
            Alert.alert("The chemical does not exist in our database");
          }}>>
          <Text style={styles.searchText}>Go</Text>
          </TouchableOpacity>
          </View>
 <View>         
<Icon name="remove" style={{alignSelf:"center"}}  size={50} color="midnightblue" />
<Text style={{alignSelf:"center", color:"midnightblue", fontSize:15}}>mRNA: {this.state.mRNA}</Text>

<Text style={{alignSelf:"center", color:"midnightblue", fontSize:15, marginTop:50}}>DNA: {this.state.DNA}</Text>

<Text style={{alignSelf:"center", color:"midnightblue", fontSize:15, marginTop:50, textAlign:"center"}}>Amino Acid or Chemical Name: {this.state.full}</Text>    
   </View>   
   <View><Text style={{marginTop:20}}></Text></View>    
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({

 heading:{
    fontSize:30,
    textAlign:"center",
    marginTop: 40,
    color:"midnightblue"
  },

  input:{
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
  button: {
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
    marginTop:-27,
    textAlign:"center",
  },
});
