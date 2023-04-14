import React from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './SearchMoviesStyles'
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import SearchSvg from '../../assets/svg/Search.svg'
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";
import { ScreenNames } from "../../global";
const SearchMoviesScreen = ({ navigation }) => {

    const [moviesList, setMoviesList] = React.useState([])
    const [searchText, setSearchText] = React.useState('')
    const [currentPage, setCurrentPage] = React.useState(1)
    const getAllMovies = async (query, page) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=267178726d206932bb194c9ce3968384&query=${query}&page=${page}`)
            if (page == 1) {
                setMoviesList(response.data?.results)
            } else {
                setMoviesList([...moviesList, ...response.data?.results])
            }
        } catch (error) {
            console.log("SearchMoviesScreen->getAllMovies", error.message);
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


    const doSearch = (text) => {
        if (text.length > 3) {
            setCurrentPage(1)
            setSearchText(text)
            getAllMovies(text, 1)
        } else if (text.length == 0) {
            setMoviesList([])
        }
    }
    const incrementPage = () => {
        setCurrentPage(currentPage + 1)
        getAllMovies(searchText, currentPage + 1)
    }

    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar barColor="#FFFFFF" />
            <TouchableOpacity onPress={goToMoviesSearch} style={styles.searchBoxContainer}>
                <SearchSvg />
                <TextInput
                    onChangeText={doSearch}
                    placeholder="Search Movies"
                    style={styles.searchText}
                >
                    {searchText}
                </TextInput>
            </TouchableOpacity>
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

export default SearchMoviesScreen;