import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import Search from "../components/Search";


export default function HomeScreen() {

    const [term, setTerm] = useState("Burger")

  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/burger.png")
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png")
    },
    {
      name: "Dessert",
      imageUrl: require("./src/assets/images/cake.png")
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/images/smoothies.png")
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/images/steak.png")
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png")
    },
  ]

    return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm}/>
      <Categories categories={commonCategories} setTerm={setTerm} term={term}/>
      <Restaurants term={term}/>
      <StatusBar />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(253,253,253)",
        flex: 1,
    }
})