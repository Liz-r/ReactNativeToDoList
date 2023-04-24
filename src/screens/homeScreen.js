import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ListHeader from '../components/listHeader';
import TaskItem from '../components/taskItem';
import useTask from '../hooks/useTask';

import AntDesing from 'react-native-vector-icons/AntDesign';
import Weather from '../components/weather';

const screenHeight = Dimensions.get('screen').height;

const HomeScreen = () => {
  const { addTask, deleteTask, task, tasks, showAdd, updateAdd, editTask, editItem } =
    useTask();
  const [showWeather, setShowWeather] = useState(false);
  const [idNow, setidNow] = useState();
  const [btnAdd, setbtnAdd] = useState(true);
  const [newBtnEdit, setnewBtnEdit] = useState(false);


  const copiItem = (obj) => { return obj.slice(1) };

  return (
    <SafeAreaView style={{ marginHorizontal: 20, marginTop: 10 }}>
      {showAdd && (
        //Contenedor del input
        <View>
          <TextInput
            placeholder="Agregar nueva tarea"
            style={styles.input}
            value={task}
            onChangeText={editTask}
          />
          <View style={{ marginVertical: 10, flexDirection: 'row' }}>
            {newBtnEdit ? <TouchableOpacity
              style={[styles.button, styles.acceptButton]}
              onPress={() => { updateItem(idNow); setnewBtnEdit(false) }}>
              <AntDesing
                name="check"
                color={'#D2ECFD'}
                size={25}
                style={styles.buttonText}
              />
            </TouchableOpacity> : ''}
            {btnAdd ? <TouchableOpacity
              style={[styles.button, styles.acceptButton]}
              onPress={() => { addTask(idNow); setbtnAdd(false) }}>
              <AntDesing
                name="save"
                color={'#D2ECFD'}
                size={25}
                style={styles.buttonText}
              />
            </TouchableOpacity> : ""}
            <TouchableOpacity
              style={[styles.button, styles.cancelarButton]}
              onPress={() => updateAdd(false)}>
              <AntDesing
                name="close"
                color={'#D2ECFD'}
                size={25}
                style={styles.buttonText}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View>
        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <TaskItem
              task={item}
              onPressDelete={() => deleteTask(index)}
              onPressEdit={() => {
                editItem(item, index);
                setidNow(index); setnewBtnEdit(true); setbtnAdd(false)
              }} />
          )}
          ListHeaderComponent={() => <ListHeader />}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
        />
      </View>

      {/*Botón para agregar tarea*/}

      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => { updateAdd(true); setnewBtnEdit(false); setbtnAdd(true) }}>
          <AntDesing
            name="checksquareo"
            color={'#919596'}
            size={25}
            style={styles.addButtonText}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.weatherButton}
          onPress={() =>
            showWeather ? setShowWeather(false) : setShowWeather(true)
          }>
          <AntDesing
            name={showWeather ? 'close' : 'cloudo'}
            color={'#919596'}
            size={25}
            style={styles.addButtonText}
          />
        </TouchableOpacity>
      </View>
      <View>{showWeather && <Weather />}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 60,
    width: 160,
    backgroundColor: '#29bf12',
  },
  weatherButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 60,
    width: 160,
    backgroundColor: '#2196f3',
    marginLeft: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  addButtonContainer: {
    position: 'absolute',
    top: screenHeight - 160,
    right: 10,
    flexDirection: 'row',
  },
  input: {
    padding: 10,
    backgroundColor: '#bbdefb',
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    padding: 10,

    //solo toma el tamaño del contenido
    alignSelf: 'flex-start',
  },
  acceptButton: {
    backgroundColor: '#29bf12',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
  cancelarButton: {
    backgroundColor: '#f21b3f',
    marginLeft: 5,
  },
});
export default HomeScreen;