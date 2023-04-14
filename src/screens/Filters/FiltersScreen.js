import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from './FiltersStyles'
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import BackSvg from '../../assets/svg/BackBlack.svg'
import MovieCard from "../../components/MovieCard/MovieCard";
import { connect } from "react-redux";
import CheckSvg from "../../assets/svg/check.svg"
import CheckBox from "../../components/CheckBox/CheckBox";
import * as UserActions from '../../redux/actions/userActions'
const FiltersScreen = ({ navigation, appliedFilter, dispatch }) => {

    const filters = [
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 9648,
            "name": "Mystery"
        }
    ]

    const [selectedFilter, setSelectedFilter] = React.useState([])
    const renderMovies = ({ item }) => {
        return (
            <CheckBox item={item} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
        )
    }

    const applyFilter = () => {
        dispatch(UserActions.setFilters(selectedFilter))
        goBack()
    }
    const goBack = () => {
        navigation.goBack()
    }
    React.useEffect(() => {
        setSelectedFilter(appliedFilter)
    }, [])
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar barColor="#FFFFFF" />
            <TouchableOpacity onPress={goBack} style={styles.headerContainer}>
                <BackSvg fill="#000" />
                <Text style={styles.headerText}>
                    Filters
                </Text>
            </TouchableOpacity>
            <FlatList
                data={filters}
                renderItem={renderMovies}
                keyExtractor={(item, index) => JSON.stringify(item + index)}
                contentContainerStyle={styles.moviesListContainer}
            />
            <TouchableOpacity onPress={applyFilter} style={styles.applyButtonContainer}>
                <Text style={styles.applyButtonText}>
                    Apply
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = state => ({
    appliedFilter: state.user.appliedFilter,
});

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);