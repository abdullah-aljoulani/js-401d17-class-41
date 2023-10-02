import React, {useState} from "react";
import {StyleSheet, Text, Button, View} from "react-native";

const Start = (props) => {
    function nav() {
        props.navigation.navigate({routeName: "SecondScreen"});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to my App </Text>
            <Button title="Go to next Screen" onPress={nav} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
    text:{
        fontSize:"30",
        margin:"5%"
    }
});

export default Start;
