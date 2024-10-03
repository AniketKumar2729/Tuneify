import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../constants/colors'



const HomeScreen = () => {
    return (
        <View style={styles.container}>
        <Header/>
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1
    },
})