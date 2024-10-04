import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import { fontSizes, iconSizes, spacing } from '../constants/dimension';
import { NextButton, PlayPauseButton, PreviousButton } from './PlayerController';
let imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s";
const FloatingPlayer = () => {
    return (
        <TouchableOpacity activeOpacity={0.85} style={styles.box}>
            <Image source={{ uri: imageUrl }} style={styles.coverImage} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Song Name</Text>
                <Text style={styles.artist}>Artist Name</Text>
            </View>
            <View style={styles.playerControllerContainer}>
                <PreviousButton size={iconSizes.md} />
                <PlayPauseButton size={iconSizes.md}/>
                <NextButton  size={iconSizes.md}/>
            </View>
        </TouchableOpacity>
    )
}

export default FloatingPlayer

const styles = StyleSheet.create({
    box: {
        borderWidth: 2,
        borderColor: "red",
        flexDirection: "row",
        alignItems: "center"

    },
    coverImage: {
        height: 70,
        width: 70
    },
    title: {
        color: colors.textPrimary,
        fontSize: fontSizes.lg
    },
    titleContainer: {
        flex: 1,
        paddingHorizontal: spacing.sm
    },
    artist: {
        color: colors.textSecondary,
        fontSize: fontSizes.md
    },
    playerControllerContainer: {
        borderWidth: 2,
        borderColor: "yellow",
        flexDirection:"row",
        gap:30,
        paddingRight:spacing.xs
    }
})