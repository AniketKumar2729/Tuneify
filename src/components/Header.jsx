import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors.js'
import { spacing,iconSizes } from '../constants/dimension.js';
//icons
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign"
const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Entypo name={"menu"} color={colors.iconPrimary} size={iconSizes.lg} />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name={"search1"} color={colors.iconPrimary} size={iconSizes.lg} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        borderWidth: 4,
        borderColor: "orange",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg
    }
})