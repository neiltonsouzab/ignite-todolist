import { FlatList, Image, Text, View, Keyboard } from "react-native";

import { styles } from "./styles";
import logoImg from "../../assets/logo.png";
import clipboardImg from '../../assets/clipboard.png';

import { InputText } from "../../components/InputText";
import { CreateButton } from "../../components/CreateButton";
import { colors } from "../../theme";
import { useMemo, useState } from "react";
import { Task } from "../../components/Task";

type Task = {
  description: string,
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet.", done: false },
    { description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et.", done: false, },
    { description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu.", done: false },
    { description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis.", done: false },
    { description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta.", done: false },
  ])
  const [newTask, setNewTask] = useState("");
  const tasksLength = useMemo(() => tasks.length, [tasks]);
  const tasksDoned = useMemo(() => tasks.filter(item => item.done).length, [tasks]);

  function handleCreate() {
    setTasks(prevState => [...prevState, { description: newTask, done: false }]);
    setNewTask("");
    Keyboard.dismiss()
  }

  function handleToggleAsDone(task: Task) {
    const updatedTasks = tasks.map(item => {
      if (item.description === task.description) {
        return { ...item, done: !item.done }
      } else {
        return item
      }
    })

    setTasks(updatedTasks)
  }

  function handleDelete(task: Task) {
    const updatedTasks = tasks.filter(item => item.description !== task.description)
    setTasks(updatedTasks)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <InputText 
            style={styles.input} 
            value={newTask} 
            onChangeText={text => setNewTask(text)} 
          />
          <CreateButton onPress={handleCreate} />
        </View>

        <View style={styles.tasks}>
          <View style={styles.tasksHeader}>
            <View style={styles.tasksInfo}>
              <Text style={styles.tasksInfoCreated}>Criadas</Text>
              <Text style={styles.tasksInfoCounter}>{tasksLength}</Text>
            </View>

            <View style={styles.tasksInfo}>
              <Text style={styles.tasksInfoDoned}>Concluídas</Text>
              <Text style={styles.tasksInfoCounter}>{tasksDoned}</Text>
            </View>
          </View>

          <FlatList
            data={tasks}
            keyExtractor={item => item.description}
            renderItem={({ item }) => (
              <Task 
                task={item.description}
                doned={item.done}
                onToggleAsDone={() => handleToggleAsDone(item)}
                onDelete={() => handleDelete(item)}
              />
            )}
            ListEmptyComponent={() => (
              <View style={styles.tasksEmpty}>
                <Image source={clipboardImg} />
                <Text style={[styles.tasksEmptyText, styles.tasksEmptyTextHighlight]}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.tasksEmptyText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  )
}