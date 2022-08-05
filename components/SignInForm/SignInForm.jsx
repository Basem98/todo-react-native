import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import formStyles from '../../styles/formStyles';
import PurpleSea from '../../assets/bg.jpg'

const SignInForm = ({ navigation }) => {
  const initialUserValues = {
    name: '',
    password: '',
  };
  const initialErrors = {
    name: '',
    password: ''
  }
  const [formState, setFormState] = useState({ ...initialUserValues });
  const [formErrors, setFormErrors] = useState({ ...initialErrors });
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (newState, stateFieldName) => {
    let newFormState = formState;
    newFormState[stateFieldName] = newState;
    switch (stateFieldName) {
      case 'name': {
        if (newState.length <= 4) {
          initialErrors.name = 'Your username must be more than 4 characters long';
        } else {
          initialErrors.name = '';
        }
        setFormErrors({ ...initialErrors });
        break;
      }
      case 'password': {
        if (newState.length <= 8) {
          initialErrors.password = 'Your password must be more than 8 characters long';
        } else {
          initialErrors.password = '';
        }
        setFormErrors({ ...initialErrors });
      }
      default: break;
    }
    setFormState({ ...newFormState });
  }

  const handleSubmit = () => {
    if (formState.name.length > 4 && formState.password.length > 8) {
      navigation.navigate('ToDos', { username: formState.name });
    } else {
      showAlert()
    }
  }

  const showAlert = () => Alert.alert(
    'Invalid Data',
    `${formErrors.name || formErrors.password || 'You must fill your form'}!`
  )

  return (
    <ImageBackground source={PurpleSea} resizeMode="cover" style={formStyles.img}>
      <View style={formStyles.container}>
        <View style={formStyles.formBox}>
          <Text style={formStyles.header}>Sign In</Text>
          <TextInput style={formStyles.input} placeholder='Username' onChangeText={(text) => handleChange(text, 'name')} />
          <Text style={formStyles.errorTxt}>{formErrors.name}</Text>
          <TextInput style={formStyles.input} secureTextEntry={true} placeholder='Password' onChangeText={(text) => handleChange(text, 'password')} />
          <Text style={formStyles.errorTxt}>{formErrors.password}</Text>
          <View style={formStyles.btn} >
            <TouchableWithoutFeedback onPress={handleSubmit}>
              <Text>Submit</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default SignInForm;