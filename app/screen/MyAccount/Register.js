import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import t from 'tcomb-form-native';
import Toast,{DURATION} from 'react-native-easy-toast';

const Form = t.form.Form;
import {RegisterStruct, RegisterOptions} from '../../forms/Register';

import * as firebase from 'firebase';

export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions,
      formData: {
        name: '',
        email: '',
        password: '',
        passwordConfirmator: '',
      },
      formErrorMessage: '',
    };
  }

  handledonPress = () => {
 
    const {password, passwordConfirmator} = this.state.formData;
    console.log(this.state.formData);
    if (password === passwordConfirmator) {
      const validate = this.refs.registerForm.getValue();
      if (validate) {
        this.setState({
          formErrorMessage: '',
        });
        firebase
          .auth()
          .createUserWithEmailAndPassword(validate.email, validate.password)
          .then(success => {
            this.refs.toast.show('Registro Completo',500,()=>{
              this.props.navigation.navigate('Account');
            });
          })
          .catch(err => {
            this.refs.toast.show('El email ya esta en uso',2000);
          });
      } else {
        this.setState({
          formErrorMessage: 'Formulario Invalido',
        });
      }
    } else {
      this.setState({
        formErrorMessage: 'Las contrasenas no coinciden',
      });
    }
  };

  onChangeRegister = formvalue => {
    this.setState({
      formData: formvalue,
    });
  };

  render() {
    const formErrorMessage = this.state.formErrorMessage;
    return (
      <View style={styles.viewBody}>
        <Form
          ref="registerForm"
          type={this.state.registerStruct}
          options={this.state.registerOptions}
          value={this.state.formData}
          onChange={formValue => this.onChangeRegister(formValue)}
        />
        <Button
          buttonStyle={styles.ButtonRegisterContainer}
          title="Unirse"
          onPress={() => this.handledonPress()}
        />
        <Text style={styles.formErrorMessage}>{formErrorMessage}</Text>
        <Toast
                    ref="toast"
                    style={{backgroundColor:'black'}}
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'white'}}
                />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  ButtonRegisterContainer: {
    backgroundColor: '#00a680',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  formErrorMessage: {
    color: '#f00',
    textAlign: 'center',
    marginTop: 30,
  },
});
