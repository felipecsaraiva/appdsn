import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1264d1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 250
    },
    background: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        resizeMode: 'contain',
    },
    loginContainer: {
        backgroundColor: '#F0F0F0'
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#1264d1',
        fontSize: 24,
        lineHeight: 34,
        marginTop: 40,
        marginLeft: 40
    },
    inputBlock: {
        display: 'flex',
        margin: 40
    },
    input: {
        backgroundColor: '#FAFAFC',
        width: '100%',
        lineHeight: 40,
        color: '#181818',
        padding: 24,
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    inputPassword: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    button: {
        backgroundColor: '#1264d1',
        borderRadius: 10,
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FCFCFC',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        lineHeight: 50
    }
});

export default styles;