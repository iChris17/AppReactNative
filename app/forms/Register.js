import React, { Component } from 'react'
import t from "tcomb-form-native";
import formsValidation from "../utils/Validation";

export const RegisterStruct = t.struct({
    name:t.String,
    email:formsValidation.email,
    password:formsValidation.password,
    passwordConfirmator: formsValidation.password
});

export const RegisterOptions={
    fields:{
        name:{
            label:"Nombre (*)",
            placeholder:"Escribe tu nombre",
            error:"Nombre Invalido"
        },
        email:{
            label:"Email (*)",
            placeholder:"Escribe tu email",
            error:"Email invalido"
        },
        password:{
            label:"Password (*)",
            placeholder:"Password",
            error:"Password invalido",
            password:true,
            secureTextEntry:true
        },
        passwordConfirmator:{
            label:"Password (*)",
            placeholder:"Password",
            error:"Password invalido",
            password:true,
            secureTextEntry:true
        }
    }
}