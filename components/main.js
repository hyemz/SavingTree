import React, { Component } from 'react';
<<<<<<< HEAD
import {AppRegistry, View, StyleSheet, Text, TouchableOpacity, Image,Dimensions,Alert,Button, Linking, ScrollView } from 'react-native';
=======
import {AppRegistry, View, StyleSheet, Text, TouchableOpacity, Image,Dimensions,Alert,Button} from 'react-native';
>>>>>>> 857aa26a0a48727b793d75f61d494570e5f757b1
import Swiper from "react-native-swiper";
import SlidingView from 'rn-sliding-view';
import ProgressBarAnimated from "react-native-progress-bar-animated";
import ViewPager from "@react-native-community/viewpager";
<<<<<<< HEAD
import QRCode from 'react-native-qrcode';
=======
>>>>>>> 857aa26a0a48727b793d75f61d494570e5f757b1
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> 857aa26a0a48727b793d75f61d494570e5f757b1

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    // tabBtn: {
    //   alignItems: 'flex-start',
    //   marginTop: 20,
    //   marginLeft: 5,
    // //   flex:1
    // },
    page:{
        flex: 1,
        backgroundColor: "#fff",
      },
    slide1: {
        // flex: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
      },
      slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF"
      },
      slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#Fff"
      },
      text: {
        color: "#111",
        fontSize: 25,
        fontWeight: "bold"
      },
      container: {
        flex: 1,
        backgroundColor: "#FFF",
        marginTop: 50,
        padding: 15
      },
      buttonContainer: {
        marginTop: 15
      },
      separator: {
        marginVertical: 30,
        borderWidth: 0.5,
        borderColor: "#DCDCDC"
      },
      separator_1: {
        marginVertical: 10,
        borderWidth: 0.5,
        borderColor: "#DCDCDC",
<<<<<<< HEAD
        justifyContent: 'center',      
=======
        justifyContent: 'center',
>>>>>>> 857aa26a0a48727b793d75f61d494570e5f757b1
      },
      label: {
        color: "#999",
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 10,
        marginTop:10
      },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#f493ff',
  },
  slidingContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'stretch',
    marginTop: 20,
    width:'50%',

  },
  slidingText: {
    textAlign: 'center',
    marginTop: 20,
    width: '100%',
    paddingBottom: 5,
    borderBottomWidth: 1,
    color: '#82B78C',
    backgroundColor: 'white',
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },

});

<<<<<<< HEAD
var point =0;

=======
// Linking.canOpenURL(url)
//   .then((supported) => {
//     if (!supported) {
//       console.log("Can't handle url: " + url);
//     } else {
//       return Linking.openURL('http://192.168.40.4:3000/login');
//     }
//   })
>>>>>>> 857aa26a0a48727b793d75f61d494570e5f757b1

class main extends Component {
  state = {
    sliderVisible: false,
    progress: 0,
<<<<<<< HEAD
    progressWithOnComplete: 30,
    progressWithOnComplete2: 50,

    progressCustomized: 0,
    QrDialog: false,
    qrtext: "hello~~~~~~qr",
    token: jwtoken,  
    forestName: 'default',
=======
    progressWithOnComplete: 0,
    progressCustomized: 0,
    QrDialog: false,
>>>>>>> 857aa26a0a48727b793d75f61d494570e5f757b1
  };
  testPost(e) {
    var fin_num;
    
    console.log('token is : ',jwtoken);

    axios({
        method:'POST',
        url: 'http://192.168.40.14:3000/accountList',
        headers:{
            x_access_token : jwtoken
        }
    }).then(function (response) {
            console.log("----------------------------------");
            console.log(response.data.res_list[0].fintech_use_num);
            fin_num = response.data.res_list[0].fintech_use_num.toString();
            
            console.log(fin_num);
            console.log("----------------------------------");
            // this.state.qrtext=fin_num;
            window.qr_string=fin_num;
          })
          .catch(function(error) {
            console.log(error);
            console.log('account error!');
          });
  }
  /*  
  dbPost() {
    
    const userEmail = navigation.getParam("userEmail");
    const userPassword = navigation.getParam("userPassword");
    //console.log(userEmail);
    
    var url = 'http://192.168.40.14:3010/select';
    axios
      .post(url, {
        email: userEmail,
        password: userPassword,
      })
      .then(function(response) {
        
          window.name = response.data[0].name;
          window.email = response.data[0].email;
          window.password = response.data[0].password;
          window.accessToken = response.data[0].accessToken;
          window.refreshToken = response.data[0].refreshToken;
          window.userSeqNo = response.data[0].userSeqNo;
          window.forest_id = response.data[0].forest_id;
          window.point = response.data[0].point;
          window.total_point = response.data[0].total_point;
          window.limit_num = response.data[0].limit_num;
          window.goal = response.data[0].goal;
          
          window.forest_name = response.data[0].forest_name; 
          console.log("DB value!!!!!"+ window.forest_name);      
      })
      .catch(function(error) {
        console.log(error);
      }); //db에서 sql문으로 가져온 내용을 window변수로 써서 사용했어요!
  
  }
  */

  function1(){
    this.testPost();
    this.setState({QrDialog: true,
    qrtext: window.qr_string});
  }
  function2(){
    this.setState({QrDialog: false});
    this.increase("progress",20);
  }
  /*
  function3() {
    this.dbPost();
    this.setState({
      forestName: '트와이스 5주년'
    });
  }
  */
  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value
    });
  };
  
<<<<<<< HEAD
  replace = (key, value) => {
    this.setState({
      [key]: value
    })
  }
    
  
  url1 = () => {
    //it
    Linking.openURL('http://192.168.40.14:3000/login');
    //home
    //Linking.openURL('http://172.30.1.19:3000/login');
  }

=======
>>>>>>> 857aa26a0a48727b793d75f61d494570e5f757b1
  render() {
    const {navigation} =this.props;

    const barWidth = Dimensions.get("screen").width - 30;
    const progressCustomStyles = {
      backgroundColor: "red",
      borderRadius: 0,
      borderColor: "orange"
    };
   
    

    return (
      <ScrollView>
        <View style={styles.page}>
          <View style={{marginTop: 10,height:'5%',justifyContent:"space-around",flexDirection:'row'}}>
          <View style={{flex:1}}>
            <TouchableOpacity
        onPress={() => this.setState({ sliderVisible: !this.state.sliderVisible })}
        style={{ width: '100%', height: '100%'}}
        >
            <Image 
                style = {{height: '100%', width: '100%', resizeMode:'contain'}}
                source = {require('../img/tree_tab.png')}> 
            </Image>
        </TouchableOpacity>
        </View>
        <View style={{flex:4}}></View>
        <View style={{flex:1}}>
        <TouchableOpacity
                onPress={() => {
                  this.function1();
                }}
                style={{ width: '100%', height: '100%'}}
                
            >
              <Image 
                style = {{height: '100%', width: '100%', resizeMode:'contain'}}
                source = {require('../img/big_qr.png')}> 
            </Image>
            </TouchableOpacity>
            </View>
          </View>
          
          <Dialog
          onDismiss={() => {
            this.setState({ QrDialog: false });
          }}
          width={0.9}
          visible={this.state.QrDialog}
          rounded
          actionsBordered
          dialogTitle={
            <DialogTitle
              title="Qr 코드 결제 창"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                bordered
                onPress={() => {this.setState({ QrDialog: false });}}
                
                key="button-1"
              />
              <DialogButton
                text="OK"
                bordered
                onPress={() => {
                  this.function2(); 
                }}
                key="button-2"
              />
            </DialogFooter>
          }>
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}>
              <View style={{alignItems: "center", justifyContent: "center" }}>
            {/* <Image source={require("../img/38qr.png")} style={{resizeMode:'center'}}/> */}
            <QRCode
                onChange={this.state.qrtext}
                value={this.state.qrtext}
                size={400}
                bgColor='#000000'
                fgColor='#FFFFFF'/>
                </View>
          </DialogContent>
        </Dialog>  
        
        <Swiper style={styles.wrapper} showsButtons={true}>
<<<<<<< HEAD
        <View style ={styles.page}>
        <View style={styles.slide1}>
        
=======
        {/* <View style={styles.page}> */}
        <View style ={styles.page}>

        <View style={styles.slide1}>
        
        
          <Button
            title="기부하기"
            //버튼 누르면 QR코드 생성 화면
            onPress={this.increase.bind(this, "progressWithOnComplete", 20)}
          />
>>>>>>> 857aa26a0a48727b793d75f61d494570e5f757b1
          <View style={styles.separator_1} />
          <Image source={require("../img/tree_01.png")} />
          <View style={styles.separator_1} />
          <Text style={styles.text}>
            TWICE 5주년</Text>
            <Text style={styles.label}>숲 기부 현황</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progressWithOnComplete2}
            backgroundColorOnComplete="#82B78C"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="기부하기"
                onPress={() => {this.increase.bind(this, "progressWithOnComplete2", 5)}}
              />
            </View>
          </View>

          <View style={styles.separator_1} />
          <Text style={styles.label}>보유 포인트 </Text>
          
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progress}
            onComplete={() => {
              Alert.alert('축하합니다!', '이제 숲이 쑥쑥! 자랄 수 있어요!'); this.increase("progressWithOnComplete", 20);
            }}
            backgroundColorOnComplete="#82B78C"
          />
          <Text style={{color: "#82B78C", fontSize: 20, marginBottom:30,marginTop:10}}>
          {this.state.progress}% 성장!
          </Text>
          <View style={styles.buttonContainer}>
            
          </View>
          <Text style={styles.label}>누적 포인트</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progressWithOnComplete}
            backgroundColorOnComplete="#82B78C"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              {/* <Button
                title="적립하기"
                onPress={this.increase.bind(this, "progressWithOnComplete", 20)}
              /> */}
            </View>
          </View>
        </View>

        </View>

<<<<<<< HEAD
          <View style={styles.slide2}>
           {/* //버튼 누르면 QR코드 생성 화면 */}          
        <View style={styles.separator_1} />
=======
        <View style={styles.slide2}>
        
          {/* <Button
            title="기부하기"
            //버튼 누르면 QR코드 생성 화면
            onPress={this.increase.bind(this, "progressWithOnComplete", 20)}
          />
 */}
          <Button
            title="기부하기"
            onPress={() => {
              this.setState({
                QrDialog: true,
              });
            }}
          />
           {/* //버튼 누르면 QR코드 생성 화면 */}
          <TouchableOpacity
                onPress={() => {
                  this.setState({
                    QrDialog: true,
                  });
                }}
                style={{ width: '100%', height: '100%' }}
                
            >
              <Image 
                style = {{height: '100%', width: '100%', resizeMode:'contain'}}
                source = {require('../img/give.png')}> 
            </Image>
            </TouchableOpacity>

          <Dialog
          onDismiss={() => {
            this.setState({ QrDialog: false });
          }}
          width={0.9}
          visible={this.state.QrDialog}
          rounded
          actionsBordered
          dialogTitle={
            <DialogTitle
              title="Qr 코드 결제 창"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                bordered
                onPress={() => {
                  this.setState({ QrDialog: false });
                }}
                
                key="button-1"
              />
              <DialogButton
                text="OK"
                bordered
                onPress={() => {
                  this.setState({ QrDialog: false });
                }}
                key="button-2"
              />
            </DialogFooter>
          }>
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}>
              <View style={styles.separator_1} />
            <Image source={require("../img/qr.png")} />
          </DialogContent>
        </Dialog>

          <View style={styles.separator_1} />
>>>>>>> 857aa26a0a48727b793d75f61d494570e5f757b1
          <Image source={require("../img/tree_02.png")} />
          <View style={styles.separator_1} />
          <Text style={styles.text}>핀테크 아카데미</Text>
          <View style={styles.separator_1} />
          <Text style={styles.label}>보유 포인트</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progress}
            onComplete={() => {
              Alert.alert('축하합니다!', '이제 숲이 쑥쑥! 자랄 수 있어요!'); this.increase("progressWithOnComplete", 20);
            }}
            backgroundColorOnComplete="#82B78C"
          />
          <View style={styles.buttonContainer}>
            
          </View>
          <Text style={styles.label}>누적 포인트</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progressWithOnComplete}
            backgroundColorOnComplete="#82B78C"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="적립하기"
                onPress={this.increase.bind(this, "progressWithOnComplete", 20)}
              />
            </View>
          </View>
        </View>

        <View style={styles.slide3}>
          
          <View style={styles.separator_1} />
          <Image source={require("../img/tree_03.png")} />
          <View style={styles.separator_1} />
          <Text style={styles.text}>대학교</Text>
          <View style={styles.separator_1} />
          <Text style={styles.label}>보유 포인트</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progress}
            onComplete={() => {
              Alert.alert('축하합니다!', '이제 숲이 쑥쑥! 자랄 수 있어요!'); this.increase("progressWithOnComplete", 20);
            }}
            backgroundColorOnComplete="#82B78C"
          />
          <View style={styles.buttonContainer}>
            
          </View>
          <Text style={styles.label}>누적 포인트</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progressWithOnComplete}
            backgroundColorOnComplete="#82B78C"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="적립하기"
                onPress={this.increase.bind(this, "progressWithOnComplete", 20)}
              />
            </View>
          </View>
        </View>
      </Swiper>
      <SlidingView
            componentVisible={this.state.sliderVisible}
            containerStyle={styles.slidingContainer}
            position="left"
            hangeVisibilityCallback={() => this.setState({ sliderVisible: !this.state.sliderVisible })}
        >
            <TouchableOpacity
                onPress={() => this.setState({ sliderVisible: !this.state.sliderVisible })}
                style={{ width: '100%', height: '100%' }}
            >
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate("profile")}
                    style={{ width: '100%' }}
                >
                    <Text style={styles.slidingText}>내 프로필</Text>
                </TouchableOpacity>
        
                <TouchableOpacity
                    onPress={()=> navigation.navigate("forest")}
                    style={{ width: '100%' }}
                >
                    <Text style={styles.slidingText}>숲 생성</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> navigation.navigate("mybank")}
                    style={{ width: '100%' }}
                >
                    <Text style={styles.slidingText}>내 계좌</Text>
                </TouchableOpacity>

<<<<<<< HEAD
                
=======
                {/* <TouchableOpacity
                    onPress={()=>URL1}
                    style={{ width: '100%' }}
                >
                    <Text style={styles.slidingText}>Test</Text>
                </TouchableOpacity> */}

        
                <Text style={styles.slidingText}>AAAAA</Text>
                <Text style={styles.slidingText}>BBBBB</Text>
                <Text style={styles.slidingText}>CCCCC</Text>
                <Text style={styles.slidingText}>DDDDD</Text>
>>>>>>> 857aa26a0a48727b793d75f61d494570e5f757b1
            
            </TouchableOpacity>
        </SlidingView> 
      </View>
      </ScrollView>
    );
  }
}


 
AppRegistry.registerComponent("myproject", () => SwiperComponent);

export default main;

