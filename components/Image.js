import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 60,
    height: 65,
  },
});

const CustomImage = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.tinyLogo}
                source={{
                    uri: 'https://cdn2.iconfinder.com/data/icons/performance-5/512/Rush-512.png',
                  }}
            />

        </View>
    )
}
export default CustomImage