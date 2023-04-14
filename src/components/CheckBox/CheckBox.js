import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./CheckBoxStyles";
import CheckSvg from "../../assets/svg/check.svg"
const CheckBox = ({ item, setSelectedFilter, selectedFilter }) => {
    const [isChecked, setIsChecked] = React.useState(false)
    const toggleCheck = () => {
        if (!isChecked) {
            setSelectedFilter([...selectedFilter, item])
        } else {
            setSelectedFilter(selectedFilter.filter(filter => filter.id != item.id))
        }
        setIsChecked(!isChecked)
    }

    React.useEffect(() => {
        if (selectedFilter.filter(filter => filter.id == item.id).length > 0) {
            setIsChecked(true);
        }
    }, [selectedFilter])

    return (
        <View style={styles.filterContainer}>
            <TouchableOpacity onPress={toggleCheck} style={[styles.checkboxContainer, isChecked ? styles.checkboxCheckedContainer : {}]}>
                {
                    isChecked
                    &&
                    <CheckSvg />
                }
            </TouchableOpacity>
            <Text style={styles.checkboxText}>
                {item.name}
            </Text>
        </View>
    )
}

export default (CheckBox);