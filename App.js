import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

import TaskTile from "./components/TaskTile";
import InputTask from "./components/InputTask";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function inputTaskHandler(enteredTask) {
    const id = Math.floor(Math.random() * 1000000000).toString();
    setTasks((prevTasks) => {
      return [...prevTasks, { id: id, text: enteredTask }];
    });
  }

  function deleteTaskHandler(id) {
    setTasks((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.app}>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Add Task...</Text>
        </Pressable>
        {modalVisible && (
          <InputTask
            tasks={tasks}
            onAddTask={inputTaskHandler}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        )}
        <View style={styles.listLayout}>
          <Text style={styles.heading}>Your Tasks...</Text>

          <FlatList
            data={tasks}
            renderItem={(task) => {
              return (
                <TaskTile
                  text={task.item.text}
                  id={task.item.id}
                  onDeleteTask={deleteTaskHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "pink",
    paddingTop: 60,
    padding: 20,
  },
  listLayout: {
    flex: 5,
    marginTop: 20,
    width: "100%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "900",
    color: "maroon",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "maroon",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    width: "30%",
  },
  buttonText: {
    color: "white",
  },
});
