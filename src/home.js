import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
} from 'react-native';

import Background from './background';

class Home extends Component {


    constructor(props) {
        super();
        this.state = {
          singleFile: "",
          searchText: "",
          filteredData :[],
          data :[],
          fileName :""
        }   
      }


 
 
  

render (){
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <Background/>
            </View>
        </SafeAreaView>
    );
}
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    
});


  export default Home;
