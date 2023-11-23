import {
    View,
    Text,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ marginHorizontal: 20 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 16, width: 100 }}>
                        <Text style={{ fontSize: 22, fontWeight: "700" }}>
                            Hello
                        </Text>{" "}
                        👋🏻 TueProLayer
                    </Text>
                    <Image
                        source={require("../assets/image/user1.png")}
                        style={{ borderRadius: 15 }}
                    />
                </View>
                <Text style={{ fontSize: 18, marginTop: 30 }}>
                    Your Insights
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        gap: 20,
                        marginTop: 30,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#f8f8fb",
                            width: 180,
                            paddingVertical: 50,
                            borderRadius: 16,
                        }}
                        onPress={() => navigation.push("Scan")}
                    >
                        <View style={{}}>
                            <Image
                                source={require("../assets/image/scan.png")}
                            />
                        </View>
                        <Text style={{ fontSize: 16, marginTop: 9 }}>
                            Scan new
                        </Text>
                        <Text
                            style={{
                                fontSize: 10,
                                color: "#b7b7c1",
                                marginTop: 4,
                            }}
                        >
                            Scanned 483
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#f8f8fb",
                            width: 180,
                            paddingVertical: 50,
                            borderRadius: 16,
                        }}
                    >
                        <View
                            style={{
                                padding: 15,
                                backgroundColor: "#F6E3DB",
                                borderRadius: 16,
                            }}
                        >
                            <Image
                                source={require("../assets/image/frame.png")}
                            />
                        </View>
                        <Text style={{ fontSize: 16, marginTop: 9 }}>
                            Counterfeits
                        </Text>
                        <Text
                            style={{
                                fontSize: 10,
                                color: "#b7b7c1",
                                marginTop: 4,
                            }}
                        >
                            Counterfeited 32
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#f8f8fb",
                            width: 180,
                            paddingVertical: 50,
                            borderRadius: 16,
                        }}
                        onPress={() => navigation.push("SuccessScreen")}
                    >
                        <View
                            style={{
                                padding: 15,
                                backgroundColor: "#D8F3F1",
                                borderRadius: 16,
                            }}
                        >
                            <Image
                                source={require("../assets/image/success.png")}
                            />
                        </View>
                        <Text style={{ fontSize: 16, marginTop: 9 }}>
                            Success
                        </Text>
                        <Text
                            style={{
                                fontSize: 10,
                                color: "#b7b7c1",
                                marginTop: 4,
                            }}
                        >
                            Checkouts 8
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#f8f8fb",
                            width: 180,
                            paddingVertical: 50,
                            borderRadius: 16,
                        }}
                    >
                        <View
                            style={{
                                padding: 15,
                                backgroundColor: "#D0EDFB",
                                borderRadius: 16,
                            }}
                        >
                            <Image
                                source={require("../assets/image/date.png")}
                            />
                        </View>
                        <Text style={{ fontSize: 16, marginTop: 9 }}>
                            Directory
                        </Text>
                        <Text
                            style={{
                                fontSize: 10,
                                color: "#b7b7c1",
                                marginTop: 4,
                            }}
                        >
                            History 26
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 30,
                    }}
                >
                    <Text style={{ fontSize: 18 }}>Explore More</Text>
                    <Image
                        source={require("../assets/image/arrow-right.png")}
                    />
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 30 }}
                >
                    <View style={{ flexDirection: "row", gap: 30 }}>
                        <TouchableOpacity>
                            <Image
                                source={require("../assets/image/product1.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require("../assets/image/product2.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require("../assets/image/product3.png")}
                                style={{ width: 127, height: 125 }}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
