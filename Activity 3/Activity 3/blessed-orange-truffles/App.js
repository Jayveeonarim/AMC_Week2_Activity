import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
      MIrano
        <Text style={styles.innerText}> jayvee</Text>
      </Text>
      <Text>I am
      <Text style={{color: 'green'}}> BSIT</Text>
      </Text>
      <Text>Live in
      <Text style={{color: 'orange'}}> Caloocan</Text>
      </Text>
  <Text>Favorite Color is 
      <Text style={{color: 'yellow'}}> White</Text>
      </Text>
      
  
    </SafeAreaView>
  </SafeAreaProvider>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  innerText: {
    color: 'red',
  },
});

export default BoldAndBeautiful;