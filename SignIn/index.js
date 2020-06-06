
import React, {component} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from "prop-types";
import { TextField } from 'react-native-material-textfield';
import PasswordInputText from 'react-native-hide-show-password-input';

import { AuthContext } from '../context';

import { } from './styles';

import firebase from 'firebase';


export default SignIn = ({ navigation }) => {

  const { signIn } = React.useContext(AuthContext)

  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(textEmail, textPassword)
      .then(() => signIn())
      .catch(error => alert(error))
      
  }
  return (
    <View style={styles.container}>
      <View style={styles.view_fields}>
        <TextInput
          style={styles.input_auth}
          onChangeText={text => setTextEmail(text.toLowerCase())}
          value={textEmail} />

        <TextInput
          style={styles.input_auth}
          onChangeText={text => setTextPassword(text)}
          value={textPassword} secureTextEntry={true} />
      </View>
      <Button title="Acessar" onPress={() => handleSignIn()} />
      <Button title="Criar Conta" onPress={() => navigation.push("CreateAccount")} />
      <Button title="Login Facebook" onPress={() => navigation.push("LoginFacebook")} />
    </View>
  )
}
/*class PasswordInputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        icEye: 'visibility-off',
        isPassword: true
    }
}

getRef = (ref) => {
    if (this.props.getRef)
        this.props.getRef(ref)
}

changePwdType = () => {
    const { isPassword } = this.state;
    // set new state value
    this.setState({
        icEye: isPassword ? "visibility" : "visibility-off",
        isPassword: !isPassword,
    });

};

render() {
    const { iconSize, iconColor, label, style } = this.props;
    const { icEye, isPassword } = this.state;

    return (
        <View style={style}>
            <TextField
                {...this.props}
                ref={this.getRef}
                secureTextEntry={isPassword}
                label={label} />
            <Icon style={styles.icon}
                name={icEye}
                size={iconSize}
                color={iconColor}
                onPress={this.changePwdType}
            />
        </View>
    );
}
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  input_auth: {
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    borderRadius: 3,
    margin: 10,
    marginTop: 0,
    padding: 4
  },
  view_fields: {
    flexDirection: 'column',
    width: '100%',
    height: 100
  },
  icon: {
    position: 'absolute',
    top: 33,
    right: 0
}
});

/*PasswordInputText.defaultProps = {
  iconSize: 25,
  label: 'Password',
  iconColor: "#222222"
}

PasswordInputText.propTypes = {
  iconSize: PropTypes.number,
  label: PropTypes.string,
  iconColor: PropTypes.string
};

export default PasswordInputText;*/
