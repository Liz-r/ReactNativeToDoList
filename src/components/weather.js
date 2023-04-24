import React, {useCallback, useState} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
  View,
} from 'react-native';

import axios from 'axios';

const Weather = () => {
  const [input, setInput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const api = {
    key: 'e9935268e967aefadf899cd56a2db9d6',
  };

  console.log('test', data);

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput('');
    axios({
      method: 'GET',
      //url: ` http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api.key}&units=metric`,
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
    })
      .then(res => {
        console.log(res.data);
        setShowInfo(true);
        setData(res.data);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, [api.key, input]);

  return (
    <View style={styles.root}>
      <View>
        <TextInput
          placeholder="Introduce el nombre de la ciudad que deseas obtener el clima"
          onChangeText={text => setInput(text)}
          value={input}
          placeholderTextColor={'black'}
          style={styles.textInput}
          //se activa cuando se presiona enter
          onSubmitEditing={fetchDataHandler}
        />
      </View>
      {loading && (
        <View>
          <ActivityIndicator size={'large'} color="#009AFF" />
        </View>
      )}
      {showInfo && data !== undefined && (
        <View style={styles.infoView}>
          <Text style={styles.cityText}>
            {`${data?.name}, ${data?.sys?.country}`}
          </Text>
          <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
          <Text style={styles.tempText}>{`${Math.round(
            data?.main?.temp,
          )} °C`}</Text>
          <Text style={styles.minText}>{`Min ${Math.round(
            data?.main?.temp_min,
          )} °C / Max ${Math.round(data?.main?.temp_max)}`}</Text>
        </View>
      )}
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    padding: 5,
    paddingVertical: 10,
    marginVertical: 30,
    backgroundColor: 'white',
    fontSize: 13,
    borderRadius: 10,
    borderBottomColor: '#009AFF',
  },
  infoView: {
    alignItems: 'center',
  },
  cityText: {
    color: '#155985',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#009AFF',
    fontSize: 15,
    marginVertical: 10,
  },
  tempText: {
    color: '#155985',
    fontSize: 30,
    marginVertical: 10,
  },
  minText: {
    color: '#154999',
    fontSize: 15,
    marginVertical: 10,
    fontWeight: '500',
  },
});
