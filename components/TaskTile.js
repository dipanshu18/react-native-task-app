import { View, Text, StyleSheet, Pressable } from "react-native";

export default function TaskTile({ id, text, onDeleteTask }) {
  function deleteTaskHandler() {
    onDeleteTask(id);
  }

  return (
    <Pressable onPress={deleteTaskHandler}>
      <View style={styles.task}>
        <Text style={styles.taskText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: "maroon",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  taskText: {
    color: "white",
  },
});
