import React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';

const TaskItem = ({ task, onPressDelete, onPressEdit, }) => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button} onPress={onPressDelete}>
        <AntDesing
          name="delete"
          color={'#D2ECFD'}
          size={25}
          style={style.buttonDelete}
        />
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={onPressEdit}>
        <AntDesing
          name="edit"
          color={'#D2ECFD'}
          size={25}
          style={style.buttonDelete}
        />
      </TouchableOpacity>
      <Text style={style.text}>{task}</Text>
    </View>
  );
};



const style = StyleSheet.create({
  container: {
    backgroundColor: '#2196f3',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    // backgroundColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
  buttonDelete: {
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
});

export default TaskItem;