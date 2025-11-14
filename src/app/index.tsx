import { useState } from "react";
import {View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

import {Button} from "@/components/button";
import { Input } from "@/components/input";

export default function Index (){
    const [name, setName] = useState("");

    function handleNext() {
        router.navigate("/dashboard")
    }

    function onChangeText(text: string) {
        setName(text);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {name}</Text>
            
            <Input onChangeText={setName}/>  

            <Button title ="Continuar" onPress={handleNext} />

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