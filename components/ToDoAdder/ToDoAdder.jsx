import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import listStyles from "../../styles/listStyles";


const ToDoAdder = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');
  return (
    <View style={listStyles.addContainer}>
      <TextInput style={listStyles.itemInput} placeholder='I want to do...' onChangeText={(text) => setNewItem(text)} />
      <TouchableOpacity style={listStyles.addBtn} onPress={() => addItem(newItem)}>
        <Text style={listStyles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}


export default ToDoAdder;