import React,{Component}from 'react';
import {View,Text,TouchableOpacity,ToastAndroid} from "react-native";
import {connect} from "react-redux";
import url from "./../url.js"
var {bp, vw, vh} = require('react-native-relative-units')(375);
class PageStatus extends React.Component {
    render() {
      return(
          <View style={{
                  //backgroundColor:"rgba(0,0,0,0.5)",
                  width:vw*90,

                  position:"absolute",
                  bottom:5*vh
              }}>
          <View style={{
              alignItems:"flex-end",
              justifyContent:"center",
              marginTop:20
          }}>
                  <TouchableOpacity  style={{
                      height:48,
                      //backgroundColor:"rgba(255,255,255,0.8)",
                      alignItems:"center",
                      justifyContent:"center",
                      padding:16

                  }}
                            onPress={()=>{ //console.log('http://'+url+'/v1/register')
                                           switch (this.props.regdetails.reg) {
                                               case "reg1":{
                                                   if(this.props.regdetails.name==null||this.props.regdetails.email==null||this.props.regdetails.branch==null||this.props.regdetails.dob_date==null||this.props.regdetails.dob_month==null||this.props.regdetails.dob_year==null)
                                                   {
                                                        alert("Field not complete")
                                                        payload={reg:"reg1"}
                                                   }
                                                   else
                                                   payload={reg:"reg2"};

                                               }
                                                   break;
                                               case "reg2":
                                                    {     if(this.props.regdetails.password==null|| this.props.regdetails.password != this.props.regdetails.password2 )
                                                        {
                                                            alert("Passwords donot match or is empty ")
                                                         payload={reg:"reg2"}
                                                        }
                                                        else {
                                                            ToastAndroid.showWithGravity('Verifying e-mail adress.It may take a minute to receive OTP', ToastAndroid.LONG,ToastAndroid.TOP);
                                                            fetch(url+'/v1/otp', {
                                                                 method: 'POST',
                                                                 body: JSON.stringify({
                                                                         "email":this.props.regdetails.email,
                                                                     }),
                                                                 }).then((res) =>
                                                                     res.json())
                                                                 .then((responseJson) => {
                                                                             console.log(responseJson["status"]);
                                                                             if (responseJson["status"]=="Failed")
                                                                             {
                                                                                 this.props.update("nextbuttonclicked",{reg:"reg1"})
                                                                                 alert("Error sending OTP to the Mail given")


                                                                             }

                                                                             //console.log(responseJson);
                                                                             //console.log(payload);
                                                                    })
                                                                    .catch((error) => {
                                                                  console.error(error);
                                                                })    ;


                                                             payload={reg:"reg3"};

                                                        }
                                                    }
                                                   break;
                                               case "reg3":
                                               {
                                                           if (this.props.regdetails.roll_no==null)
                                                           {
                                                           fetch(url+'/v1/register', {
                                                                method: 'POST',

                                                                body: JSON.stringify({
                                                                   "name":this.props.regdetails.name,
                                                                    "email":this.props.regdetails.email,
                                                                    "roll_no":this.props.regdetails.roll_no,
                                                                    "dobday":this.props.regdetails.dob_date,
                                                                    "dobmonth":this.props.regdetails.dob_month,
                                                                    "dobyear":this.props.regdetails.dob_year,
                                                                    "branch":this.props.regdetails.branch,
                                                                    "password":this.props.regdetails.password,
                                                                    "otp":this.props.regdetails.otp,
                                                                }),
                                                            }).then((res) =>
                                                                res.json())
                                                            .then((responseJson) => {
                                                                console.log(responseJson);
                                                                if (responseJson["status"]== 'otp not correct')
                                                                     ToastAndroid.showWithGravity('Sorry you have entered wrong otp', ToastAndroid.LONG,ToastAndroid.TOP)
                                                                else {
                                                                    this.props.update("nextbuttonclicked",{reg:"reg1"})
                                                                    this.props.nest2("Profile");
                                                                }
                                                               })
                                                               .catch((error) => {
                                                             console.error(error);
                                                           })    ;

                                                       }
                                                       else
                                                       {
                                                           fetch(url+'/v1/register', {
                                                                method: 'POST',

                                                                body: JSON.stringify({
                                                                   "name":this.props.regdetails.name,
                                                                    "email":this.props.regdetails.email,
                                                                    "dobday":this.props.regdetails.dob_date,
                                                                    "dobmonth":this.props.regdetails.dob_month,
                                                                    "dobyear":this.props.regdetails.dob_year,
                                                                    "branch":this.props.regdetails.branch,
                                                                    "password":this.props.regdetails.password,
                                                                    "roll_no":this.props.regdetails.roll_no,
                                                                    "otp":this.props.regdetails.otp
                                                                }),
                                                            }).then((res) =>
                                                                res.json())
                                                            .then((responseJson) => {
                                                                console.log(responseJson)
                                                                if (responseJson["status"]== 'otp not correct')
                                                                     ToastAndroid.showWithGravity('Sorry you have entered wrong otp', ToastAndroid.LONG,ToastAndroid.TOP)
                                                                else {
                                                                    this.props.update("nextbuttonclicked",{reg:"reg1"})
                                                                    this.props.nest2("Profile");
                                                                }
                                                               })
                                                               .catch((error) => {
                                                             console.error(error);
                                                           })    ;
                                                       }
                                                   //a fetchrequest like above and only if ture following statements

                                                   payload={reg:"reg3"};

                                               }
                                                   break;


                                           }
                                          this.props.update("nextbuttonclicked",payload)
                                      }
                                      }  >
                                  <View  style={{
                                      height:36,
                                      alignItems:"center",
                                      justifyContent:"center",
                                      borderRadius:100,
                                      backgroundColor:"rgba(168,168,168,.3)",
                                      padding:16,
                                      borderColor:"#fff",
                                      borderWidth:2

                                  }}>
                                  <Text style={{

                                      fontSize:21,
                                      color:"#fff"
                                  }}>Next</Text>
                                  </View>
                  </TouchableOpacity>
          </View>
          <View style={{
                 // backgroundColor:"#fff",
                // marginBottom:48,
                 height:vh*15,
                 alignSelf:"stretch",
                 justifyContent:"center",
                 alignItems:"center",
                 flexDirection:"row"
              }}>
                     <View style={{
                             height:15,
                             width:15,
                             borderRadius:160,
                             borderWidth:1,
                             borderColor:"#fff",
                             margin:5,
                             backgroundColor: '#fff'
                         }} >
                     </View>
                     <View style={{
                             height:15,
                             width:15,
                             borderRadius:160,
                             borderWidth:1,
                             borderColor:"#fff",
                             margin:5,
                             backgroundColor:((this.props.regdetails.reg == "reg2") ||(this.props.regdetails.reg == "reg3") )? '#fff' : 'transparent',
                         }}>
                     </View>
                     <View style={{
                             height:15,
                             width:15,
                             borderRadius:160,
                             borderWidth:1,
                             borderColor:"#fff",
                             margin:5,
                             backgroundColor:this.props.regdetails.reg == "reg3"  ? '#fff' : 'transparent',
                         }}>
                     </View>

          </View>
      </View>
      );
  }
}

function mapstatetoprops(state){
    return{

        regdetails:state.regdetails
    }
}

function mapDispatchToProps(dispatch){

    return {
      update: (dispatchType,dispatchPayload) => {


           action = { payload: dispatchPayload,type: dispatchType}

        dispatch(action);
      }
    };
}
export default connect(mapstatetoprops,mapDispatchToProps)(PageStatus);
