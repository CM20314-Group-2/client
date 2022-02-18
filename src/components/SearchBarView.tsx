import { gql, useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Icon, Input } from 'react-native-elements'

// GraphQL fragment
const COMPANY_TILE_DATA = gql` {
  fragment CompanyTile on Business{
    id
    name
    profilePicture
    sustainabilityScore
    customerScore
  }
}
`

const GET_COMPANY_DATA = gql`
  query getBussiness ($_value: String!) {
    bussinessByName (name:$_value) {
      id
      name
      profilePicture
      sustainabilityScore
      customerScore
    }
  }
`;

const SearchBar = () => {
  // Search field
  const [value, onChangeText] = useState('')
    
  // Query
  const [executeSearch, {data, error}] = useLazyQuery(    // 'loading' and 'data' can also be returned (not just error)
    GET_COMPANY_DATA, { variables: { name: value } }
  )

  // Debounce query
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      executeSearch().then(data => console.log(data), (error) => console.error(error))
    }, 300) 
    return () => clearTimeout(delayDebounceFn)
  }, [value])
    
  const updateSearch = (text : string) => {
    onChangeText(text)
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.searchBarView}>
        <Input 
          inputContainerStyle={styles.searchInput}
          placeholder='Search here'
          onChangeText={text => updateSearch(text)}

          // Search Icon
          leftIcon = {
            <Icon
              name='search'
              size={25}
            />
          }
          leftIconContainerStyle = {{marginLeft:'2%'}}

          // Filter Icon
          rightIcon = {<Icon
            name='options-outline'
            type='ionicon'
            size={25}
            onPress={() => console.error('Not implemented.')}
          />
          }
          value={value}
        />
      </View>
    </SafeAreaView>
        
  )
} 

const styles = StyleSheet.create({
  safeAreaView: {
    flex:1,
    padding:20,
    flexDirection: 'column'
  },
  searchInput: {
    borderRadius:10,
    borderWidth:2,
    borderColor:'#FFFFFF',
    backgroundColor:'#FFFFFF',
  },
  searchBarView:{
    marginTop: 'auto',
    marginBottom:'10%',
  }
})

export default SearchBar