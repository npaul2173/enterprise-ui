import {createIconSet} from 'react-native-vector-icons';
const fluent = require("'../../../../assets/fonts/fluent.ttf'"); // Replace with the actual path to your custom font file
import yourCustomFontJson from './fabric-icons.json'; // Replace with the actual path to your JSON file

const glyphs = yourCustomFontJson.glyphs.reduce(
  (prev, curr) => ({...prev, [curr.name]: curr.unicode}),
  {},
);
const CustomIcon = createIconSet(
  glyphs,
  // 'FabricMDL2Icons',
  // 'fabric-icons',
  'fluent',
  'fluent.ttf',
);

// "fontName": "fabric-icons",
// "fontFamilyName": "FabricMDL2Icons",
console.log(CustomIcon.hasIcon('Accept'));

const FluentIcons = () => {
  return <CustomIcon name="Accept" size={30} color="black" />;
};

export default FluentIcons;
