import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    styleSheet,
} from 'react-native';
const Done = () => {
    return (

        <ScrollView style={{}}>
            <View style={{padding:20,flex:1}}>
                <Image style={{height:500, width:"100%"}} resizeMode={"cover"} source={require("../../assets/mask.png")}/>
                <Text style={{backgroundColor:"white",width:68,height:30,top:-100,fontWeight:"bold"}}>GÜNDEM</Text>
                <Text style={{backgroundColor:"white",width:340,fontSize:29,top:-70,fontWeight:"bold"}}>Lorem Ipsum is simply dummy text of the printing and industry.</Text>
                <Text style={{fontSize:18}}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</Text>
                <Text style={{marginTop:10}} >07.10.2020 - 14:06 | Güncelleme: 07.10.2020 - 14:13 </Text>
                <View style={{ borderBottomColor:'black',borderBottomWidth: 1,width:'100%',marginTop:5}}></View>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image style={{height:35, width:35,marginTop:15,borderRadius:50,marginRight:10}} resizeMode={"cover"} source={require("../../assets/mask.png")}/>
                    <View style={{flexDirection:"column",marginTop:15 }}>
                        <Text style={{fontWeight:"bold"}}>Messi Gündoğan</Text>
                        <Text style={{}}>mgundogan@cyh.com.tr</Text>
                    </View>
                </View>
                <View style={{ borderBottomColor:'black',borderBottomWidth: 1,width:'100%',marginTop:5}}></View>
                <View style={{flexDirection:"row",}}>
                    <Text style={{fontWeight:"bold",fontSize:50}}>P</Text>
                    <Text style={{fontSize:16,padding:8,marginRight:10}}>hasellus quis iaculis tortor,vitae blandit augue. Aenean dictum venenatis elit nec egestas. Donec rutrum</Text>
                </View>
                <Text style={{fontSize:16,}}>
                    vestibulum dui in eleifend. Nulla vel blandit nulla, ac egestas tortor. Donec fermentum ultrices lacus vel malesuada. Sed interdum efficitur dictum. Nulla sodales velit eu felis maximus sagittis. Fusce libero elit, sodales at felis vel, feugiat laoreet ipsum. Vestibulum eget urna sodales, suscipit nisl nec, bibendum ante. Etiam nec varius enim.
                </Text>
                <Text style={{fontSize:16,marginTop:15}}>
                    Vestibulum nec placerat velit, porttitor pretium dolor. Vestibulum feugiat a nunc quis lobortis. Quisque vel est ut lorem lobortis iaculis. Quisque ut suscipit sapien. Nam egestas dolor euismod augue finibus eleifend. Mauris ut mauris porttitor justo varius commodo eget ut mi.<Text style={{textDecorationLine:"underline",fontWeight:"bold"}}> Vestibulum efficitur lorem </Text> id arcu tincidunt, a accumsa metus consectetur. Sed sagittis elementum mauris vel sollicitudin. Nunc pharetra dapibus ipsum a malesuada.
                </Text>
                <TouchableOpacity onPress={()=>setImageOpen(true)}>
                    <Image
                        style={{height:300, width:"100%",marginVertical:20}}
                        resizeMode={"cover"}
                        source={require("../../assets/eloon.png")}/>
                </TouchableOpacity>
                <Text style={{marginTop:10,fontWeight:"300"}}>The standard chunk of Lorem Ipsum used since the 1500s is repro duced below for those interested.</Text>
                <Text style={{marginTop:15}}>Curabitur cursus ante eget mauris sodales eleifend. Donec commodo dui eget commodo dictum. Vestibulum sit amet hendrerit neque. Duis convallis vel orci eu porttitor. Curabitur suscipit purus sollicitudin urna cursus fringilla. Mauris ullamcorper at arcu tristique consequat. Integer commodo ipsum nec ipsum tincidunt sodales. Vestibulum ac condimentum nulla, et porttitor augue. Sed hendrerit suscipit turpis, nec eleifend diam ultricies eu.</Text>
            </View>
            
        </ScrollView>



    );
};

export default Done;
