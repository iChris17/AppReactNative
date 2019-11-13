import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Button, Image} from 'react-native-elements';

export default class MyAccountGuest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {goToScreen} = this.props;
    return (
      <View style={styles.viewbody}>
        <Image
          source={require('../../../assets/images/image-my-account-guest-01.jpg')}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}>Consulta tu perfil</Text>
        <Text style={styles.description}>
          Busca y visualiza los mejores restaurantes de una forma sencilla, vota
          cual te ha gustado mas
        </Text>
        <Button
          title="Ver tu perfil"
          buttonStyle={styles.btnProfile}
          onPress={() => goToScreen('Login')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewbody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  image: {
    height: 300,
    marginBottom: 20,
    width: 400,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  btnProfile: {
    width: 300,
    backgroundColor: '#00a680',
  },
});
