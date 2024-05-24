//F=(C x 1.8) + 32
//C=[(°F-32)×5]/9
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
import db from './localDNAdb';
import Card from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';  
export default class CelToFar extends React.Component{
  constructor() {
    super();
    this.state = {
      celCellQ:0,
      farCellA:0,

      farCellQ:0,
      celCellA:0,
    };
  }
  render(){
  return (
    <ScrollView>
    <View>
      <Text style={styles.heading}>Celsius To Fahrenheit</Text>
      <Icon name="remove" style={{alignSelf:"center", marginBottom:-50, marginTop:20}}  size={50} color="midnightblue" />
<Text style={{alignSelf:"center", color:"midnightblue", fontSize:15, marginTop:50, marginBottom:-30}}>Celsius: {this.state.celCellQ}</Text>
<Text style={{alignSelf:"center", color:"midnightblue", fontSize:15, marginTop:50, marginBottom:-30}}>Fahrenheit: {this.state.farCellA}</Text>
      <TextInput style={styles.input} placeholder="Type here"
      onChangeText={text => {
              this.setState({
                celCellQ: text,
              });
            }}
            value={this.state.text}
      />
     

<TouchableOpacity style={styles.button} onPress={() => {
            
            
          var inputCel=this.state.celCellQ;

            this.setState({farCellA:(inputCel*1.8)+32})

          
          }}>>
          <Text style={styles.searchText}>Go</Text>
          </TouchableOpacity>
     
          </View>
 <View>     
 <Text style={styles.heading}>Fahrenheit to Celsius</Text>    
<Icon name="remove" style={{alignSelf:"center", marginTop:20}}  size={50} color="midnightblue" />
<Text style={{alignSelf:"center", color:"midnightblue", fontSize:15, marginTop:10, marginBottom:-30}}>Fahrenheit: {this.state.farCellQ}</Text>
<Text style={{alignSelf:"center", color:"midnightblue", fontSize:15, marginTop:50, marginBottom:-30}}>Celsius: {this.state.celCellA}</Text>


   </View>   
   <View><Text style={{marginTop:20}}></Text></View>    

     <TextInput style={styles.input2} placeholder="Type here"
      onChangeText={text => {
              this.setState({
                farCellQ: text,
              });
            }}
            value={this.state.text}
      />
     
     <TouchableOpacity style={styles.button} onPress={() => {
            
            
          
          var inputFar=this.state.farCellQ;
            this.setState({celCellA:((inputFar-32)*5)/9})
          }}>>
          <Text style={styles.searchText}>Go</Text>
          </TouchableOpacity>
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
  input2:{
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
    marginTop:-27
  },
});
//put these in a switch navigator....
