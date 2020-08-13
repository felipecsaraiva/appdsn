import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1264d1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 310
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
        color: '#4f4f4f',
        fontSize: 24,
        lineHeight: 34,
        marginTop: 20,
        marginLeft: 40
    },
    subTitle: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#898a8d',
        fontSize: 14,
        lineHeight: 24,
        marginLeft: 40,
        marginTop: 20,
        marginBottom: 20
    },
    inputBlock: {
        display: 'flex',
        marginLeft: 40,
        marginRight: 40
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
        borderRadius: 10
    },
    button: {
        backgroundColor: '#1264d1',
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FCFCFC',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        lineHeight: 50
    },
    backButton: {
        marginHorizontal: 40,
        marginTop: 20
    },
    backButtonText: {

    }
});

export default styles;