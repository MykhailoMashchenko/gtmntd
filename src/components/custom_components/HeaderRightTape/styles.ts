/* REACT */
import { StyleSheet } from 'react-native'

/* CUSTOM MODULES */
// import {
//   getHeightWithScaleFactor,
//   getWidthWithScaleFactor,
// } from 'src/utils/layout';

export default StyleSheet.create({
  title: {
    color: 'white', // TODO(mikle): replace with COLORS.WHITE
    fontWeight: '900',
    fontSize: 10,
    lineHeight: 16,
  },
  wrapper: {
    top: 0,
    left: 0,
    height: 90,
    marginTop: 20,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  tape: {
    right: 0,
    position: 'absolute',
    zIndex: 500,
    alignItems: 'center',
    transform: [
      {
        rotate: '45deg',
      },
    ],
    marginTop: 50,
    marginRight: -30,
    width: 150,
    height: 20,
  },
})
