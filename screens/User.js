import React from 'react';
import {Text,
     View, 
     StyleSheet, 
     ActivityIndicator, 
     Linking, 
     FlatList,
    TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//export default class Home extends React.Component{
  //  render(){
export default function User({navigation}){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Page User</Text>
                <TouchableOpacity style={styles.button}
                onPress={()=>navigation.goBack()}>
                    <Text>Go back</Text>
                </TouchableOpacity>

          
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff5050',
        flex: 1,
        justifyContent: 'center',

    },
    title: {
        fontSize: 25,
        color: "white",
    },
    button: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop: 10,
        width: 250,
        borderRadius: 100

    }
})