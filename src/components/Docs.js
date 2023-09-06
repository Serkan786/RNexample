import React, { useState } from 'react';
import { Modal, Text, Pressable, View, Image, StyleSheet } from 'react-native';

const Docs = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>
                <View style={{flex: 1,justifyContent: 'center',alignItems: 'center', backgroundColor: 'white',}}>
                    <Pressable style={{width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', position: 'absolute', top: 50, right: 50, zIndex: 10,}}
                               onPress={() => setModalVisible(false)}>
                        <Text style={{ fontSize: 18 }}>X</Text>
                    </Pressable>
                    <Image style={{ height: '75%', width: '100%' }} resizeMode="cover" source={require("../../assets/eloon.png")} />
                </View>
            </Modal>
            <Pressable style={{ alignItems: 'center',}}
                       onPress={() => setModalVisible(true)}>
                <Text style={{backgroundColor:"white",width:68,height:30,textAlign:"center",}}>Foto</Text>

            </Pressable>
            <Image style={{height: 300, width: '100%',}} source={require("../../assets/eloon.png")} />
        </View>

    );
};

export default Docs;
