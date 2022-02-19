import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import BusinessView from '@components/BusinessView'
import MapView from '@components/MapView'
import SearchView from '@components/SearchView'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest?.debuggerHost?.split(':').shift()}:3000`;

// Initialise Apollo Client

const client = new ApolloClient({
  uri: uri, // Server URL (must be absolute)
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
