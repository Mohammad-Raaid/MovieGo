import { StyleSheet } from "react-native"
import { Constants } from "../../global"
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    backIconContainer: {
        position: "absolute",
        left: Constants.CHANGE_BY_MOBILE_DPI(24),
        top: Constants.CHANGE_BY_MOBILE_DPI(40),
        zIndex: 2
    },
    movieBannerLayer: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#00000050",
        zIndex: 1
    },
    movieBannerImageContainer: {
        height: Constants.SCREEN_WIDTH / 1.5,
        width: Constants.SCREEN_WIDTH,
        resizeMode: "cover"
    },
    movieDetailsContainer: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    movietitleText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(18),
        fontWeight: "700",
    },
    movieReleaseDateText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontWeight: "500",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(5)
    },
    movieDescriptionText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontWeight: "400",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(5)
    },
})