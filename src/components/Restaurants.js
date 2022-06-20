import {StyleSheet, View, Text, ActivityIndicator, FlatList} from 'react-native'
import useRestaurants from '../hooks/useRestaurants'
import { useEffect } from 'react'
import RestaurantItem from './RestaurantItem'

export default function Restaurants({term}){

    const [{data, loading, error}, searchRestaurants] = useRestaurants()

    useEffect(() => {
        searchRestaurants(term)
    }, [term])

    console.log({data, loading, error})
    // console.log(term)

    if(loading) return <ActivityIndicator size="large" marginVertical={30} />// display spinner while loading content

    if(error) return (
        <View style={styles.container}>
            <Text style={styles.header}>{error}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
            <FlatList 
            data={data}
            keyExtractor={(restaurant) => restaurant.id}
            renderItem={({item}) => {
                <RestaurantItem restaurant={item}/>
            }}
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
    }
})