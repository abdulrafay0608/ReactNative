
import React from 'react';
import { Button, Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import SearchInput from '../components/search';
import BottomNavigation from '../navigation/bottomNavigation';

function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FED718",
        paddingHorizontal: 15
      }}>
        <Feather name="menu" color={"#000"} size={30} />
        <View>
          <Text style={{ fontSize: 25, color: "#000", }}>
            Burger Queen
          </Text>
        </View>
        <FontAwesome name="bell-o" color={"#000"} size={35} />

      </View>


      <View style={{ flex: 12 }}>
        <ScrollView>
          {/* Search Input */}
          <SearchInput />

          <View style={{ paddingHorizontal: 15, marginVertical: 20 }}>
            <Text style={{ fontSize: 26, color: "#000" }}>
              Popular Iteam
            </Text>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, }}>
            <View style={{ alignItems: "center", padding: 10, borderWidth: 2, borderColor: "#FED718" }}>
              {/* <Image style={{ height: 100, width: 150, objectFit: "contain" }} source={require("../assets/image/item1.png")} /> */}
              <Text style={{ fontSize: 16, margin: 6, color: "#000" }}>Cheese Burger</Text>
              <Text style={{ fontSize: 14, marginBottom: 6, color: "#000" }}>৳389.00</Text>
              <Button color="#FED718" title='Add to Cart' ></Button>
            </View>
            <View style={{ alignItems: "center", padding: 10, borderWidth: 2, borderColor: "#FED718" }}>
              <Image style={{ height: 100, width: 150, objectFit: "contain" }} source={require("../assets/image/item2.png")} />
              <Text style={{ fontSize: 16, margin: 6, color: "#000" }}>Chicken Burger</Text>
              <Text style={{ fontSize: 14, marginBottom: 6, color: "#000" }}>৳389.00</Text>
              <Button color="#FED718" title='Add to Cart' />
            </View>
          </View>


          <View style={{ paddingHorizontal: 15, marginVertical: 25 }}>
            <Text style={{ fontSize: 26, color: "#000" }}>
              Special Offers
            </Text>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, }}>
            <View style={{ alignItems: "center", padding: 10, borderWidth: 2, borderColor: "#FED718" }}>
              <Image style={{ height: 100, width: 150, objectFit: "contain" }} source={require("../assets/image/item3.png")} />
              <Text style={{ fontSize: 16, margin: 6, color: "#000" }}>Cheese Burger</Text>
              <Text style={{ fontSize: 14, marginBottom: 6, color: "#000" }}>৳389.00</Text>
              <Button color="#FED718" title='Add to Cart' ></Button>
            </View>
            <View style={{ alignItems: "center", padding: 10, borderWidth: 2, borderColor: "#FED718" }}>
              <Image style={{ height: 100, width: 150, objectFit: "contain" }} source={require("../assets/image/item4.png")} />
              <Text style={{ fontSize: 16, margin: 6, color: "#000" }}>Chicken Burger</Text>
              <Text style={{ fontSize: 14, marginBottom: 6, color: "#000" }}>৳389.00</Text>
              <Button color="#FED718" title='Add to Cart' />
            </View>
          </View>


          <View style={{ paddingHorizontal: 15, marginVertical: 25 }}>
            <Text style={{ fontSize: 26, color: "#000" }}>
              New Arrival Iteam
            </Text>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, marginBottom: 30 }}>
            <View style={{ alignItems: "center", padding: 10, borderWidth: 2, borderColor: "#FED718" }}>
              <Image style={{ height: 100, width: 150, objectFit: "contain" }} source={require("../assets/image/item5.png")} />
              <Text style={{ fontSize: 16, margin: 6, color: "#000" }}>Cheese Burger</Text>
              <Text style={{ fontSize: 14, marginBottom: 6, color: "#000" }}>৳389.00</Text>
              <Button color="#FED718" title='Add to Cart' ></Button>
            </View>
            <View style={{ alignItems: "center", padding: 10, borderWidth: 2, borderColor: "#FED718" }}>
              <Image style={{ height: 100, width: 150, objectFit: "contain" }} source={require("../assets/image/item6.png")} />
              <Text style={{ fontSize: 16, margin: 6, color: "#000" }}>Chicken Burger</Text>
              <Text style={{ fontSize: 14, marginBottom: 6, color: "#000" }}>৳389.00</Text>
              <Button color="#FED718" title='Add to Cart' />
            </View>
          </View>

        </ScrollView>
      </View>


      <BottomNavigation />

    </SafeAreaView>
  );
}

export default Home;
