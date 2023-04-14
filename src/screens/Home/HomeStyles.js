import { StyleSheet } from "react-native"
import { Constants } from "../../global"
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    searchBoxContainer: {
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(24),
        backgroundColor: "#F2F3F2",
        flex: 1,
        height: Constants.CHANGE_BY_MOBILE_DPI(44),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(5),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(20),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(10),
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
    searchText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(10),
        fontWeight: "500",
        color: "#7C7C7C"
    },
    favoriteSvgContainer: {
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(10),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    filterSvgContainer: {
        marginRight: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    notFoundText: {
        textAlign: "center",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10),
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        fontWeight: "500"
    },
    moviesListContainer: {
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
})