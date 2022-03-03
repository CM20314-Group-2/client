import { gql, useLazyQuery, makeVar } from '@apollo/client'
import React, { useEffect, useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Input } from 'react-native-elements'

const GET_COMPANY_DATA = gql`
  query getBussiness ($_value: String!) {
    businessByName (name:$_value) {
      id
      name
      profilePicture
      sustainabilityScore
      customerScore
    }
  }
`

export const globalData = makeVar([]);

const SearchBar = () => {
  // Search field
  const [value, onChangeText] = useState('')
    
  // Query
  const [executeSearch, {data, error}] = useLazyQuery(    // 'loading' and 'data' can also be returned (not just error)
    GET_COMPANY_DATA, { variables: { _value: value } }
  )

  useEffect(() => {
    // Debounce query
    const delayDebounceFn = setTimeout(() => {
      executeSearch().then(_data => globalData(data), (error) => console.log(error))
    }, 300) 
    return () => clearTimeout(delayDebounceFn)
  }, [value])
    
  const updateSearch = (text : string) => {
    onChangeText(text)
  }

  return (
    <React.Fragment>
      <View style={styles.searchBarView}>
        <Input
          testID='search-bar'
          inputContainerStyle={styles.searchInput}
          placeholder='Search here'
          onChangeText={(text) => onChangeText(text)}
          leftIcon={<Icon name='search' size={25} />}
          leftIconContainerStyle={styles.leftContainerIconStyle}
          rightIcon={
            <Icon
              name='options-outline'
              type='ionicon'
              size={25}
              onPress={() => console.error('Not implemented.')}
            />
          }
          value={value}
        />
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  leftContainerIconStyle: {
    marginLeft: '5%',
  },
  safeAreaView: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  searchInput: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#E7E7E7',
    opacity: 1,
    width: '90%',
    alignSelf: 'center',
  },
  searchBarView: {
    marginTop: 'auto',
    marginBottom: '10%',
  },
})

export default SearchBar
