import { StyleSheet } from "react-native"
import { Constants } from "../../global"
export const styles = StyleSheet.create({
    filterContainer: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginVertical: Constants.CHANGE_BY_MOBILE_DPI(12),
        flexDirection: "row",
        alignItems: "center"
    },
    checkboxContainer: {
        height: Constants.CHANGE_BY_MOBILE_DPI(20),
        width: Constants.CHANGE_BY_MOBILE_DPI(20),
        borderWidth: Constants.CHANGE_BY_MOBILE_DPI(1.5),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(3)
    },
    checkboxCheckedContainer: {
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(10),
        fontWeight: "500"
    }
})