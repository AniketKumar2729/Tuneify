import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongCard from './SongCard'
import { fontSizes, spacing } from '../constants/dimension'
import { colors } from '../constants/colors'

const SongCardWithCategory = () => {
    return (
        <>
        <View style={styles.container}>
            
            <Text style={styles.headingText}>Recommended for you</Text>
            <FlatList data={[1,2]} renderItem={SongCard} horizontal={true} ItemSeparatorComponent={<View style={{marginHorizontal:spacing.md}}/>} 
                contentContainerStyle={{paddingHorizontal:spacing.md}}
            />
        </View>
        </>
    )
}

export default SongCardWithCategory

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:"blue",
       
    },
    headingText:{
        fontSize:fontSizes.lg,
        color:colors.textPrimary,
        marginVertical:spacing.md,
        paddingVertical:spacing.md,
        paddingHorizontal:spacing.md
    }
})