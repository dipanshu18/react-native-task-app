import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
} from "react-native";

export default function InputTask({
  onAddTask,
  modalVisible,
  setModalVisible,
}) {
  const [enteredTask, setEnteredTask] = useState("");

  function addTaskHandler() {
    onAddTask(enteredTask);
    setEnteredTask("");
    setModalVisible(false);
  }

  return (
    <Modal animationType="fade" visible={modalVisible}>
      <View style={styles.modalLayout}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter your task..."
            onChange={(e) => {
              setEnteredTask(e.nativeEvent.text);
            }}
            value={enteredTask}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={addTaskHandler}>
            <Text style={styles.buttonText}>Add Task</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalLayout: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "pink",
  },
  inputBox: {
    width: "100%",
    borderWidth: 2,
    borderColor: "maroon",
    padding: 10,
    marginBottom: 20,
    color: "maroon",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  button: {
    backgroundColor: "maroon",
    flex: 1,
    alignItems: "center",
    padding: 13,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
});
