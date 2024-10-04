import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import { fontSizes, spacing } from '../constants/dimension';

const imageUrl = "https://th.bing.com/th/id/OIG4.hb6x6NsHBTvbDGaD13Ua";

const SongCard = () => {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <Image source={{ uri: imageUrl }} style={styles.coverImage} />
            <Text style={styles.title}>Song name</Text>
            <Text style={styles.artist}>Artist Name</Text>
        </TouchableOpacity>
    )
}

export default SongCard

const styles = StyleSheet.create({
    cardContainer: {
        height: 270,
        width:250,
        justifyContent:"center",
        alignItems:"center"
    },
    coverImage: {
        height: 200, // fixed size in pixels
        width: 240,  // fixed size in pixels
        borderRadius: 10,

    },
    title: {
        color: colors.textPrimary,
        fontSize:fontSizes.lg,
        textAlign: "center",
        padding:spacing.sm
    },artist:{
        color:colors.textSecondary,
        textAlign:"center",
        fontSize:fontSizes.sm
    }
})