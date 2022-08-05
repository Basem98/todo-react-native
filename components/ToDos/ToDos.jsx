import { useState } from 'react';
import { View, FlatList, Text, Modal, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import formStyles from '../../styles/formStyles';
import listStyles from "../../styles/listStyles";
import ToDoAdder from '../ToDoAdder/ToDoAdder';
import TodoItem from '../ToDoItem/ToDoItem';

const todoItemsList = [
  { id: 1, content: 'Clean the room', isDone: false },
  { id: 2, content: 'Go running', isDone: false },
  { id: 3, content: 'Study React Native', isDone: false },
  { id: 4, content: 'Do some yoga', isDone: false },
];

const ToDos = ({ navigation, route }) => {
  const [todoList, setTodoList] = useState([...todoItemsList]);
  const [modalVisible, setModalVisible] = useState(false);
  const addNewItem = (newItemContent) => {
    const newItem = {
      id: todoList.length * Math.random() * 100,
      content: newItemContent,
      isDone: false
    }
    if (newItem.content.length > 0) {
      setModalVisible(false);
      setTodoList([newItem, ...todoList]);
      showSuccess();
    } else {
      showAlert();
    }
  }
  const checkItem = (itemId) => {
    const itemIndex = todoList.findIndex(item => item.id == itemId);
    const listAfterEdit = todoList;
    listAfterEdit[itemIndex].isDone = !listAfterEdit[itemIndex].isDone;
    setTodoList([...listAfterEdit]);
  }
  const deleteItem = (itemId) => {
    const itemIndex = todoList.findIndex(item => item.id == itemId);
    const listAfterEdit = todoList.filter(item => item.id !== itemId);
    setTodoList([...listAfterEdit]);
  }

  const showAlert = () => Alert.alert("Invalid Item", "Please fill the field with something you want to do!");

  const showSuccess = () => Alert.alert("Nice!", "Your item has been added");

  return (
    <SafeAreaView style={listStyles.container}>
      <View style={formStyles.headerContainer}>
        <Text style={listStyles.header}>Welcome back, {route.params.username ? route.params.username : 'Visitor'}!</Text>
      </View>
      <View style={formStyles.modalOpenContainer}>
        <TouchableOpacity style={formStyles.modalBtn} onPress={() => setModalVisible(!modalVisible)}>
          <Text style={formStyles.modalOpenTxt}>Add a ToDo Item</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        animationType='slide'
      >
        <ToDoAdder
          addItem={(newItem) => addNewItem(newItem)}
        />
      </Modal>
      <FlatList
        data={todoList}
        keyExtractor={(item) => (item.id * Math.random() * 100)}
        renderItem={({ item }) => (
          <TodoItem itemData={item}
            checkItem={(itemId) => checkItem(itemId)}
            deleteItem={(itemId) => deleteItem(itemId)}
          />)}
      ></FlatList>
    </SafeAreaView>
  );
}


export default ToDos;