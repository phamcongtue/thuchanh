import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    Pressable,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PaymentScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View>
                <View
                    style={{
                        height: 253,
                        paddingHorizontal: 20,
                        elevation: 20,
                        shadowColor: "#171717",
                        borderBottomEndRadius: 30,
                        borderBottomLeftRadius: 30,
                        borderColor: "#ccc",
                        position: "relative",
                        borderEndWidth: 2,
                        borderLeftWidth: 2,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 44,
                            height: 44,
                            backgroundColor: "#f8f8fb",
                            borderRadius: 9,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require("../assets/image/back-green.png")}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            marginTop: 26,
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 22, fontWeight: "700" }}>
                            Checkout 💳
                        </Text>
                        <View style={{}}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "700",
                                    color: "#25D482",
                                    textAlign: "right",
                                    marginBottom: 5,
                                }}
                            >
                                ₹ 1,527
                            </Text>
                            <Text style={{ fontSize: 14, color: "#b1b1b1" }}>
                                Including GST (18%)
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        width: windowWidth * 0.9,
                        height: windowHeight * 0.08,
                        backgroundColor: "#f8f8fb",
                        marginHorizontal: 20,
                        borderRadius: 16,
                        flexDirection: "row",
                        position: "absolute",
                        bottom: -30,
                    }}
                >
                    <View
                        style={{
                            width: "50%",
                            height: "100%",
                            backgroundColor: "#25d482",
                            borderRadius: 16,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            source={require("../assets/image/credit-card.png")}
                        />
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "700",
                                color: "#fff",
                                marginLeft: 8,
                            }}
                        >
                            Credit card
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "50%",
                            height: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            source={require("../assets/image/apple-pay.png")}
                        />
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "700",
                                color: "#3a3c3f",
                                marginLeft: 8,
                            }}
                        >
                            Apple Pay
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 62 }}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "700" }}>
                        Card number
                    </Text>
                    <View
                        style={{
                            borderRadius: 16,
                            backgroundColor: "#f8f8fb",
                            height: 56,
                            marginTop: 3,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 20,
                        }}
                    >
                        <TextInput style={{ width: "70%", fontSize: 16 }} />
                        <Image
                            source={require("../assets/image/master-card.png")}
                        />
                        <Image source={require("../assets/image/card.png")} />
                    </View>
                </View>
                <View style={{ marginTop: 24 }}>
                    <Text style={{ fontSize: 16, fontWeight: "700" }}>
                        Cardholder name
                    </Text>
                    <View
                        style={{
                            borderRadius: 16,
                            backgroundColor: "#f8f8fb",
                            height: 56,
                            marginTop: 3,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 20,
                        }}
                    >
                        <TextInput style={{ width: "100%", fontSize: 16 }} />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 24,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "700" }}>
                            Expiry date
                        </Text>
                        <View
                            style={{
                                borderRadius: 16,
                                backgroundColor: "#f8f8fb",
                                height: 56,
                                marginTop: 3,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: 20,
                            }}
                        >
                            <TextInput style={{ width: "41%" }} />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "700" }}>
                            CVV / CVC
                        </Text>
                        <View
                            style={{
                                borderRadius: 16,
                                backgroundColor: "#f8f8fb",
                                height: 56,
                                marginTop: 3,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: 20,
                            }}
                        >
                            <TextInput style={{ width: "41%" }} />
                        </View>
                    </View>
                </View>
            </View>
            <Text
                style={{
                    fontSize: 12,
                    lineHeight: 15,
                    width: 250,
                    color: "#b1b1b1",
                    marginTop: 40,
                    textAlign: "center",
                    alignSelf: "center",
                }}
            >
                We will send you an order details to your email after the
                successfull payment
            </Text>
            <Pressable
                style={{
                    backgroundColor: "#25d482",
                    borderRadius: 16,
                    marginHorizontal: 20,
                    flexDirection: "row",
                    gap: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 18,
                    marginTop: 35,
                }}
            >
                <Image source={require("../assets/image/lock.png")} />
                <Text
                    style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}
                >
                    Pay for the order
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default PaymentScreen;
