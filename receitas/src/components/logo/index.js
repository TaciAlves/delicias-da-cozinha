import { Text, StyleSheet } from 'react-native'

import { View} from 'moti'

export function Logo() {
    return (
        <View style={styles.logoArea}
        from={{
            opacity:0,
            translateX: -50,
        }}
        animate={{
            opacity:1,
            translateX: 0,
        }}
        transition={{
            type: 'spring',
            duration: 900
        }}
        >
            <Text style={styles.logo}>Delícias da Cozinha</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    logoArea:{
        backgroundColor: "#F47E8E",
        alignSelf: "flex-start",
        padding: 12,
        paddingLeft: 18,
        paddingRight: 22,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8
    },
    logo:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    }
})