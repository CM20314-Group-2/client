import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import MapView from '@components/MapView'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'

const { manifest } = Constants

// Initialise Apollo Client
const client = new ApolloClient({
  uri: `${Constants.manifest?.extra?.serverAddress}`, // Server URL (must be absolute)
  cache: new InMemoryCache() // Cache
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <MapView/>
      </View>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})

export default App
