import { TouchableOpacity } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { iconSizes } from "../constants/dimension"
import { colors } from "../constants/colors"
export const PreviousButton = ({ size = iconSizes.md }) => {
    return (
        <>
            <TouchableOpacity activeOpacity={0.85}>
                <FontAwesome name={"backward"} size={size} color={colors.iconPrimary} />
            </TouchableOpacity>
        </>
    )
}
export const PlayPauseButton = ({ size = iconSizes.md }) => {
    let isPlaying= true;
    return (
        <>
            <TouchableOpacity activeOpacity={0.85}>
                <FontAwesome name={isPlaying?"pause":"play"} size={size} color={colors.iconPrimary} />
            </TouchableOpacity>
        </>
    )
}
export const NextButton = ({ size = iconSizes.md }) => {
    return (
        <>
            <TouchableOpacity activeOpacity={0.85}>
                <FontAwesome name={"forward"} size={size} color={colors.iconPrimary} />
            </TouchableOpacity>
        </>
    )
}
