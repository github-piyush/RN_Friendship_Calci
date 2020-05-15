import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';


const Disp =(prop)=>{

    console.log(prop)

    if(prop.data=="loading"){
        return(
            <Text style={styles.text}>loading ho raha hai...</Text>
        )
    }

    if(prop.data.message){
        return (
            <Text style={styles.text}>Something went wrong...!!!</Text>
        )
    }
    else{
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Percent: {prop.data.percentage}</Text>
                <Text style={styles.text}>Result: {prop.data.result}</Text>
            </View>
        )
    }

}

export default Disp

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#660033',
        flexDirection: "column",       //how we will justifyContent
    },

    text:{
        fontSize:30,
        color:'yellow'

    }
});
