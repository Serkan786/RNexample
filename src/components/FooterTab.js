import React from 'react';
import { Text, View, Image,TouchableOpacity,Dimensions} from 'react-native';

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
const FooterTab = () => {
    return (
        <View style={{flexDirection: "row" ,backgroundColor:"white",justifyContent:"flex-start", height: 60,alignItems:"center"}}>
           <TouchableOpacity onPress={()=>{}}style={{width:windowWidth/5,height:60,justifyContent:"center",alignItems:"center"}}>
               <Image style={{height:35, width:35}} source={require("../../assets/home.png")}
                      resizeMode={"cover"} style={{width:20, height: 20}}></Image>
                        <Text style={{fontSize: 10}}>Ana Sayfa</Text>
           </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}style={{width:windowWidth/5,height:60,justifyContent:"center",alignItems:"center"}}>
                <Image style={{height:35, width:35}} source={require("../../assets/trending-topic.png")}
                       resizeMode={"cover"} style={{width:20, height: 20}}></Image>
                <Text style={{fontSize: 10}}>Trendler</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}style={{width:windowWidth/5,height:60,justifyContent:"center",alignItems:"center"}}>
                <Image style={{height:35, width:35}} source={require("../../assets/live.png")}
                       resizeMode={"cover"} style={{width:20, height: 20}}></Image>
                <Text style={{fontSize: 10}}>Canlı Yayın</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}style={{width:windowWidth/5,height:60,justifyContent:"center",alignItems:"center"}}>
                <Image style={{height:35, width:35}} source={require("../../assets/add.png")}
                       resizeMode={"cover"} style={{width:20, height: 20}}></Image>
                <Text style={{fontSize: 10}}>Takip Ettiklerim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}style={{width:windowWidth/5,height:60,justifyContent:"center",alignItems:"center"}}>
                <Image style={{height:35, width:35}} source={require("../../assets/notification.png")}
                       resizeMode={"cover"} style={{width:20, height: 20}}></Image>
                <Text style={{fontSize: 10}}>Bildirimler</Text>
            </TouchableOpacity>


        </View>

    );
};

export default FooterTab;
