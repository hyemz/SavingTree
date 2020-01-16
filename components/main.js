import React, { Component } from 'react';
import {AppRegistry, View, StyleSheet, Text, TouchableOpacity, Image,Dimensions,Alert,Button} from 'react-native';
import Swiper from "react-native-swiper";
import SlidingView from 'rn-sliding-view';
import ProgressBarAnimated from "react-native-progress-bar-animated";
import ViewPager from "@react-native-community/viewpager";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    tabBtn: {
      alignItems: 'flex-start',
      marginTop: 20,
      marginLeft: 5,
    //   flex:1
    },
    page:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#fff"
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
        justifyContent: 'center',
      },
      label: {
        color: "#999",
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 10
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

// Linking.canOpenURL(url)
//   .then((supported) => {
//     if (!supported) {
//       console.log("Can't handle url: " + url);
//     } else {
//       return Linking.openURL('http://192.168.40.4:3000/login');
//     }
//   })

class main extends Component {
  state = {
    sliderVisible: false,
    progress: 0,
    progressWithOnComplete: 0,
    progressCustomized: 0,
    QrDialog: false,
  };

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value
    });
  };
  
  render() {
    const {navigation} =this.props;
    const barWidth = Dimensions.get("screen").width - 30;
    const progressCustomStyles = {
      backgroundColor: "red",
      borderRadius: 0,
      borderColor: "orange"
    };
    return (
        <View style={styles.page}>
                    <TouchableOpacity
        onPress={() => this.setState({ sliderVisible: !this.state.sliderVisible })}
        style={[styles.tabBtn,{ width: '10%', height: '10%' }]}
        >
            <Image 
                style = {{height: '100%', width: '100%', resizeMode:'contain'}}
                source = {require('../img/tab_icon.png')}> 
            </Image>
        </TouchableOpacity>
        <Swiper style={styles.wrapper} showsButtons={true}>
        {/* <View style={styles.page}> */}
        <View style ={styles.page}>

        <View style={styles.slide1}>
        
        
          <Button
            title="기부하기"
            //버튼 누르면 QR코드 생성 화면
            onPress={this.increase.bind(this, "progressWithOnComplete", 20)}
          />
          <View style={styles.separator_1} />
          <Image source={require("../img/tree_01.png")} />
          <View style={styles.separator_1} />
          <Text style={styles.text}>첫번째 숲</Text>
          <View style={styles.separator_1} />
          <Text style={styles.label}>누적포인트</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progress}
            backgroundColorOnComplete="#82B78C"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="적립하기"
                onPress={this.increase.bind(this, "progress", 20)}
              />
            </View>
          </View>
          <Text style={styles.label}>보유포인트</Text>
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

        </View>

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
          <Image source={require("../img/tree_02.png")} />
          <View style={styles.separator_1} />
          <Text style={styles.text}>두번째 숲</Text>
          <View style={styles.separator_1} />
          <Text style={styles.label}>누적포인트</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progress}
            backgroundColorOnComplete="#82B78C"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="적립하기"
                onPress={this.increase.bind(this, "progress", 20)}
              />
            </View>
          </View>
          <Text style={styles.label}>보유포인트</Text>
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
          <Button
            title="기부하기"
            //버튼 누르면 QR코드 생성 화면
            onPress={this.increase.bind(this, "progressWithOnComplete", 20)}
          />
          <View style={styles.separator_1} />
          <Image source={require("../img/tree_03.png")} />
          <View style={styles.separator_1} />
          <Text style={styles.text}>세번째 숲</Text>
          <View style={styles.separator_1} />
          <Text style={styles.label}>누적포인트</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progress}
            backgroundColorOnComplete="#82B78C"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="적립하기"
                onPress={this.increase.bind(this, "progress", 20)}
              />
            </View>
          </View>
          <Text style={styles.label}>보유포인트</Text>
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
                    onPress={()=> navigation.navigate("account")}
                    style={{ width: '100%' }}
                >
                    <Text style={styles.slidingText}>마이페이지</Text>
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
            
            </TouchableOpacity>
        </SlidingView> 
      </View>
    );
  }
}


 
AppRegistry.registerComponent("myproject", () => SwiperComponent);

export default main;

