import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const buttons = [
  [
    {label: '1', sub: ''},
    {label: '2', sub: 'ABC'},
    {label: '3', sub: 'DEF'},
  ],
  [
    {label: '4', sub: 'GHI'},
    {label: '5', sub: 'JKL'},
    {label: '6', sub: 'MNO'},
  ],
  [
    {label: '7', sub: 'PQRS'},
    {label: '8', sub: 'TUV'},
    {label: '9', sub: 'WXYZ'},
  ],
  [
    {label: '*', sub: ''},
    {label: '0', sub: '+', longPressLabel: '+'},
    {label: '#', sub: ''},
  ],
];

const formatNumber = num => {
  if (!num) return num;
  if (num.charCodeAt(0) === 48 && num.charCodeAt(1) === 57) {
    return `${num.slice(0, 4)} ${num.slice(4, 7)} ${num.slice(7)}`;
  }
  if (num.charCodeAt(0) === 48) {
    return `${num.slice(0, 3)} ${num.slice(3, 6)} ${num.slice(6)}`;
  }
  return num;
};

const isInvalidNumber = num =>
  num === '' || num === '*' || num === '#' || num === '+';

const App = () => {
  const [result, setResult] = useState('');
  const [dial, setDial] = useState(true);

  const addNumber = (originalText, addedNumber) =>
    `${originalText}${addedNumber}`;

  const handlePress = label => {
    const newResult = addNumber(result, label);
    setResult(newResult);
  };

  const handleLongPress0 = () => {
    const newResult =
      result === '' ? addNumber(result, '+') : addNumber(result, '0');
    setResult(newResult);
  };

  const handleDelete = () => {
    setResult(result.substring(0, result.length - 1));
  };

  const handleCallPress = () => {
    if (isInvalidNumber(result)) {
      setDial(true);
    } else {
      setDial(!dial);
    }
  };

  const handleCallPressOut = () => {
    if (dial === true && !isInvalidNumber(result)) {
      RNImmediatePhoneCall.immediatePhoneCall(result);
    }
  };

  return (
    <View>
      <View style={styles.greenArea}>
        <Text style={styles.whiteText}>Phone</Text>
      </View>

      <View style={styles.whiteArea}>
        <Text style={styles.bigBold}>{formatNumber(result)}</Text>
      </View>

      <View style={styles.deleteContainer}>
        <Pressable onPress={handleDelete} onLongPress={() => setResult('')}>
          {result !== '' ? (
            <Image source={require('./pictures/delete.png')} />
          ) : null}
        </Pressable>
      </View>

      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.rowContainer}>
          {row.map(btn => (
            <Pressable
              key={btn.label}
              style={styles.button}
              onPress={() => handlePress(btn.label)}
              onLongPress={btn.longPressLabel ? handleLongPress0 : undefined}
            >
              <Text style={styles.textUp}>{btn.label}</Text>
              {btn.sub !== '' && <Text style={styles.textDown}>{btn.sub}</Text>}
            </Pressable>
          ))}
        </View>
      ))}

      <View style={styles.receiverContainer}>
        <Pressable onPress={handleCallPress} onPressOut={handleCallPressOut}>
          <Image
            source={
              dial === true || isInvalidNumber(result)
                ? require('./pictures/receiver.png')
                : require('./pictures/redReceiver.png')
            }
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  greenArea: {
    backgroundColor: 'rgb(79,166,49)',
    height: height / 6,
    width: width,
  },
  whiteText: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 15,
    paddingTop: 15,
  },
  whiteArea: {
    backgroundColor: 'white',
    height: height / 5,
    width: width,
  },
  bigBold: {
    color: '#000',
    fontSize: 28,
    textAlign: 'center',
    paddingTop: height / 12,
  },
  deleteContainer: {
    paddingBottom: height / 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: height / 12,
    width: width / 3,
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    margin: 0.3,
    borderWidth: 1,
    borderColor: 'gray',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textUp: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
  },
  textDown: {
    textAlign: 'center',
    color: '#999',
  },
  receiverContainer: {
    marginTop: height / 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
