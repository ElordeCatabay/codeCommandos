import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const developerData = [
  {
    name: 'Aaron Lomibao',
    role: 'Front End/Back End',
    image: require('../assets/developers/aaron.jpg')

  },
  {
    name: 'Elorde Catabay',
    role: 'Front End/Backend',
    image: require('../assets/developers/elorde.jpg')


  },
  {
    name: 'Charles Cabo',
    role: 'Front End',
    image: require('../assets/developers/charles.webp')
  },
  {
    name: 'Helen Louise Garcia',
    role: 'Gatherer Resources',
    image: require('../assets/developers/helen.jpg')

  },
  {
    name: 'Regine Legaspi Capitle',
    role: 'Gatherer Resources',
     image: require('../assets/developers/regine.jpg')
  }
]

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>School Resource Finder</Text>
      <Text style={styles.introText}>
        Welcome to the School Resource Finder, an application designed
        to provide a reviewer for IT students. Our dedicated team of developers
        has worked collaboratively to create a secure platform.
      </Text>

      <Text style={styles.developerTitle}>Meet the Developers:</Text>
      {developerData.map((developer, index) => (
        <View key={index} style={styles.developerContainer}>
          <Image source={developer.image} style={styles.avatar} />
          <View style={styles.developerInfo}>
            <Text style={styles.name}>{developer.name}</Text>
            <Text style={styles.role}>{developer.role}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  introText: {
    marginBottom: 20
  },
  developerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  developerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10
  },
  developerInfo: {
    flexDirection: 'column'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  role: {
    fontSize: 15
  }
})

export default AboutUs
