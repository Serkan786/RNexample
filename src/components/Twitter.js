import React, { useState } from "react";
import { Image, Text, View } from "react-native";

const Twitter = () => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={{height: 35, width: 35, marginTop: 15, borderRadius: 50, marginRight: 10,}} resizeMode={"cover"} source={require("../../assets/mask.png")}/>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flexDirection: "column", marginTop: 15 }}>
                    <Text style={{ fontWeight: "bold" }}>
                        Messi Gündoğan<Text style={{ fontWeight: "300" }}>-@mssgndgn</Text>
                    </Text>
                    <Text style={{}}>1 day ago</Text>
                    <Image style={{height: 35, width: 35,marginLeft:250,marginTop:-40}} resizeMode={"cover"} source={require("../../assets/twitter.png")}/>

                </View>
            </View>
        </View>

    );
};

export default Twitter;
