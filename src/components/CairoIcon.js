import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const map = {
  time: '"',
  girl: '<',
  fish: 'o',
  baby: 'm',
  key: 'f',
  bandaid: 'y',
  dynamite: 'u',
  match: '|',
  'evil-eye': 'O',
  pencil: 'a',
  wine: '4',
}

const CairoIcon = ({ name, style = { color: 'white', fontSize: 42 }}) => (
  <Text style={{ fontFamily: 'Cairo', ...style }}>{map[name]}</Text>
);

CairoIcon.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default CairoIcon;
