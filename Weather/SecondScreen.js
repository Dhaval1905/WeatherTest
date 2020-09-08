import React, { Component } from "react";
import {Text,View} from 'react-native';
import { FlatList, TouchableOpacity, ScrollView } from "react-native-gesture-handler";
//import SvgUri from 'react-native-svg-uri';
import {SvgUri} from 'react-native-svg'


export default class SecondScreen extends Component
{
    constructor(){
        super()
        this.state={
           
        }
}  
    renderData(item){
        const data=item
        const flag=data.item.flag
        console.log("Value is",data.item.flag)
        return(
            <ScrollView>
            <View>
            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,textAlign:'center',marginLeft:20}}>CountryNAme:{data.item.name}</Text>

            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,textAlign:'center',marginLeft:20}}>Capital:{data.item.capital}</Text>

            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,textAlign:'center',marginLeft:20}}>Population:{data.item.population}</Text>

            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,textAlign:'center',marginLeft:20}}>Lat-Lang:{data.item.latlng}</Text>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ThirdScreen",{
                capital:data.item.capital
            })}>
            <Text style={{marginLeft:320,marginBottom:50,fontSize:20,fontWeight:'bold',paddingBottom:10,borderBottomColor:'black',borderBottomWidth:2}}>Weather
            </Text>
            </TouchableOpacity>

            <SvgUri
                width="20%"
                height="25%"
               uri={flag}
                style={{marginLeft:20,marginTop:20}}
            />

            </View>

           </ScrollView>
        )
    }
    
    
    render(){
        const data2=this.props.route.params.data2
        console.log("value of ",data2)
        return(
            <View>
                <FlatList
                data={data2}
                renderItem={(item)=>this.renderData(item)}
                keyExtractor={item=>item.id}
                />
            </View>
        )
    }
}