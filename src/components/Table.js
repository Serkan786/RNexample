import React from 'react';
import { Image, Text, View,ScrollView,FlatList} from "react-native";
import Tabledata from "../../Table.json"
const Table = () => {
    const renderItema=(asd) => {
        return(
            <View style={{padding:10,borderWidth:1,width:120}}>
                <Text numberOfLines={1}>{asd}</Text>
            </View>
        )
    }
        const renderItem=({item,index}) => {
            return(
                <View style={{flexDirection:"row"}}>
                    {renderItema(item.sehir)}
                    {renderItema(item.nüfus)}
                    {renderItema(item.yaş)}
                    {renderItema(item.yaşş)}

                </View>
            )
        }

        const renderHeaderItem=() => {
            return (
                <View style={{flexDirection:"row"}}>
                    {renderItema("İL")}
                    {renderItema("NÜFUS")}
                    {renderItema("0-20 YAŞ")}
                    {renderItema("20-40 YAŞ")}

                </View>
            )
        }

        return(
            <ScrollView style={{flex:1}} horizontal={true}>
                <FlatList data={Tabledata.ht} renderItem={renderItem} ListHeaderComponent={renderHeaderItem}/>
            </ScrollView>

        )

}

export default Table;
