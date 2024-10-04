import {  StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../components/Header.jsx'
import { colors } from '../constants/colors'
import SongCardWithCategory from '../components/SongCardWithCategory.jsx'



const HomeScreen = () => {
    return (
        <View style={styles.container}>
        <Header/>
        <SongCardWithCategory/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        borderWidth:2,
        borderColor:"pink"
    },
    
})