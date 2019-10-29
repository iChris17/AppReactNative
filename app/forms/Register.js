import React, { Component } from 'react'
import t from "tcomb-form-native";
import formsValidation from "../utils/Validation";
import inputTemplate from '../forms/templates/input';

export const RegisterStruct = t.struct({
    name:t.String,
    email:formsValidation.email,
    password:formsValidation.password,
    passwordConfirmator: formsValidation.password
});

export const RegisterOptions={
    fields:{
        name:{
            template: inputTemplate,
            config:{
                placeholder:"Escribe tu nombre",
                iconType:"material-community",
                iconName:"account-outline"
            }
        },
        email:{           
            template: inputTemplate,
            config:{
                placeholder:"Escribe tu correo",
                iconType:"material-community",
                iconName:"at"
            }
        },
        password:{
            template: inputTemplate,
            config:{
                placeholder:"Password",
                password:true,
                secureTextEntry:true,
                iconType:"material-community",
                iconName:"lock-outline"
            }
        },
        passwordConfirmator:{
            template: inputTemplate,
            config:{
                placeholder:"Repite tu Password",
                password:true,
                secureTextEntry:true,
                iconType:"material-community",
                iconName:"lock-reset"
            }
        }
    }
}