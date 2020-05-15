import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';


const Disp =(prop)=>{

    console.log(prop)

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Percent: {prop.data}</Text>
            <Text style={styles.text}>Result:{prop.result}</Text>
        </View>
    )

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
