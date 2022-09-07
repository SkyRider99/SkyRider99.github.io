import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    background: {
        backgroundColor: 'lightblue',
        flex: 1,
        flexDirection: 'column',
        flexGrow: 1,
    },
    container: {
        marginTop: 24,
        marginLeft: 24,
        marginRight: 24,
    },
    listTextStyle: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 12,
        marginBottom: 12,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'green',
        padding: 5,
        textTransform: 'uppercase', 
    },

    detailsTextStyle: {
        fontSize: 21,
        textAlign: 'left',
        color: 'black',
        marginBottom: 13,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginTop: 3,
        marginBottom: 10,
        borderWidth: 6,
        borderRadius: 6,
        padding: 10,
        backgroundColor: 'white',
    },

    ramKort: {
        borderWidth: 10,
        borderRadius: 10,
        marginTop: 3,
        marginBottom: 10,
        padding: 12,
        backgroundColor: 'green',
    },

    rubrik: {
        color: 'green',
    },

    contentStyle:{
        flex: 1,
        marginTop: 24,
        marginLeft: 24,
        marginRight: 24,
    },

    imageStyle: {
        width: 250,
        height: 250,
        marginTop: 50,
    },

    footerTextStyle: {
        fontSize: 12,
        fontStyle: 'italic',
        justifyContent: 'flex-end',
        marginTop: 24,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24,
    },

    navigationOptions: {
        textTransform: 'uppercase',
        textAlign: 'center',
    },

    footerButtonViewStyle: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexGrow: 1,
    },
});

export default styles

