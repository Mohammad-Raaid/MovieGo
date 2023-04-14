import { StyleSheet } from "react-native"
import { Constants } from "../../global"
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    searchBoxContainer: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        backgroundColor: "#F2F3F2",
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
        color: "#7C7C7C",
        flex: 1
    },
    moviesListContainer: {
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
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

    }
})