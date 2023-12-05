
import React from 'react';
import { TextInput, View } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
// import Feather from 'react-native-vector-icons/dist/Feather';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

function SearchInput() {
    return (
        <View style={{ position: "relative", marginTop: 10, paddingHorizontal: 5 }}>
            <TextInput placeholderTextColor={"#989898"} placeholder='Search' keyboardType="web-search"
                style={{
                    borderColor: "#989898",
                    height: 60,
                    margin: 12,
                    borderWidth: 3,
                    padding: 10,
                    fontSize: 20,
                    paddingLeft: 20,
                    borderRadius: 10,
                }} />
            <Fontisto style={{ position: "absolute", top: 28, right: 30 }} color={"#3D3D3D"} name="search" size={25} />
        </View>
    );
}

export default SearchInput;
