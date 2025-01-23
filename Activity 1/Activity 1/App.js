import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
    <View  style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
    <Text>Old Gods</Text>
    
    <Text> Sak maestro</Text>
    <Image 
    source= {{
      uri: 'https://th.bing.com/th/id/R.1a616d03469304f3ee855e44e1037918?rik=pFgQjXyVUHRqoA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f3%2f38%2fFlower_July_2011-2_1_cropped.jpg&ehk=I18Ym0u7Qb7y5%2bz5oa87N%2bbaWjnVGYuMrN6djhH6O9I%3d&risl=&pid=ImgRaw&r=0'
    }}
    style= {{
       alignItems: 'center',width:200, height:200}}
    />
    </View>
    <TextInput
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      textAlign: 'center',
    }}
    defaultValue= "BLAH BLAHG BLAH"
    />
    </ScrollView>
  );
};

export default App;