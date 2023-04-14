import { StyleSheet } from "react-native"
import { Constants } from "../../global"
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        height: Constants.CHANGE_BY_MOBILE_DPI(44)
    },
    headerText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(18),
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(10),
        fontWeight: "600",
        color: "#000"
    },
    favoriteSvgContainer: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(10),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    moviesListContainer: {
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
})