import { StyleSheet } from "react-native"
import { Constants } from "../../global"
export const styles = StyleSheet.create({
    movieCardContainer: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(12),
        height: Constants.MOCKUP_WIDTH / 2,
        width: (Constants.SCREEN_WIDTH / 2) - Constants.CHANGE_BY_MOBILE_DPI(36),
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginVertical: Constants.CHANGE_BY_MOBILE_DPI(12),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(10),
        overflow: "hidden"
    },
    moviePosterImage: {
        height: "100%",
        width: "100%",
    },
    favoriteHeartContainer: {
        position: "absolute",
        right: Constants.CHANGE_BY_MOBILE_DPI(10),
        top: Constants.CHANGE_BY_MOBILE_DPI(10),
        zIndex: 1
    }
})