import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const YourComponent = () => {
  const [loaded, setLoaded] = useState(false);
  const [showNextPage, setShowNextPage] = useState(false);

  const handleButtonPress = () => {
    // When the button is pressed, toggle the state to show the next page component
    setShowNextPage(true);
  };

  return (
    <View style={styles.container}>
      {showNextPage ? (
        <NextPageComponent />
      ) : (
        <>
          <Image
            source={require('./assets/duolingo-opp.gif')}
            style={[styles.gif, loaded && styles.loaded]}
            resizeMode="contain"
            onLoad={() => setLoaded(true)}
          />
          {loaded && (
            <View style={styles.textContainer}>
              <Text style={styles.text}>Pico</Text>
            </View>
          )}

          {/* Add a button to navigate to the next page */}
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Go to Next Page</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

// Define the NextPageComponent that will be shown when the button is pressed
const NextPageComponent = () => {
  return (
    <View style={styles.container}>
      {/* Content for the next page */}
      <Text style={styles.text}>This is the Next Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'navy',
    position: 'relative',
  },
  gif: {
    width: 200,
    height: 200,
    opacity: 0,
  },
  loaded: {
    opacity: 1,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default YourComponent;
