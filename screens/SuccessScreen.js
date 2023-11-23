import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Pressable,
} from "react-native";
import React from "react";

const SuccessScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ marginHorizontal: 20 }}>
            <TouchableOpacity
                style={{
                    width: 44,
                    height: 44,
                    backgroundColor: "#f8f8fb",
                    borderRadius: 9,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onPress={() => navigation.goBack()}
            >
                <Image source={require("../assets/image/back-purple.png")} />
            </TouchableOpacity>
            <Image
                source={require("../assets/image/hero.png")}
                style={{ alignSelf: "center", marginTop: 50 }}
            />
            <Text
                style={{
                    fontSize: 18,
                    fontWeight: "700",
                    textAlign: "center",
                    marginTop: 48,
                }}
            >
                Payment Success, Yayy!
            </Text>
            <Text
                style={{
                    marginTop: 11,
                    fontSize: 14,
                    color: "#7a7a7a",
                    width: 270,
                    textAlign: "center",
                    alignSelf: "center",
                }}
            >
                we will send order details and invoice in your contact no. and
                registered email
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    gap: 15,
                    marginTop: 30,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: "#5A6CF3",
                        fontWeight: "700",
                    }}
                >
                    Check Details
                </Text>
                <Image
                    source={require("../assets/image/arrow-right-purple.png")}
                />
            </View>
            <Pressable style={{marginTop: 57, backgroundColor:'#5A6CF3', padding: 18, borderRadius: 16, alignItems:'center'}}>
                <Text style={{fontSize:18, fontWeight:'700', color:'#fff'}}>Download Invoice</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default SuccessScreen;
