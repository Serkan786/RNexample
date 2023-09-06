import { StatusBar } from 'expo-status-bar';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    styleSheet,
    Dimensions, FlatList, Modal,
} from 'react-native';
import React, {useEffect, useState} from "react";
import Header from  "./src/components/Header"
import FooterTab from  "./src/components/FooterTab"
import ComparisonSlider from "react-native-comparison-slider";
import Havadurumu from "./src/components/Havadurumu";
import Docs from "./src/components/Docs";
import MapView from 'react-native-maps';
import Video from "./src/components/Video";
import Twitter from "./src/components/Twitter";
import Table from "./src/components/Table";
import Foto from "./src/components/Foto";
import Ses from "./src/components/Ses";
import Dovız from "./src/components/Dovız";
import Tesla from "./src/components/Tesla";


const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
const App=()=> {
    const [imageOpen , setImageOpen]=useState(false)
    const [index , setIndex]=useState(null)
    const [mataimageOpen , setmataimageOpen]=useState(false)
    const data = [
        { id: 'copy', icon: require("./assets/copy.png"), text: 'Linki kopyala' },
        { id: 'facebook', icon: require("./assets/facebook.png"), text: 'Facebook' },
        { id: 'twitter', icon: require("./assets/twitter.png"), text: 'X' },
        { id: 'whatsapp', icon: require("./assets/whatsapp.png"), text: 'whatsapp' },
        { id: 'youtube', icon: require("./assets/youtube.png"), text: 'Youtube' },
        { id: 'flipboard', icon: require("./assets/flipboard.png"), text: 'Flipboard' },
        { id: 'email', icon: require("./assets/email.png"), text: 'Email' },
    ];

    const mata=[
        {id: 'eloon',  icon: require("./assets/eloon.png")},
        { id: 'elon', icon: require("./assets/elon.jpg")},
        { id: 'mask', icon: require("./assets/mask.png")},
        { id: 'muskk', icon: require("./assets/muskk.png")},
        { id: 'peakpx', icon: require("./assets/peakpx.jpg")},
    ]
    const [abc, setAbc]= useState(true)

    useEffect(() => {
        return () => {
            setAbc(false);
        }
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ width: windowWidth / 5, height: 60, justifyContent: "center", alignItems: "center" }}>
            <Image style={{ height: 35, width: 35 }} source={item.icon} resizeMode="cover" />
            <Text style={{ fontSize: 10 }}>{item.text}</Text>
        </TouchableOpacity>
    );
    const renderItem2 = ({ item }) => (
        <TouchableOpacity style={{ width: windowWidth / 5, height: 60, justifyContent: "center", alignItems: "center" }}>
            <Image style={{ height: 35, width: 35 }} source={item.icon} resizeMode="cover" />
            <Text style={{ fontSize: 10 }}>{item.text}</Text>
        </TouchableOpacity>
    );
  return (
      <SafeAreaView style={{flex:1}}>
          <Header/>

          <ScrollView style={{}} overScrollMode="never">
              <View style={{padding:20,flex:1}}>
                  <Image style={{height:500, width:"100%"}} resizeMode={"cover"} source={require("./assets/mask.png")}/>
                      <Text style={{backgroundColor:"white",width:68,height:30,top:-100,fontWeight:"bold"}}>GÜNDEM</Text>
                        <Text style={{backgroundColor:"white",width:"95%",fontSize:29,top:-70,fontWeight:"bold"}}>Lorem Ipsum is simply dummy text of the printing and industry.</Text>
                  <Text style={{fontSize:18}}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</Text>
                  <Text style={{marginTop:10}} >07.10.2020 - 14:06 | Güncelleme: 07.10.2020 - 14:13 </Text>
                  <View style={{ borderBottomColor:'black',borderBottomWidth: 1,width:'100%',marginTop:5}}></View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                      <Image style={{height:35, width:35,marginTop:15,borderRadius:50,marginRight:10}} resizeMode={"cover"} source={require("./assets/mask.png")}/>
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

                <TouchableOpacity onPress={()=>{
                    setImageOpen(true)
                    setIndex(0);
                }}>
                    <Image
                        style={{height:300, width:"100%",marginVertical:20}}
                        resizeMode={"cover"}
                        source={require("./assets/eloon.png")}/>
                </TouchableOpacity>
                  <Text style={{marginTop:10,fontWeight:"300"}}>The standard chunk of Lorem Ipsum used since the 1500s is repro duced below for those interested.</Text>
                  <Text style={{marginTop:15}}>Curabitur cursus ante eget mauris sodales eleifend. Donec commodo dui eget commodo dictum. Vestibulum sit amet hendrerit neque. Duis convallis vel orci eu porttitor. Curabitur suscipit purus sollicitudin urna cursus fringilla. Mauris ullamcorper at arcu tristique consequat. Integer commodo ipsum nec ipsum tincidunt sodales. Vestibulum ac condimentum nulla, et porttitor augue. Sed hendrerit suscipit turpis, nec eleifend diam ultricies eu.</Text>
                  <Text style={{fontWeight:"bold",fontSize:80}}>"</Text>
                  <Text style={{fontWeight:"bold",fontSize:24, marginTop:-40}}>Pellentesque sed ipsum sodales turpis aliquet porttitor in quis eros. Phasellus placerat risus nisl, ac aliquet felis tincidunt et.</Text>
                  <Text style={{fontWeight:"300"}}>Ut at iaculis ante. Nunc nibh nulla</Text>
                  <Text style={{marginTop:16}}>Curabitur cursus ante eget mauris sodales eleifend. Donec commodo dui eget commodo dictum. Vestibulum sit amet hendrerit neque. Duis convallis vel orci eu porttitor. Curabitur suscipit purus sollicitudin urna cursus fringilla. Mauris ullamcorper at arcu tristique consequat. Integer commodo ipsum nec ipsum tincidunt sodales. Vestibulum ac condimentum nulla, et porttitor augue. Sed hendrerit suscipit turpis, nec eleifend diam ultricies eu.</Text>
                  <Image style={{width:"100%",height:500,marginTop:15}} resizeMode={"cover"} source={require("./assets/peakpx.jpg")}/>
                  <Text style={{marginTop:16,fontSize:16}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                  <ComparisonSlider

                      imageWidth={350}
                      imageHeight={300}
                      initialPosition={50}
                      leftImage={require("./assets/mask.png")}
                      rightImage={require("./assets/eloon.png")}
                  />
                  <Text style={{marginTop:16,fontSize:16,}}>Curabitur cursus ante eget mauris sodales eleifend. Donec commodo dui eget commodo dictum. Vestibulum sit amet hendrerit neque. Duis convallis vel orci eu porttitor. Curabitur suscipit purus sollicitudin urna cursus fringilla. Mauris ullamcorper at arcu tristique consequat. Integer commodo ipsum nec ipsum tincidunt sodales. Vestibulum ac condimentum nulla, et porttitor augue. Sed hendrerit suscipit turpis, nec eleifend diam ultricies eu.</Text>
                  <View style={{flexDirection:"row",marginTop:15,backgroundColor:"#DEDEDE",}}>
                      <Image style={{height:130, width:"40%"}} resizeMode={"cover"} source={require("./assets/peakpx.jpg")}/>
                      <Text style={{width:180,fontSize:15,marginTop:20,marginLeft:20,}}>Quisque vitae odio nec lectus vulputate pharetra. Quisque a condimentum donec dolor.</Text>
                  </View>
                  <Text style={{fontSize:16,marginTop:15}}>
                      vestibulum dui in eleifend. Nulla vel blandit nulla, ac egestas tortor. Donec fermentum ultrices lacus vel malesuada. Sed interdum efficitur dictum. Nulla sodales velit eu felis maximus sagittis. Fusce libero elit, sodales at felis vel, feugiat laoreet ipsum. Vestibulum eget urna sodales, suscipit nisl nec, bibendum ante. Etiam nec varius enim.
                  </Text>
                  <Text style={{fontSize:16,marginTop:15}}>
                      Vestibulum  nec placerat velit, porttitor pretium dolor. Vestibulum feugiat a nunc quis lobortis. Quisque vel est ut lorem lobortis iaculis. Quisque ut suscipit sapien. Nam egestas dolor euismod augue finibus eleifend. Mauris ut mauris porttitor justo varius commodo eget ut mi.<Text style={{textDecorationLine:"underline",fontWeight:"bold"}}> Vestibulum efficitur lorem </Text> id arcu tincidunt, a accumsa metus consectetur. Sed sagittis elementum mauris vel sollicitudin. Nunc pharetra dapibus ipsum a malesuada.
                  </Text>
                  <MapView
                      initialRegion={{
                          latitude: 37.78825,
                          longitude: -122.4324,
                          latitudeDelta: 0.0922,
                          longitudeDelta: 0.0421,
                      }}
                      style={{width:'100%' , height:200}}
                  />
                   <Text style={{fontSize:16,marginTop:15}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                  <View>
                      <Image
                          style={{height:300, width:"100%"}}
                          resizeMode={"cover"}
                          source={require("./assets/foto5.jpg")}/>
                      <TouchableOpacity style onPress={()=> {
                          setImageOpen(true);
                          setIndex(1);
                      }}>
                          <Text style={{backgroundColor:"white",width:68,height:30,textAlign:"center",marginTop:-100,}}>Foto</Text>
                      </TouchableOpacity>
                  </View>
                  <Text style={{fontSize:16,}}>
                      vestibulum dui in eleifend. Nulla vel blandit nulla, ac egestas tortor. Donec fermentum ultrices lacus vel malesuada. Sed interdum efficitur dictum. Nulla sodales velit eu felis maximus sagittis. Fusce libero elit, sodales at felis vel, feugiat laoreet ipsum. Vestibulum eget urna sodales, suscipit nisl nec, bibendum ante. Etiam nec varius enim.
                  </Text>
                  <Text style={{fontSize:16,marginTop:15}}>
                      Vestibulum nec placerat velit, porttitor pretium dolor. Vestibulum feugiat a nunc quis lobortis. Quisque vel est ut lorem lobortis iaculis. Quisque ut suscipit sapien. Nam egestas dolor euismod augue finibus eleifend. Mauris ut mauris porttitor justo varius commodo eget ut mi.<Text style={{textDecorationLine:"underline",fontWeight:"bold"}}> Vestibulum efficitur lorem </Text> id arcu tincidunt, a accumsa metus consectetur. Sed sagittis elementum mauris vel sollicitudin. Nunc pharetra dapibus ipsum a malesuada.
                  </Text>
                   <Havadurumu/>
                  {/*<Text style={{fontSize:16,marginTop:15}}>Curabitur cursus ante eget mauris sodales eleifend. Donec commodo dui eget commodo dictum. Vestibulum sit amet hendrerit neque. Duis convallis vel orci eu porttitor. Curabitur suscipit purus sollicitudin urna cursus fringilla. Mauris ullamcorper at arcu tristique consequat. Integer commodo ipsum nec ipsum tincidunt sodales. Vestibulum ac condimentum nulla, et porttitor augue. Sed hendrerit suscipit turpis, nec eleifend diam ultricies eu.</Text>*/}
                  {/*<Video item={abc}/>*/}
                  <Text style={{fontSize:16,marginTop:15}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                  <View style={{borderColor:"#DEDEDE",borderWidth:5,padding:5,marginTop:15}}>
                      <Twitter/>
                      <Text style={{fontSize:16,marginTop:15}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing...</Text>
                      <Image style={{height:250, width:"100%",borderRadius:15,marginTop:15}} resizeMode={"cover"} source={require("./assets/fuze.png")}/>
                      <View style={{flexDirection: 'row', alignItems: 'center',padding:10}}>
                          <Image source={require('./assets/message.png')} style={[styles.icon, {marginRight:50,height: 30, width: 30,}]}/>
                          <Image source={require('./assets/alıntı.png')} style={[styles.icon, { marginRight:50,height: 40, width: 40,}]}/>
                          <Image source={require('./assets/heart.png')} style={[styles.icon, {marginRight:50,height: 40, width: 40,}]}/>
                          <Image source={require('./assets/download.png')} style={[styles.icon, {marginRight:50,height: 40, width: 40, }]}/>
                      </View>
                  </View>
                  <Text style={{fontSize:16,marginTop:15}}>vestibulum dui in eleifend. Nulla vel blandit nulla, ac egestas tortor. Donec fermentum ultrices lacus vel malesuada. Sed interdum efficitur dictum. Nulla sodales velit eu felis maximus sagittis. Fusce libero elit, sodales at felis vel, feugiat laoreet ipsum. Vestibulum eget urna sodales, suscipit nisl nec, bibendum ante. Etiam nec varius enim.</Text>
              <Table/>
                  <Text style={{fontSize:16,marginTop:15}}>
                      vestibulum dui in eleifend. Nulla vel blandit nulla, ac egestas tortor. Donec fermentum ultrices lacus vel malesuada. Sed interdum efficitur dictum. Nulla sodales velit eu felis maximus sagittis. Fusce libero elit, sodales at felis vel, feugiat laoreet ipsum. Vestibulum eget urna sodales, suscipit nisl nec, bibendum ante. Etiam nec varius enim.
                  </Text>
                  <Text style={{fontSize:16,marginTop:15}}>
                      Vestibulum  nec placerat velit, porttitor pretium dolor. Vestibulum feugiat a nunc quis lobortis. Quisque vel est ut lorem lobortis iaculis. Quisque ut suscipit sapien. Nam egestas dolor euismod augue finibus eleifend. Mauris ut mauris porttitor justo varius commodo eget ut mi.<Text style={{textDecorationLine:"underline",fontWeight:"bold"}}> Vestibulum efficitur lorem </Text> id arcu tincidunt, a accumsa metus consectetur. Sed sagittis elementum mauris vel sollicitudin. Nunc pharetra dapibus ipsum a malesuada.
                  </Text>
                  <Foto/>
                  <View style={{}}>
                          <Image source={require("./assets/mercek.png")} style={[styles.icon, {backgroundColor:"white",width:50,height:50,textAlign:"center",marginTop:-60,marginLeft:300}]}/>
                  </View>
                  <Text style={{fontSize:15}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle</Text>
                  <View style={{borderColor:"#333333",width:10,borderWidth:5,marginTop:20}}></View>
                  <Text style={{marginLeft:20,marginTop:-20}}>The Tesla boss made the post after Vernon Usworth declared his mini-submarine idea a “PR stunt”</Text>
                  <View style={{borderColor:"#333333",width:10,borderWidth:5,marginTop:20}}></View>
                  <Text style={{marginLeft:20,marginTop:-20}}>Mr Unsworth is seeking $US75,000 in damages from the billionaire</Text>
                  <View style={{borderColor:"#333333",width:10,borderWidth:5,marginTop:20}}></View>
                  <Text style={{marginLeft:20,marginTop:-20}}>Mr Musk wanted the judge to dismiss his case as he believed the insult was protected from legal action</Text>
                  <Text style={{fontSize:16,marginTop:15}}> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                  {/*<Ses/>*/}
                  <View style={{alignItems:"center"}}>
                      <Image style={{height:100, width:100,marginTop:30,borderRadius:50,}} resizeMode={"cover"} source={require("./assets/mask.png")}/>
                      <Text style={{fontWeight:"bold",fontSize:80,marginRight:70}}>"</Text>
                      <Text style={{fontWeight:"bold",fontSize:24,marginTop:-40}}>Pellentesque sed ipsum sodales turpis aliquet porttitor in quis eros. Phasellus placerat risus nisl, ac aliquet felis tincidunt et.</Text>
                      <Text style={{fontWeight:300,}}>Ut at iaculis ante. Nunc nibh nulla</Text>
                      <Text style={{fontWeight:"bold",fontSize:80,marginLeft:100}}>"</Text>
                  </View>
                  <View style={{marginTop:-60}}>
                      <Text style={{fontSize:16,marginTop:15}}>
                          vestibulum dui in eleifend. Nulla vel blandit nulla, ac egestas tortor. Donec fermentum ultrices lacus vel malesuada. Sed interdum efficitur dictum. Nulla sodales velit eu felis maximus sagittis. Fusce libero elit, sodales at felis vel, feugiat laoreet ipsum. Vestibulum eget urna sodales, suscipit nisl nec, bibendum ante. Etiam nec varius enim.
                      </Text>
                      <Text style={{fontSize:16,marginTop:15}}>
                          Vestibulum  nec placerat velit, porttitor pretium dolor. Vestibulum feugiat a nunc quis lobortis. Quisque vel est ut lorem lobortis iaculis. Quisque ut suscipit sapien. Nam egestas dolor euismod augue finibus eleifend. Mauris ut mauris porttitor justo varius commodo eget ut mi.<Text style={{textDecorationLine:"underline",fontWeight:"bold"}}> Vestibulum efficitur lorem </Text> id arcu tincidunt, a accumsa metus consectetur. Sed sagittis elementum mauris vel sollicitudin. Nunc pharetra dapibus ipsum a malesuada.
                      </Text>
                  </View>
                  <View style={{flexDirection:"row"}}>
                      <View style={{marginTop:15,}}>
                          <Image style={{height:170, width:"170",marginRight:10}} resizeMode={"cover"} source={require("./assets/peakpx.jpg")}/>
                          <Text style={{width:175,fontSize:14,marginTop:20,}}>Quisque vitae odio nec lectus vulputate pharetra. Quisque a condimentum donec dolor.</Text>
                      </View>
                      <View style={{marginTop:15,}}>
                          <Image style={{height:170, width:"170",marginLeft:20}} resizeMode={"cover"} source={require("./assets/foto5.jpg")}/>
                          <Text style={{width:175,fontSize:14,marginTop:20,marginLeft:20}}>Quisque vitae odio nec lectus vulputate pharetra. Quisque a condimentum donec dolor.</Text>
                      </View>
                  </View>
                  <Text style={{fontSize:17,marginTop:15}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. </Text>
                  <Dovız/>
                  <Tesla/>
                  <Text style={{fontSize:14,marginTop:15}}>“Günün manşetlerini ve en çok okunan haberlerini her sabah e-postanızdan takip etmek için bültene üye olun.”</Text>
                   <View style={{borderColor:"#F1F1F1",borderWidth:15,marginTop:10,backgroundColor: "#F1F1F1",flexDirection:"row"}}><Text style={{color:"#666666",marginTop:5}}>E-posta adresini yazınız</Text><Text style={{backgroundColor:"#FFFFFF",marginLeft:100,fontSize:14,height: 40, width: 80, textAlign: "center", lineHeight: 40,marginTop:-5,fontWeight:"bold"}}>KAYDOL</Text></View>
                    <View style={{borderColor: "#F1F1F1", borderWidth:30,marginTop:20,backgroundColor: "#F1F1F1"}}><Text style={{fontWeight:"bold",marginTop:-20}}>YORUMLAR</Text><Text>Yorum kurallarını okumak için <Text style={{fontWeight:"bold"}}>tıklayınız!</Text></Text></View>
                  <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}></View>
                  <View style={{borderColor:"#F1F1F1",borderWidth:30,flexDirection:"row", }}><Text style={{backgroundColor:"#FFFFFF",marginRight:50,textAlign:"center",lineHeight:50,fontSize:12,marginLeft:10,color:"#666666"}}>Sende düşüncelerini paylaş</Text><Text style={{backgroundColor:"#F1F1F1",fontSize:14,height: 40, width: 80, textAlign: "center", lineHeight: 40,marginTop:3,fontWeight:"bold"}}>GÖNDER</Text></View>
                  <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}></View>

                      <View style={{borderColor:"#F1F1F1",borderWidth:120,flexDirection:"row",marginRight: 50, width:"100%", height: 120, justifyContent: "center", alignItems: "center" }}><Text style={{backgroundColor:"#FFFFFF",marginRight:220,textAlign:"center",borderRadius: 60, width: 60, height: 60, lineHeight: 60,marginTop:-90}}>KG</Text></View>
                      <View style={{marginLeft:130,marginTop:-195}}>
                          <Text style={{fontWeight:"bold"}}>Kenan Gündoğan</Text>
                          <Text style={{fontWeight:300}}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                      </View>
                  <View style={{marginTop:20}}>
                      <View style={{borderColor:"#F1F1F1",borderWidth:120,flexDirection:"row",marginRight: 50, width:"100%", height: 120, justifyContent: "center", alignItems: "center" }}><Text style={{backgroundColor:"#FFFFFF",marginRight:220,textAlign:"center",borderRadius: 60, width: 60, height: 60, lineHeight: 60,marginTop:-90}}>KG</Text></View>
                      <View style={{marginLeft:130,marginTop:-195}}>
                          <Text style={{fontWeight:"bold"}}>Amanda Samnit</Text>
                          <Text style={{fontWeight:300}}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                      </View>
                  </View>
                  <View style={{alignItems:"center",marginTop:50}}>
                      <Text style={{fontSize:16,fontWeight:"bold",backgroundColor:"#FFFFFF",width:"70%",height:100,textAlign:"center",lineHeight:80}}>TÜM YORUMLARI GÖSTER</Text>
                  </View>
                  <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1,marginTop:15,}}></View>
                  <Text style={{fontWeight:"bold",fontSize:20,marginTop:15}}>BAKMADAN GEÇME</Text>
                  <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1,marginTop:15}}></View>
                  <View style={{flexDirection:"row",marginTop:15}}>
                      <Image style={{height:100, width:"45%"}} resizeMode={"cover"} source={require("./assets/mask.png")}/>
                      <Text style={{width:180,fontSize:15,marginTop:20,marginLeft:20,}}>Lorem Ipsum is simply dummy text of the printing and typesetting.</Text>
                  </View>
                  <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1,marginTop:15}}></View>
                  <View style={{flexDirection:"row",marginTop:15}}>
                      <Image style={{height:100, width:"45%"}} resizeMode={"cover"} source={require("./assets/foto5.jpg")}/>
                      <Text style={{width:180,fontSize:15,marginTop:20,marginLeft:20,}}>Kerin has been the industry’s standard dummy text ever since the</Text>
                  </View>
                  <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1,marginTop:15}}></View>
                  <View style={{flexDirection:"row",marginTop:15}}>
                      <Image style={{height:100, width:"45%"}} resizeMode={"cover"} source={require("./assets/eloon.png")}/>
                      <Text style={{width:180,fontSize:15,marginTop:20,marginLeft:20,}}>It is a long established fact that a reader will be distracted by the readable content</Text>
                  </View>
                  <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1,marginTop:15}}></View>
                  <View style={{flexDirection:"row",marginTop:15}}>
                      <Image style={{height:100, width:"45%"}} resizeMode={"cover"} source={require("./assets/peakpx.jpg")}/>
                      <Text style={{width:180,fontSize:15,marginTop:20,marginLeft:20,}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
                  </View>
                  <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1,marginTop:15}}></View>

              </View>
          </ScrollView>

          {
              imageOpen===true?(
              <SafeAreaView style={{width:'100%', height:'100%' , position:'absolute',zIndex:100, backgroundColor:'white'}}>
                  <TouchableOpacity
                      onPress={()=>setImageOpen(false)}
                      style={{width:20,height:20,borderRadius:25,alignItems:'center',justifyContent:'center',backgroundColor:'white',position:'absolute',top:50,right:50, zIndex:10}}><Text style={{width:'100%',height:'100%'}}>X</Text></TouchableOpacity>
                  <Image style={{height:'75%', width:"100%"}} resizeMode={"cover"} source={require("./assets/eloon.png")}/>
                  <Text style={{marginTop:10,fontWeight:"300"}}>The standard chunk of Lorem Ipsum used since the 1500s is repro duced below for those interested.</Text>
                  <FlatList style={{marginTop:70}}
                      data={index === 0 ? data : mata}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      horizontal
                  />
              </SafeAreaView>


              ): null
          }
          {
              mataimageOpen===true?(
                  <SafeAreaView style={{width:'100%', height:'100%' , position:'absolute',zIndex:100, backgroundColor:'white'}}>
                      <TouchableOpacity
                          onPress={()=>setmataimageOpen(false)}
                          style={{width:20,height:20,borderRadius:25,alignItems:'center',justifyContent:'center',backgroundColor:'white',position:'absolute',top:50,right:50, zIndex:10}}><Text style={{width:'100%',height:'100%'}}>X</Text></TouchableOpacity>
                      <Image style={{height:'75%', width:"100%"}} resizeMode={"cover"} source={require("./assets/eloon.png")}/>
                      <Image style={{height:'75%', width:"100%"}} resizeMode={"cover"} source={require("./assets/muskk.png")}/>
                      <Image style={{height:'75%', width:"100%"}} resizeMode={"cover"} source={require("./assets/eloon.png")}/>
                      <Image style={{height:'75%', width:"100%"}} resizeMode={"cover"} source={require("./assets/eloon.png")}/>
                      <Image style={{height:'75%', width:"100%"}} resizeMode={"cover"} source={require("./assets/mask.png")}/>
                      <Text style={{marginTop:10,fontWeight:"300"}}>The standard chunk of Lorem Ipsum used since the 1500s is repro duced below for those interested.</Text>
                      <FlatList style={{marginTop:70}}
                                data={mata}
                                renderItem={renderItem2}
                                keyExtractor={item => item.id}
                                horizontal

                      />
                  </SafeAreaView>


              ): null
          }


          <FooterTab/>


      </SafeAreaView>
  )
}
const styles=StyleSheet.create({

})


export default App
