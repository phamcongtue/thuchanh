import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import { CART } from "../data/cart";

const CartScreen = ({navigation}) => {
    const [count, setCount] = useState(1);
    return (
        <SafeAreaView>
            <View style={{ marginHorizontal: 20 }}>
                <TouchableOpacity
                    style={{
                        width: 44,
                        height: 44,
                        backgroundColor: "#f8f8fb",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 9,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={require("../assets/Arrow1.png")} />
                </TouchableOpacity>
                <Text
                    style={{ marginTop: 35, fontSize: 22, fontWeight: "700" }}
                >
                    Your Cart
                </Text>
                {CART.map((cart, index) => (
                    <View
                        key={index}
                        style={{
                            paddingHorizontal: 11,
                            paddingVertical: 15,
                            backgroundColor: "#f8f8fb",
                            marginBottom: 18,
                            borderRadius: 16,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                gap: 20,
                                alignItems: "center",
                            }}
                        >
                            <Image source={cart.image} />
                            <View style={{}}>
                                <Text
                                    style={{ fontSize: 10, color: "#b1b1b1" }}
                                >
                                    {cart.brand}
                                </Text>
                                <Text style={{ fontSize: 12 }}>
                                    {cart.name}
                                </Text>
                                <Text
                                    style={{ fontSize: 16, color: "#f08f5f" }}
                                >
                                    {cart.price}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 20,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => setCount(count - 1)}
                            >
                                <Image
                                    source={require("../assets/Group162.png")}
                                />
                            </TouchableOpacity>
                            <Text>{count}</Text>
                            <TouchableOpacity
                                onPress={() => setCount(count + 1)}
                            >
                                <Image
                                    source={require("../assets/Group3.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                <View
                    style={{
                        marginTop: 35,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontSize: " 18", fontWeight: "700" }}>
                        Total
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "700",
                            color: "#f08f5f",
                        }}
                    >
                        1,527
                    </Text>
                </View>
                <Pressable
                    style={{
                        padding: 18,
                        backgroundColor: "#f08f5f",
                        marginTop: 38,
                        borderRadius: 16,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: "700",
                        }}
                    >
                        Proceed to checkout
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;
