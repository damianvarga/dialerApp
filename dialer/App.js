/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React from 'react';
import type {Node} from 'react';
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

  return (
    <View >
      <View style={styles.greenArea}></View>
      <View style={styles.whiteArea}></View>

      <View style={styles.rowContainer}>
        <Pressable style={styles.button}
        onPress={function () {
          console.log("1");
        }}>
        <Text style={styles.textUp}>1</Text>
        
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("2");
        }}>
        <Text style={styles.textUp}>2</Text>
        <Text style={styles.textDown}>ABC</Text>
        </Pressable>
        
        <Pressable style={styles.button}
        onPress={function () {
          console.log("3");
        }}>
        <Text style={styles.textUp}>3</Text>
        <Text style={styles.textDown}>DEF</Text>
        </Pressable>  
      </View>
      <View style={styles.rowContainer}>
        <Pressable style={styles.button}
        onPress={function () {
          console.log("4");
        }}>
        <Text style={styles.textUp}>4</Text>
        <Text style={styles.textDown}>GHI</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("5");
        }}>
        <Text style={styles.textUp}>5</Text>
        <Text style={styles.textDown}>JKL</Text>
        </Pressable>
        
        <Pressable style={styles.button}
        onPress={function () {
          console.log("6");
        }}>
        <Text style={styles.textUp}>6</Text>
        <Text style={styles.textDown}>MNO</Text>
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <Pressable style={styles.button}
        onPress={function () {
          console.log("7");
        }}>
        <Text style={styles.textUp}>7</Text>
        <Text style={styles.textDown}>PQRS</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("8");
        }}>
        <Text style={styles.textUp}>8</Text>
        <Text style={styles.textDown}>TUV</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("9");
        }}>
        <Text style={styles.textUp}>9</Text>
        <Text style={styles.textDown}>WXYZ</Text>
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <Pressable style={styles.button}
        onPress={function () {
          console.log("*");
        }}>
        <Text style={styles.textUp}>*</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("0");
        }}>
        <Text style={styles.textUp}>0</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={function () {
          console.log("#");
        }}>
        <Text style={styles.textUp}>#</Text>
        </Pressable>
      </View>
      <View style={styles.receiver}>
        <Image source={require('./pictures/receiver.png')} style={styles.receiver}></Image>
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
  whiteArea: {
    backgroundColor: "white",
    height: Dimensions.get('window').height/4,
    width: Dimensions.get('window').width,
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
