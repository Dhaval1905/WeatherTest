import React, { Component } from 'react';
import {Text,View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class ThirdScreen extends Component
{
   
   constructor(){
       super()
       this.state={
           data:[]
       }
   }
   
   componentDidMount(){
    
    const capital=this.props.route.params.capital
   // console.log("Value",capital)
         fetch(`http://api.weatherstack.com/current?access_key=f86544994be9c703b9e05271e0552d24&QUERY=`+capital)
         .then(response=>response.json())
         .then((response)=>{
             this.setState({
                 data:response.current
             })
             //console.log("Value of",this.state.data)
         })
   

        }
   
   
   
    render(){
            //console.log("Capital details",this.state.data.wind_speed)
       
        return(
            <View>
               <Text style={{fontWeight:'bold',fontSize:20,marginLeft:20}}>CapitalName:{this.props.route.params.capital}</Text>

               <Text style={{fontWeight:'bold',fontSize:20,marginLeft:20}}>WindSpeed:{this.state.data.wind_speed}</Text>

               <Text style={{fontWeight:'bold',fontSize:20,marginLeft:20}}>Temprature:{this.state.data.temperature}</Text>

               <Text style={{fontWeight:'bold',fontSize:20,marginLeft:20}}>Precip:{this.state.data.precip}</Text>
            </View>
        )
    }
}