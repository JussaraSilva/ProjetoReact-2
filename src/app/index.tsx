import {View, Text, StyleSheet, Alert} from "react-native";

import {Button} from "../components/button";

export default function Index (){
    function handleMessage() {
        Alert.alert("Olá, Jussarinha!");
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá! Jussara</Text>
            <Button title ="Continuar" onPress={handleMessage} />
            <Button title = "Sair" onPress={handleMessage} />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 32,
        backgroundColor: "#d2d2d2",
        justifyContent: "center",
        gap: 16,
    },

    title:{
        color:"#121212", 
        fontSize: 24,
    },
})