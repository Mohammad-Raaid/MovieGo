import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from './HomeStyles'
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import SearchSvg from '../../assets/svg/Search.svg'
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";
import { ScreenNames } from "../../global";
import FavoriteSvg from '../../assets/svg/favorite.svg'
import FilterSvg from '../../assets/svg/Filter.svg'
import { connect } from "react-redux";
const HomeScreen = ({ navigation, appliedFilter }) => {

    const [moviesList, setMoviesList] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const getAllMovies = async (page = 1) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=267178726d206932bb194c9ce3968384&language=en-US&page=${page}`)
            if (moviesList.length == 0) {
                setMoviesList(response.data?.results)
            } else {
                setMoviesList([...moviesList, ...response.data?.results])
            }
        } catch (error) {
            console.log("HomeScreen->getAllMovies", error.message);
        }
    }

    const renderMovies = ({ item }) => {
        return (
            <MovieCard item={item} moviesList={moviesList} />
        )
    }
    const goToMoviesSearch = () => {
        navigation.navigate(ScreenNames.SEARCH_MOVIES_SCREEN)
    }
    const goToFavoriteMovies = () => {
        navigation.navigate(ScreenNames.FAVORITE_MOVIES_SCREEN)
    }
    const goToFilter = () => {
        navigation.navigate(ScreenNames.FILTER_SCREEN)
    }
    const incrementPage = () => {
        setCurrentPage(currentPage + 1)
        getAllMovies(currentPage + 1)
    }

    function findCommonElement(array1, array2) {
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array2.length; j++) {
                if (array1[i].id === array2[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    React.useEffect(() => {
        if (appliedFilter.length > 0) {
            let movies = moviesList.filter(movie => {
                if (findCommonElement(appliedFilter, movie.genre_ids)) {
                    return movie
                }
            })
            setMoviesList(movies);
        }
    }, [appliedFilter])

    React.useEffect(() => {
        getAllMovies()
    }, [])
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar barColor="#FFFFFF" />
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={goToMoviesSearch} style={styles.searchBoxContainer}>
                    <SearchSvg />
                    <Text style={styles.searchText}>
                        Search Movies
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToFavoriteMovies} style={styles.favoriteSvgContainer}>
                    <FavoriteSvg />
                </TouchableOpacity>
                <TouchableOpacity onPress={goToFilter} style={styles.filterSvgContainer}>
                    <FilterSvg />
                </TouchableOpacity>
            </View>
            {
                moviesList.length == 0
                &&
                <Text style={styles.notFoundText}>
                    No Movies Found
                </Text>
            }
            <FlatList
                data={moviesList}
                numColumns={2}
                renderItem={renderMovies}
                onEndReachedThreshold={0.5}
                onEndReached={incrementPage}
                keyExtractor={(item, index) => JSON.stringify(item + index)}
                contentContainerStyle={styles.moviesListContainer}
            />
        </View>
    )
}

const mapStateToProps = state => ({
    appliedFilter: state.user.appliedFilter,
});

export default connect(mapStateToProps)(HomeScreen);