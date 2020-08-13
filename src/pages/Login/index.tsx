import React, { useState } from 'react';
import { View, Image, Text, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TextInput, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import logoImg from '../../../assets/images/logo.png';
import backImg from '../../../assets/images/background.png';

function Login() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation();
    function passwordRecoveryHandlePress() {
        navigation.navigate('Recovery');
    }

    return (
        <KeyboardAvoidingView behavior="position">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View style={styles.container}>
                        <ImageBackground source={backImg} style={styles.background}>
                            <Image source={logoImg} style={styles.logo} />
                        </ImageBackground>
                    </View>
                    <View style={styles.loginContainer}>
                        <Text style={styles.title}>Fazer login</Text>
                    </View>
                    <View style={styles.inputBlock}>
                        <TextInput 
                            style={styles.input}
                            placeholder="E-mail" 
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholderTextColor="#898A8D"
                        />
                        <TextInput 
                            style={[styles.input,styles.inputPassword]}
                            placeholder="Senha" 
                            secureTextEntry
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholderTextColor="#898A8D"
                        />
                        <View style={styles.bottomContent}>
                            <View style={styles.checkArea}>
                            <CheckBox
                                tintColors={{ true: '#1264d1', false: '#898a8d' }}
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue: boolean) => setToggleCheckBox(newValue)}
                            />
                            <Text style={styles.remember}>Lembrar-me</Text>
                            </View>
                            <Text 
                                style={styles.recuperarSenha}
                                onPress={passwordRecoveryHandlePress}
                            >
                                Recuperar senha
                            </Text>
                        </View>
                        <RectButton style={styles.button}>
                            <Text style={styles.submitButtonText}>
                                Entrar
                            </Text>
                        </RectButton>
                    </View>
                </View>
            </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
    );
}

export default Login;