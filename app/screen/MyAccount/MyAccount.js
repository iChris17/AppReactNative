import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import * as firebase from 'firebase';

import MyAccountGuest from '../../component/MyAccount/MyAccountGuest';
import MyAccountUser from '../../component/MyAccount/MyAccountUser/index';

export default class MyAccount extends Component {
  constructor() {
    super();

    this.state = {
      login: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          login: true,
        });
      } else {
        this.setState({
          login: false,
        });
      }
    });
  }

  LogOut = () => {
    firebase.auth().signOut();
  };

  goToScreen = nameScreen => {
    this.props.navigation.navigate(nameScreen);
  };
  render() {
    const {login} = this.state;

    if (login) {
      return (
        /*<View style={styles.viewBody}>
          <Text>Logueado</Text>
          <Button title="Cerrar Sesion" onPress={() => this.LogOut()} />
        </View>*/
<MyAccountUser/>
      );
    } else {
      return <MyAccountGuest goToScreen={this.goToScreen} />;
    }
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
