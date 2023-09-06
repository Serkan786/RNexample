import React from 'react';
import { Text, View, Image,SafeAreaView} from 'react-native';
const Header = () => {
    return (

                <View style={{alignItems:"center",flexDirection:"row",justifyContent:"space-between",height:60,backgroundColor:"white",zIndex:1,shadowColor: "#000",shadowOffset: {width: 0, height: 2,}, shadowOpacity: 0.25,
                    shadowRadius: 3.84,elevation: 5,}}>

                    <Image style={{height:35, width:35}} source={require("../../assets/back.png")}/>
                    <View style={{backgroundColor:"#CF161C",width:"30%",height:60,justifyContent:"center",alignItems:"center",top:20,}}>
                        <Text style={{fontSize:20,color:"white",fontWeight: "bold",}}>HABER</Text>
                        <View style={{ borderBottomColor: '#FFFFFF', borderBottomWidth: 3 ,marginTop:-3,width:"60%"}}></View>
                        <Text style={{fontSize:20,color:"white",fontWeight: "500",marginTop:-5}}>T U R K</Text>
                    </View>
                    <Image style={{height: 50, width: 50}} source={require("../../assets/listt.png")}/>

                </View>


    );
};

export default Header;

