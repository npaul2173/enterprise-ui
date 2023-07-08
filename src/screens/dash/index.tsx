import React from 'react';
import {Text, View} from 'react-native';
import {useStyles} from './index.styles';
import {Shadow} from 'react-native-shadow-2';

function convertBoxShadowToProps(boxShadow) {
  const regex =
    /(-?\d+px) (-?\d+px) (-?\d+px) (-?\d+px) rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/;
  const matches = boxShadow.match(regex);

  if (!matches) {
    // Invalid box-shadow format
    return null;
  }

  const [
    ,
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    red,
    green,
    blue,
    alpha,
  ] = matches;
  const distance = Math.max(
    Math.abs(parseInt(offsetX, 10)),
    Math.abs(parseInt(offsetY, 10)),
  );
  const startColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  const endColor = `rgba(${red}, ${green}, ${blue}, 0)`;
  const offset = [parseInt(offsetX, 10), parseInt(offsetY, 10)];

  return {distance, startColor, endColor, offset};
}

export const Home = () => {
  const {styles} = useStyles({});

  // Usage example
  const boxShadow = '2px 2px 2px 1px rgba(0, 0, 0, 0.2)';
  const boxShadow2 = `0px 6px 34px 0px rgba(0, 0, 0, 0.1)`;
  const {startColor, endColor, distance, offset} =
    convertBoxShadowToProps(boxShadow2);
  // console.log(props);

  const arr = new Array(5).fill({name: 'Mohan'});
  return (
    <View style={styles.root}>
      {/* <Text>Hello</Text> */}

      {arr.map(() => {
        return (
          <Shadow
            distance={distance}
            startColor={startColor}
            endColor={endColor}
            paintInside
            offset={offset}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: 'white',
                borderRadius: 5,
                width: 340,
                height: 200,
                marginBottom: 30,
              }}>
              <Text style={{margin: 20, fontSize: 20}}>Box shadow</Text>
            </View>
          </Shadow>
        );
      })}
    </View>
  );
};
