import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { TextInput, Appbar , Button} from 'react-native-paper';


import Disp from './components/dispfriendship';


class App extends React.Component {

  state = {
    name1: '',
    name2: '',
    data:"loading"
  }

  submit(){
    // console.log("Called")
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.name1}&sname=${this.state.name2}`,
    {headers: { "x-rapidapi-host":"love-calculator.p.rapidapi.com", "x-rapidapi-key":"0598e7e61fmsh5fbe81bcaae76fep1de32cjsna13d922e74e6"}}
    )

    .then(data=>data.json())
    .then(data2 =>{
      console.log(data2)
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Appbar.Header style={{ backgroundColor:'yellow', marginBottom:10}}>
         
          <Appbar.Content
            title="FRIENDSHIP % CALCULATOR"
            subtitle="masterapps.co"
            style={{alignItems:"center"}}
          />
          
        </Appbar.Header> 


        <Text style={{ fontSize: 15, color: "yellow" ,marginBottom:10 , marginTop:10}}>Please enter the details here...</Text>
        <TextInput
          label='Person 1'
          value={this.state.hname}
          onChangeText={text => this.setState({ name1:text })}
        />
        <TextInput
          label='Person 2'
          value={this.state.sname}
          onChangeText={text => this.setState({ name2:text })}
        />

        <Button 
        style={{ backgroundColor: 'yellow', margin:30 }} 
        icon="adjust" 
        mode="contained" 
        onPress={this.submit.bind(this)}>
         <Text style={{ color:'#660033'}}>Calculate</Text>
        </Button>

      <Disp/>

      </View>
    );
  }

}



export default App;


//if we dont write StyleSheet.create then also it will work, but it is helpful in error checking
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#660033',

    flexDirection: "column",       //how we will justifyContent
    // justifyContent: "center",      //centerize flexDirection-wise
    // alignItems: "center"           //centerize the opposite of flexdirection
  },
});

//for more, type FLEXBOX REACT-NATIVE in GOOGLE