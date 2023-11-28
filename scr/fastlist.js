import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        setData(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 15, marginTop: 100 }}>
        <Text style={styles.headerText}> LIST OF GUEST</Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View>
          {data.map((item, index) => (
            <View key={index}>
              <View style={styles.itemStyle}>
                <View>
                  <Text style={styles.nameText}>{item.name}</Text>
                  <Text style={{ fontWeight: 'bold' }}>{item.address.street}, {item.address.city}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: windowWidth,
    height: windowHeight,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  itemStyle: {
    paddingVertical: 15,
    borderBottomColor: "pink",
    borderBottomWidth: 0.5
  },
});