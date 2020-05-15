import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { TextInput, Appbar , Button} from 'react-native-paper'

class App extends React.Component {

  state = {
    name1: '',
    name2: ''
  }

  render() {
    return (
      <View style={styles.container}>

        <Appbar.Header style={{ backgroundColor:'yellow'}}>
         
          <Appbar.Content
            title="Friendship % Calculator"
            subtitle="masterapps.co"
          />
          
        </Appbar.Header> 


        <Text style={{ fontSize: 20, color: "yellow" }}>Please enter the details here...</Text>
        <TextInput
          label='Name 1'
          value={this.state.hname}
          onChangeText={text => this.setState({ text })}
        />
        <TextInput
          label='Name 2'
          value={this.state.sname}
          onChangeText={text => this.setState({ text })}
        />

        <Button style={{ backgroundColor: 'yellow' }} icon="adjust" mode="contained" onPress={() => console.log('Pressed')}>
          <Text style={{ color:'#660033'}}>Calculate</Text>
        </Button>

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