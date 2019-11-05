import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Image, Button} from 'react-native-elements';
import * as firebase from 'firebase';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import {LoginStruct, LoginOptions} from '../../forms/Login';
import Toast, {DURATION} from 'react-native-easy-toast';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginStruct: LoginStruct,
      loginOptions: LoginOptions,
      loginData: {
        email: '',
        password: '',
      },
      loginError: '',
    };
  }

  onChange = formValue => {
    this.setState({
      loginData: formValue,
    });
  };

  onPress = () => {
    const validate = this.refs.loginForm.getValue();
    if (!validate) {
      this.setState({
        loginError: 'Error en el formulario',
      });
    } else {
      console.log('Logeando...');
      this.setState({
        loginError: '',
      });

      firebase
        .auth()
        .signInWithEmailAndPassword(validate.email, validate.password)
        .then(() => {
          this.refs.toastLogin.show("Login Correcto",1000,()=>{
            this.props.navigation.goBack();
          })
        })
        .catch(err => {
          this.refs.toastLogin.show(err.code,1000);
        });
    }
  };

  render() {
    const {loginStruct, loginOptions, loginError} = this.state;

    return (
      <View style={styles.viewBody}>
        <View style={styles.containerlogo}>
          <Image
            source={require('../../../assets/images/5-tenedores-letras-icono-logo.png')}
            style={styles.Logo}
            PlaceholderContent={<ActivityIndicator />}
            resizeMode="contain"
          />
        </View>
        <View style={styles.viewForm}>
          <Form
            ref="loginForm"
            type={loginStruct}
            options={loginOptions}
            value={this.state.loginData}
            onChange={formValue => this.onChange(formValue)}
          />
          <Button
            title="Login"
            buttonStyle={styles.buttonstyle}
            onPress={() => this.onPress()}
          />
          <Text style={styles.error}>{loginError}</Text>
        </View>
        <Toast
          ref="toastLogin"
          position="bottom"
          positionValue={500}
          fadeInDuration={1000}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{color: 'white'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  containerlogo: {
    alignItems: 'center',
  },
  viewBody: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
  },
  Logo: {
    width: 200,
    height: 150,
  },
  buttonstyle: {
    backgroundColor: '#00a680',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  viewForm: {
    marginTop: 50,
  },
});
