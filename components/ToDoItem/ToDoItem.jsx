import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import listStyles from "../../styles/listStyles";

const TodoItem = ({ itemData, checkItem, deleteItem }) => {
  return (
    <View style={itemData.isDone ? listStyles.doneListItem : listStyles.listItem}>
      <Text style={itemData.isDone ? listStyles.doneItem : listStyles.itemText}>{itemData.content}</Text>
      <View>
        <TouchableOpacity style={listStyles.done} onPress={() => checkItem(itemData.id)}>
          <Text>{itemData.isDone ? 'To Do' : 'Done'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={listStyles.delete} onPress={() => deleteItem(itemData.id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default TodoItem;