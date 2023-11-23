import { View, Text, ImageBackground, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React from "react";

const ScanScreen = ({navigation}) => {
    return (
        <ImageBackground
            source={require("../assets/image/background.png")}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ marginHorizontal: 20 }}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.70)",
                        width: 44,
                        height: 44,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 9,
                    }}
                >
                    <Image source={require("../assets/image/back.png")} />
                </TouchableOpacity>
            </SafeAreaView>
            <View
                style={{
                    width: 300,
                    height: 80,
                    backgroundColor: "#fff",
                    position: "absolute",
                    bottom: 80,
                    alignSelf: "center",
                    borderRadius: 16,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <Image source={require("../assets/image/product3.png")} />
                <View>
                    <Text style={{fontSize: 12, color:'#C2C2C2'}}>Lauren’s</Text>
                    <Text style={{fontSize: 16}}>Orange Juice</Text>
                </View>
                <View
                    style={{
                        width: 45,
                        height: 45,
                        backgroundColor: "#5A6CF3",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius:11
                    }}
                >
                    <Image
                        source={require("../assets/image/add.png")}
                        style={{ width: 22, height: 22 }}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

export default ScanScreen;
