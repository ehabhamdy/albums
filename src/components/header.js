// import libraries required to create a Component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Create a functional Component
// const Header = (props) => {
//   // here we do destructuring to remove duplicate reference to the styles object
//   const { textStyle, viewStyle } = styles;
//   return (
//     <View style={viewStyle}>
//       <Text style={textStyle}>{props.headerText}</Text>
//     </View>
//   );
// };

// refactoring to use a class based component
class Header extends Component {
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
      <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
      fontSize: 20,
      color: 'black'
  }
};

// Make the Component available to other parts of the app
export default Header;
