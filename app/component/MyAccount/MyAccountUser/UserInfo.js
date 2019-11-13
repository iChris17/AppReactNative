import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';

import * as firebase from 'firebase';

export default class UserInfo extends Component {
  constructor(state) {
    super(state);

    this.state = {
      userInfo: {
        displayName: '',
        email: '',
        photoUrl: '',
      },
    };
  }

  async componentDidMount() {
    await this.getUserInfo();
  }

  getUserInfo = async () => {
    const user = firebase.auth().currentUser;
    await user.providerData.forEach(userInfo => {
      this.setState({
        userInfo,
      });
    });
    console.log(this.state.userInfo);
  };

  checkUserAvatar = photoUrl => {
    return photoUrl
      ? photoUrl
      : 'https://api.adorable.io/avatars/285/abott@adorable.png';
  };

  render() {
    const {displayName, email, photoUrl} = this.state.userInfo;

    return (
      <View style={styles.viewUserInfo}>
        <Avatar
          rounded
          size="large"
          source={{uri: this.checkUserAvatar(photoUrl)}}
          containerStyle={styles.userInfoAvatar}
        />
        <Text style={styles.displayName}>{displayName}</Text>
        <Text>{email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: 'center',
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  userInfoAvatar: {
    marginRight: 30,
    marginTop: 30,
    marginBottom: 10,
  },
  displayName: {
    fontWeight: 'bold',
  },
});
