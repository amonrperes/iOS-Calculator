import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Number Pad */}
      <View style={styles.OperationsPad}>
        <Text style={{color:'#fff', fontSize: 100}}>
          0
        </Text>
      </View>

      {/* FirstButtonsLine */}
      <View style={styles.FirstButtonsLine}>
          <TouchableOpacity style={styles.Buttons}>
            <Text style={{color:'#000', fontSize: 30}}>
              AC
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Buttons}>
            <Text style={{color:'#000', fontSize: 30}}>
              +/-
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Buttons}>
            <Text style={{color:'#000', fontSize: 30}}>
              %
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orangeButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              /
            </Text>
          </TouchableOpacity>
      </View>

    {/* SecondButtonsLine */}
      <View style={styles.FirstButtonsLine}>
          <TouchableOpacity style={styles.SecondButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SecondButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SecondButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orangeButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              x
            </Text>
          </TouchableOpacity>
      </View>


      {/* Third Buttons Line */}
      <View style={styles.FirstButtonsLine}>
          <TouchableOpacity style={styles.SecondButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SecondButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SecondButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orangeButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              -
            </Text>
          </TouchableOpacity>
      </View>

      {/* Fourth Buttons Line */}
      <View style={styles.FirstButtonsLine}>
          <TouchableOpacity style={styles.SecondButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SecondButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SecondButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orangeButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              +
            </Text>
          </TouchableOpacity>
      </View>


      {/* Fifith Buttons Line */}
      <View style={styles.FirstButtonsLine}>
          <TouchableOpacity style={styles.ZeroButton}>
            <Text style={{color:'#fff', fontSize: 30}}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SecondButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              ,
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orangeButtons}>
            <Text style={{color:'#fff', fontSize: 30}}>
              =
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: -20,
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  OperationsPad :{
    marginTop: 75,
    width: '100%',
    paddingRight:18,
    alignItems:'flex-end',
    // backgroundColor: '#e06'
  },

  FirstButtonsLine: {
    flexDirection: 'row',
    // backgroundColor: '#e06',
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
  },

  Buttons: {
    marginLeft: 15,
    backgroundColor: '#A6A6A6',
    width: 75,
    height: 75,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  SecondButtons: {
    marginTop: 5,
    marginLeft: 15,
    backgroundColor: '#343434',
    width: 75,
    height: 75,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  ZeroButton: {
    marginTop: 7,
    marginLeft: 20,
    backgroundColor: '#343434',
    width: 165,
    height: 75,
    borderRadius: 35,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 15
  },

  orangeButtons: {
    marginLeft: 15,
    backgroundColor: '#FF9501',
    width: 75,
    height: 75,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  firstLineButtonsText: {
    color: '#000',
    fontSize: 25,

  }
});
