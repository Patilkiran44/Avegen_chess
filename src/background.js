

import React, { useState } from "react";
import { View, StyleSheet, Text, Image  } from "react-native";
import {  Button } from 'react-native-elements';

const WHITE = "#FFFFFF";
const BLACK = "#454545";


const PIECE_IMAGES = {
  b: {
    w: require('../assets/wB.png'),
    b: require('../assets/bB.png'),
  },
  k: {
    w: require('../assets/wK.png'),
    b: require('../assets/bK.png'),
  },
  n: {
    w: require('../assets/wN.png'),
    b: require('../assets/bN.png'),
  },
  p: {
    w: require('../assets/wP.png'),
    b: require('../assets/bP.png'),
  },
  q: {
    w: require('../assets/wQ.png'),
    b: require('../assets/bQ.png'),
  },
  r: {
    w: require('../assets/wR.png'),
    b: require('../assets/bR.png'),
  },
};

  

const Square = ({ white, row, col ,random}) => {
  const backgroundColor = white ? WHITE : BLACK;
  const pieceImageSource = PIECE_IMAGES["p"]["w"];
  const pieceImageSourceBlack = PIECE_IMAGES["p"]["b"];
  const row6 = [
    PIECE_IMAGES["p"]["w"],
    PIECE_IMAGES["p"]["w"],
    PIECE_IMAGES["p"]["w"],
    PIECE_IMAGES["p"]["w"],
    PIECE_IMAGES["p"]["w"] ,
    PIECE_IMAGES["p"]["w"],
    PIECE_IMAGES["p"]["w"],
    PIECE_IMAGES["p"]["w"],
  ]
  const row1 = [
    PIECE_IMAGES["r"]["w"],
    PIECE_IMAGES["n"]["w"],
    PIECE_IMAGES["b"]["w"],
    PIECE_IMAGES["q"]["w"],
    PIECE_IMAGES["k"]["w"],
    PIECE_IMAGES["b"]["w"],
    PIECE_IMAGES["n"]["w"],
    PIECE_IMAGES["r"]["w"],
  ]
  const row8 = [
    PIECE_IMAGES["r"]["b"],
    PIECE_IMAGES["n"]["b"],
    PIECE_IMAGES["b"]["b"],
    PIECE_IMAGES["q"]["b"],
    PIECE_IMAGES["k"]["b"],
    PIECE_IMAGES["b"]["b"],
    PIECE_IMAGES["n"]["b"],
    PIECE_IMAGES["r"]["b"],
  ]



 
  
    chessImages = (col, row1) => {
      for (let i = col; i < row1.length; i++) {
        return (
          <Image
            style={{
              height: 40,
              width: 40,
              position: 'absolute',
            }}
            source={row1[i]}
          />
        )
      }
    }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        height: 50,
        width: 50,
      }}
    >
     {random ?
     (row===4 && col===4 ) &&
     <Image
          style={{
            height: 40,
            width: 40,
            position: 'absolute'
          }}
          source={pieceImageSource}
        /> :null}
     {row === 1 && 
        <Image
          style={{
            height: 40,
            width: 40,
            position: 'absolute'
          }}
          source={pieceImageSourceBlack}
        /> } 

        {
          (row === 6 && col===4) && random ? <View
          style={{
            flex: 1,
            backgroundColor,
            height: 50,
            width: 50,
          }}
        ></View>
          :row === 6  && this.chessImages(col, row6)
        }
         
      {row === 7 &&
        this.chessImages(col, row1)
      }
      {row === 0  &&
        this.chessImages(col, row8)
      }
    </View>
    
  );
};

const Row = ({ white, row ,random }) => {
  const offset = white ? 0 : 1;
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", margin: 4 }}>
        {"" + (8 - row)}
      </Text>
      {new Array(8).fill(0).map((_, i) => (

        <Square row={row} col={i} key={i} white={(i + offset) % 2 === 1} random={random} />
      ))}
    </View>
  );
};

const Background = () => {
  const [random ,setRandom]=useState(false);
  const onPressRandom=() =>{
     setRandom(true)
      }
  const onReset =() =>{
        setRandom(false)
      }
  return (
    <>
      <View style={{ flex: 1 }}>
        {new Array(8).fill(0).map((_, i) => (
          <Row key={i} white={i % 2 === 0} row={i} random={random} />
        ))}
      </View>
      <View style={{ flex: 1, margin: 30 , flexDirection:"row" , justifyContent:"center" }}>
      <Button
          title="Random"
          onPress={onPressRandom}
          buttonStyle={styles.button}
        />
        <Button
          title="Reset"
          onPress={onReset}
          buttonStyle={styles.button}
        />
     </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 50,
  },
  button: {
    padding :10,
    margin: 30,
    backgroundColor: '#000000',
    borderRadius: 15
},
});


export default Background;
