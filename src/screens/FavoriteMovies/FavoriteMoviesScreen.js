import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from './FavoriteMoviesStyles'
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import BackSvg from '../../assets/svg/BackBlack.svg'
import MovieCard from "../../components/MovieCard/MovieCard";
import { connect } from "react-redux";
const FavoriteMoviesScreen = ({ navigation, favoriteMovies }) => {

    const renderMovies = ({ item }) => {
        return (
            <MovieCard item={item} />
        )
    }
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar barColor="#FFFFFF" />
            <TouchableOpacity onPress={goBack} style={styles.headerContainer}>
                <BackSvg fill="#000" />
                <Text style={styles.headerText}>
                    Favorite Movies
                </Text>
            </TouchableOpacity>
            <FlatList
                data={favoriteMovies}
                numColumns={2}
                renderItem={renderMovies}
                keyExtractor={(item, index) => JSON.stringify(item + index)}
                contentContainerStyle={styles.moviesListContainer}
            />
        </View>
    )
}

const mapStateToProps = state => ({
    favoriteMovies: state.user.favoriteMovies,
});

export default connect(mapStateToProps)(FavoriteMoviesScreen);