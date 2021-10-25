/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import React from 'react';
import type {Node} from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet, 
  Text,
  useColorScheme,
  View,
  AppRegistry,
  Button,
  Alert,
  Pressable,
  Dimensions,
  Image,
  KeyboardAvoidingViewComponent,

} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  /*const [isPressedOne, setIsPressedOne] = useState(false);
  const [isPressedTwo, setIsPressedTwo] = useState(false);
  const [isPressedThree, setIsPressedThree] = useState(false);
  const [isPressedFour, setIsPressedFour] = useState(false);
  const [isPressedFive, setIsPressedFive] = useState(false);
  const [isPressedSix, setIsPressedSix] = useState(false);
  const [isPressedSeven, setIsPressedSeven] = useState(false);
  const [isPressedEight, setIsPressedEight] = useState(false);
  const [isPressedNine, setIsPressedNine] = useState(false);
  const [isPressedHashtag, setIsPressedHashtag] = useState(false);
  const [isPressedZero, setIsPressedZero] = useState(false);
  const [isPressedStar, setIsPressedStar] = useState(false);*/
  //var number = '';
  // this.state() {
  //   text: "Click here"
  // };

  var addNumber = function(originalText, addedNumber) {
    // number += addedNumber;
    // console.log(number);
    originalText = `${originalText}` + `${addedNumber}`;
    //originalText = result;
    return originalText;
  };

  var spaces = function(result){
    var result3 = "";
    if (result.charCodeAt(0) === 48) {
      if (result.charCodeAt(1) === 57) {
        result3 = result.slice(0,4) + " " + result.slice(4, 7) + " " + result.slice(7);
      }
      else {
        result3 = result.slice(0,3) + " " + result.slice(3, 6) + " " + result.slice(6);
      }
    }
    else {
      result3 = result;
    
    }
    return result3;
  }
  const [result, setResult] = useState("");
  const [dial, setDial] = useState(true);
  return (
    <View >
      <View style={styles.greenArea}>
        <Text style={styles.whiteText}>Phone</Text>
      </View>
      <View style={styles.whiteArea}>
        <Text style={styles.bigBold}> 
          {spaces(result)}
          </Text>



      </View>
      <View style={styles.delete}>
      <Pressable onPress={function() {
          if (result != "") {
            var result2 = result.substring(0, result.length-1);
            console.log(result2);
            setResult(result2);
          }
        }}
        onLongPress={function(){
          setResult("");
        }}>
          {result != "" ?
            <Image source={require('./pictures/delete.png')} style={styles.delete}></Image>
            : null
          }
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <Pressable style={styles.button}
        onPress={function () {
          var result2 = addNumber(result, "1");
          console.log(result2);
          setResult(result2);
          //<Text>1</Text>
        }}>

        <Text style={styles.textUp}>1</Text>

        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("2");
          var result2 = addNumber(result, "2");
          console.log(result2);
          setResult(result2);
        }}>
        <Text style={styles.textUp}>2</Text>
        <Text style={styles.textDown}>ABC</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("3");
          var result2 = addNumber(result, "3");
          console.log(result2);
          setResult(result2);
        }}>
        <Text style={styles.textUp}>3</Text>
        <Text style={styles.textDown}>DEF</Text>
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <Pressable style={styles.button}
        onPress={function () {
          console.log("4");
          var result2 = addNumber(result, "4");
          console.log(result2);
          setResult(result2);
        }}>
        <Text style={styles.textUp}>4</Text>
        <Text style={styles.textDown}>GHI</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("5");
          var result2 = addNumber(result, "5");
          console.log(result2);
          setResult(result2);
        }}>
        <Text style={styles.textUp}>5</Text>
        <Text style={styles.textDown}>JKL</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("6");
          var result2 = addNumber(result, "6");
          console.log(result2);
          setResult(result2);
        }}>
        <Text style={styles.textUp}>6</Text>
        <Text style={styles.textDown}>MNO</Text>
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <Pressable style={styles.button}
        onPress={function () {
          console.log("7");
          var result2 = addNumber(result, "7");
          console.log(result2);
          setResult(result2);
        }}>
        <Text style={styles.textUp}>7</Text>
        <Text style={styles.textDown}>PQRS</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("8");
          var result2 = addNumber(result, "8");
          console.log(result2);
          setResult(result2);
        }}>
        <Text style={styles.textUp}>8</Text>
        <Text style={styles.textDown}>TUV</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("9");
          var result2 = addNumber(result, "9");
          console.log(result2);
          setResult(result2);
        }}>
        <Text style={styles.textUp}>9</Text>
        <Text style={styles.textDown}>WXYZ</Text>
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <Pressable style={styles.button}
        onPress={function () {
          console.log("*");
          var result2 = addNumber(result, "*");
          console.log(result2);
          setResult(result2);
        }}>
        <Text style={styles.textUp}>*</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("0");
          var result2 = addNumber(result, "0");
          console.log(result2);
          setResult(result2);
        }}
        onLongPress = {function () {
          var result2;
          {result === "" ? result2 = addNumber(result, "+") : result2 = addNumber(result, "0") }
          console.log(result2);
          setResult(result2);
        }}>
        <Text style={styles.textUp}>0</Text>
        <Text style={styles.textDown}>+</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("#");
          var result2 = addNumber(result, "#");
          console.log(result2);
          setResult(result2);
        }}>
        <Text style={styles.textUp}>#</Text>
        </Pressable>
      </View>
      <View style={styles.receiver}>

        <Pressable onPress={function() {
          
          result == "" || result == "*" || result == "#" || result == "+" ?
          setDial(true) :
          setDial(!dial);
        }}
           onPressOut={function(){
              console.log(dial);
             (dial === true && !(result == "" || result == "*" || result == "#" || result == "+" )) ?
             RNImmediatePhoneCall.immediatePhoneCall(result) : null;
           }}
        >


          <Image source={
            (dial === true || result == "" || result == "*" || result == "#" || result == "+" ) ?
            require('./pictures/receiver.png'):
            require('./pictures/redReceiver.png')} style={styles.receiver}></Image>


        </Pressable>

      </View>
    </View>

     /*
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Prvý krok">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="Kukaj na zmeny">
            <ReloadInstructions />
          </Section>
          <Section title="Laď">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  */
    );

};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  greenArea: {
    backgroundColor: "rgb(79,166,49)",
    height: Dimensions.get('window').height/6,
    width: Dimensions.get('window').width,
  },
  whiteText: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 15,
    paddingTop: 15,
  },
  whiteArea: {
    backgroundColor: "white",
    height: Dimensions.get('window').height/5,
    width: Dimensions.get('window').width,
  },
  bigBold: {
    color: '#000',
    fontSize: 28,
    textAlign: "center",
    paddingTop: Dimensions.get('window').height/12,

  },
  delete: {

    paddingBottom: Dimensions.get('window').height/55,
    // height: Dimensions.get('window').height/24,
    // width: Dimensions.get('window').width/8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: Dimensions.get('window').height/12,
    width: Dimensions.get('window').width/3,
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    margin: 0.3,
    borderWidth: 1,
    borderColor:"gray",
  },
  rowContainer:{
    flexDirection: 'row',
  },
  textUp:{
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
  } ,
  textDown: {
    textAlign: 'center',
    color: '#999',
  },
  receiver: {
    marginTop: Dimensions.get('window').height/20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
