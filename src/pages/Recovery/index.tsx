import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ImageBackground, TextInput, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import logoImg from '../../../assets/images/logo.png';
import backImg from '../../../assets/images/background.png';

function Recovery() {
    return (
        <KeyboardAvoidingView behavior="position">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View style={styles.container}>
                        <ImageBackground source={backImg} style={styles.background}>
                            <Image source={logoImg} style={styles.logo} />
                        </ImageBackground>
                    </View>
                    
                    <RectButton style={styles.backButton}>
                        <Text style={styles.backButtonText}>
                            {`<--`}
                        </Text>
                    </RectButton>
                    <View style={styles.loginContainer}>
                        <Text style={styles.title}>Esqueceu sua senha?</Text>
                        <Text style={styles.subTitle}>Informe seu e-mail para recuperá-la.</Text>

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
                        <RectButton style={styles.button}>
                            <Text style={styles.submitButtonText}>
                                Enviar
                            </Text>
                        </RectButton>
                    </View>
                </View>
            </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
    )
}

export default Recovery;