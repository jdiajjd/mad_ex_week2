import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>

      <View style={styles.board}>
        <View style={styles.box}>
          <Text style={styles.text}>X</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>O</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>X</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.text}>O</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>X</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>O</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.text}>X</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>O</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>X</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  board: {
    width: 270,
    height: 270,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'lightgreen',
  },
  box: {
    width: 90,
    height: 90,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
