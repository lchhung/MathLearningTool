import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerViewOne: {
        flexDirection: 'column',
        borderWidth: 5,
        width: '90%',
        height: '75%',
        left: 20,
        top: 60,
        paddingLeft: 5,
        paddingTop: 5,
        borderColor: 'grey',
        borderRadius: 15,
        textAlign: 'center',
    },
    buttonTextSize: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        padding: 0,
        alignItems: 'center',
        textAlign: 'center',
    },
    buttonView: {
        //flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        margin: 5,
        backgroundColor: '#04444b',
        borderRadius: 20,
        width: '22%',
        height: '90%',
    },
    titleTextSize: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 30,
        // alignItems: 'center',
        // textAlign: 'center',
    }
})