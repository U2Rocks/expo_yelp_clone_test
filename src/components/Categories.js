import { FlatList } from "react-native"
import CategoryItem from "./CategoryItem"


export default function Categories({categories, setTerm, term}){

    return(
        <View>
            <FlatList 
            data={categories}
            // destructure item and render a component for each item
            renderItem={({item, index}) => {return (
            <CategoryItem name={item.name} 
            imageUrl={item.imageUrl} 
            index={index}
            active={item.name === term}
            handlePress={() => setTerm(item.name)}
            />)}}
            horizontal // make list horizontal
            showsHorizontalScrollIndicator={false}// no horizontal scroll bar
            keyExtractor={(category) => category.name}// unique key for each item
            />
        </View>
    )
}