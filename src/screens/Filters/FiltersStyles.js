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
    filterContainer: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginVertical: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
    checkboxContainer: {
        height: Constants.CHANGE_BY_MOBILE_DPI(20),
        width: Constants.CHANGE_BY_MOBILE_DPI(20),
        borderWidth: Constants.CHANGE_BY_MOBILE_DPI(1.5),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(3)
    },
    checkboxCheckedContainer: {
        backgroundColor: "#000",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    favoriteSvgContainer: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(10),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    moviesListContainer: {
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
    applyButtonContainer: {
        height: Constants.CHANGE_BY_MOBILE_DPI(56),
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(30),
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(20),
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    applyButtonText: {
        color: "#FFF",
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        fontWeight: "600"
    }
})