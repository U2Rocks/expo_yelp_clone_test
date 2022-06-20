
import {View, TextInput, StyleSheet} from "react-native";
import {useState} from 'react'
import {FontAwesome} from "@expo/vector-icons";
import { elevation } from "../styles";

// textinput white by default

// you can use an array of styles to help import multiple styles from a common source
export default function Search({setTerm}){
    const [input, setInput] = useState("")

    const handleEndEditing = () => {
        if(!input) return
        setTerm(input)
        setInput("")
    }


    return(
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name="search" size={25}/>
            <TextInput 
            style={styles.input}
            placeholder="Name of News Story..."
            value={input}// bind value of input to whats in box
            onChangeText={(text) => {setInput(text)}}// constantly update when text input changes
            onEndEditing={handleEndEditing}// callback a function when enter is pressed
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 40,
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
    },
    elevation,
})