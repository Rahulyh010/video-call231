import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-toast-message';
import colors from '../../colors';

const Home = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Cartibuy',
      text2: 'Hey !',
    });
  };

  return (
    <SafeAreaView className="w-full h-full bg-white dark:bg-black">
      <Text className="text-primary">Kabeer</Text>
      <Text className="text-error">Kabeer</Text>
      <Text className="text-success">Kabeer</Text>

      <View className="w-full h-20">
        <Text className="text-2xl text-black">Hello World</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          showToast();
          colors.primary = '#47EB4A';
        }}
        className="w-20 h-10 bg-red-500 rounded-lg shadow-lg mt-10">
        <Text>Click me 🎉</Text>
      </TouchableOpacity>
      <Toast />
    </SafeAreaView>
  );
};

export default Home;
