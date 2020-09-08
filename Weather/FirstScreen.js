import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {Input,InputGroup,Button} from 'native-base'

export default class FirstScreen extends Component
{
   constructor(){
       super()
       this.state={
           conutryname:'',
           data:[]
       }
   }

   componentDidMount(){
       fetch("https://restcountries.eu/rest/v2/")
       .then((response)=>response.json())
       .then((response)=>{
           this.setState({
               data:response
           })
          // console.log("Response value is",this.state.data)
       })
   }
   
   searchData(){

        const{conutryname}=this.state
       const data2=this.state.data.filter((item)=>item.name.toLowerCase().includes(conutryname.toLocaleLowerCase())).map(({name,capital,population,latlng,flag})=>({name,capital,population,latlng,flag}))

      // console.log("Data2 value is",data2)

       this.props.navigation.navigate("SecondScreen",{
           data2:data2
       })
   }
   
   
   
   
   
    render(){
        return(
            <View>
            <InputGroup>
            <Input
                placeholder="Enter the country Name"
                value={this.state.conutryname}
                onChangeText={(text)=>this.setState({conutryname:text})}
                style={{marginTop:50,marginLeft:20,borderRadius:2,borderWidth:5,justifyContent:'center',textAlign:'center',marginRight:20}}
            />
            </InputGroup>
            <Button Submit onPress={()=>this.searchData()}
            style={{marginLeft:190,marginTop:60}}
            >
            <Text style={{fontSize:20}}>Submit</Text>
            </Button>
           
            </View>
        )
    }
}