import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { randomId } from './utils/Generator';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todolist, setTodoList] = useState([
    { todo: 'King cain gold', id: '1' },
    { todo: 'Doggo', id: '2' },
    { todo: 'Shiba inu', id: '3' },
    { todo: 'Prince zuko', id: '4' },
  ]);

  const addTodo = (todo) => {
    if (todo.length > 3) {
      setTodoList((prevState) => {
        return [{ todo: todo, id: randomId() }, ...prevState]
      })
    } else {
      Alert.alert('Opps', 'Dog name must be over 3 characters long!', [
        {
          title: 'Okay',
          onPress: () => { console.log('dismissed alert') }
        }
      ])
    }

  }

  const removeTodo = (id) => {
    setTodoList((prevState) => {
      return prevState.filter(todo => todo.id != id)
    })
  }

  useEffect(() => {
    console.log(todolist)
  }, [todolist])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={styles.container}>
        <Header />
        <AddTodo addTodo={addTodo} />
        <FlatList
          data={todolist}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem item={item} removeTodo={removeTodo} />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  submitButton: {
    margin: 10,
  },
  todoInput: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "blue",
    borderStyle: "solid",
  },
  item: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    margin: 10,
    backgroundColor: "gold",
  }
});
