import React, { Component }  from "react";
import axios from "axios";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Alert,

} from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { DrawerActions } from "react-navigation-drawer";
import { Appbar, Drawer } from "react-native-paper";
import { SafeAreaView } from "react-navigation"; // ⚠ you need the package 'react-navigation'
import { TextInput, Button } from "react-native-paper";
import { FlatGrid } from 'react-native-super-grid';

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 80
    //justifyContent: "center"
  },
  img_01: {
    marginBottom: 30
  },
  button: {
    width: "60%",
    //height: 50
    marginTop: 20,
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  textinput: {
    width: "80%",
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: "center"
  },
  drawer: {
    backgroundColor: "white",
   
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

class First extends React.Component {
  state = {
    forest_name: "",
    limit_num: "",
    goal: "",
    user_user_id: 1,
    visible: false,
  };

  _showDialog = () => this.setState({ visible: true });
  _hideDialog = () => this.setState({ visible: false });

  testPost(e) {
    e.preventDefault();
    const { navigation } = this.props;
    //home
    //var url = "http://172.30.1.19:3010/forestAdd";
    //it
    var url = "http://192.168.40.14:3010/forestAdd";

    axios
      .post(url, {
        forest_name: this.state.forest_name,
        limit_num: this.state.limit_num,
        goal: this.state.goal,
        user_user_id: 1
      })
      .then(function(response) {
        console.log(response.request.response);
        if (response.request.response != 0) {
          Alert.alert('숲 생성 완료', '새로운 숲이 생성되었습니다!!');
          navigation.navigate("Home")
          //props.navigation.navigate("Home")
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    this.state.forest_name = "";
    this.state.limit_num = "";
    this.state.goal = "";
    this.state.user_user_id = 1;
  }
  render() {
    
    return (
      <View>
        <Appbar.Header style={{ backgroundColor: "#65996E" }}>
          <Appbar.Action
            icon="menu"
            accessibilityLabel="Back"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
          <Appbar.Content color="white" title="숲 생성" />
        </Appbar.Header>

        <View style={styles.container}>
          <Image
            style={styles.img_01}
            source={require("../img/forest_create.png")}
          ></Image>
          <TextInput
            style={styles.textinput}
            mode="outlined"
            theme={{
              colors: {
                placeholder: "grey",
                text: "#507F58",
                primary: "#507F58",
                outlinelineColor: "#507F58"
              }
            }}
            label="숲 이름"
            value={this.state.forest_name}
            onChangeText={forest_name => this.setState({ forest_name })}
          />
          <TextInput
            style={styles.textinput}
            mode="outlined"
            theme={{
              colors: {
                placeholder: "grey",
                text: "#507F58",
                primary: "#507F58",
                outlinelineColor: "#507F58"
              }
            }}
            label="목표금액"
            value={this.state.goal}
            onChangeText={goal => this.setState({ goal })}
          />
          <TextInput
            style={styles.textinput}
            mode="outlined"
            theme={{
              colors: {
                placeholder: "grey",
                text: "#507F58",
                primary: "#507F58",
                outlinelineColor: "#507F58"
              }
            }}
            label="참여인원"
            value={this.state.limit_num}
            onChangeText={limit_num => this.setState({ limit_num })}
          />
           
          <Button
            style={styles.button}
            mode="contained"
            theme={{
              colors: {
                primary: "#F1CB7E",
                backgroundColor: "#F1CB7E"
                //textcolor: "white"
              }
            }}
            onPress = {
              this.testPost.bind(this)
            }
          >
            생성하기
          </Button>
        </View>
      </View>
    );
  }
}


class Second extends React.Component {
    
  render() {
    const items = [
        { name: '트와이스 5주년', code: '#1abc9c',text:'원어밀리언 안녕하세요 원스입니다.',src:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_02.jpg/250px-180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_02.jpg' }, 
        { name: '워너원', code: '#2ecc71',text:'원해 워너블' },
        { name: '핀테크 아카데미', code: '#f1c40f',text:'결제 서비스' }, { name: 'KISA', code: '#e67e22',text:'한국 인터넷 진흥원' },
        { name: '강하늘', code: '#3498db',text:'너가 내 하늘이다,,^^' }, { name: '보민 생일 기념', code: '#9b59b6',text:'1월 21일까지 화이팅' },
        { name: '대학교', code: '#bdc3c7',text:'멀티미디어' }, { name: '회사', code: '#7f8c8d',text:'때려치고싶다..' },
      ];
  
      return (
        <View>
         
        <Appbar.Header style={{ backgroundColor: "#65996E" }}>
            <Appbar.Action
              icon="menu"
              accessibilityLabel="Back"
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              }
            />
            <Appbar.Content color="white" title="숲 리스트" />
          </Appbar.Header>
          
          <ScrollView>
          <FlatGrid
            itemDimension={130}
            items={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={20}
            
            renderItem={({ item, index }) => (
              <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.text}</Text>
            </View>
            )}
          />
          </ScrollView>
        
        </View>
      );
  }
}

const Menu = createDrawerNavigator(
  {
    First: { screen: First },
    Second: { screen: Second }
  },
  {
    contentComponent: props => (
      <ScrollView>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <Drawer.Item
            style={styles.drawer}
            label="숲 생성하기"
            active="true"
            onPress={() => props.navigation.navigate("First")}
          />
          <Drawer.Item
            label="숲 리스트"
            active="true"
            onPress={() => props.navigation.navigate("Second")}
          />
        </SafeAreaView>
      </ScrollView>
    )
  },
  
);


const AppNav = createAppContainer(Menu);

export default class App extends React.Component {
  render() {
    return <AppNav />;
  }
}