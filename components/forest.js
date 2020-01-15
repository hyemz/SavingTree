import React, {Component} from 'react';

import {Text,View,TouchableOpacity} from 'react-native';

class forestpage extends Component {

    render() {
        const {navigation} = this.props;

        return (
            <View style={{flex:1,justifyContent: 'center'}} >
                <TouchableOpacity
                        onPress={()=>{
                            navigation.goBack()
                        }}
                >
                    <Text style={{alignItems: 'center'}}>forest Page</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



export default forestpage;
