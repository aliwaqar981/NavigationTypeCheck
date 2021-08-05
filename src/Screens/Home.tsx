import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Auth: undefined;
  Detail: {
    id: number;
  };
};

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

type Props = {
  navigation: authScreenProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Goto Details"
        // onPress={() => navigation.navigate('dfdf', 'Detail', 'Low', {id: 1})} Requiring this
        onPress={() => navigation.navigate('Detail', {id: 1})} // Should behave like this
      />
    </View>
  );
};
export default Home;
