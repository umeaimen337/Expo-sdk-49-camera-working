import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';

export default function DisclaimerScreen({ navigation }) {
  const [fadeAnims, setFadeAnims] = useState([]);

  const guidelines = [
    ['Your ', 'eye movements', ' will be tracked'],
    ['Facial expressions', ' will be analyzed'],
    ['Stay in a ', 'well-lit environment'],
    ['Avoid ', 'looking away', ' from the screen'],
    ['Remove any ', 'eyewear', ' that causes glare'],
  ];

  useEffect(() => {
    // Initialize animations
    const anims = guidelines.map(() => new Animated.Value(0));
    setFadeAnims(anims);

    // Trigger animations in sequence
    anims.forEach((anim, i) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 500,
        delay: i * 400,
        useNativeDriver: true,
      }).start();
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.icon}>⚠️</Text>
        <Text style={styles.title}>Important Interview Guidelines</Text>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Please read carefully before starting:</Text>

          {fadeAnims.map((fadeAnim, index) => (
            <Animated.View key={index} style={{ opacity: fadeAnim }}>
              <Text style={styles.text}>
                {guidelines[index].map((part, i) => (
                  <Text
                    key={i}
                    style={i % 2 === 1 ? styles.bold : styles.normal}
                  >
                    {part}
                  </Text>
                ))}
              </Text>
            </Animated.View>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('CameraScreen')}
        >
          <Text style={styles.buttonText}>Start Interview</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0ff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  icon: {
    fontSize: 52,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#003366',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 22,
    marginBottom: 30,
    width: '100%',
    maxWidth: 380,
    shadowColor: '#003366',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#003366',
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
    color: '#003366',
  },
  normal: {
    color: '#333',
  },
  button: {
    backgroundColor: '#0055cc',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: 220,
    alignItems: 'center',
    shadowColor: '#003366',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
