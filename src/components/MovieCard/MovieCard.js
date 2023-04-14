import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./MovieCardStyles";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../../global";
import HeartSvg from '../../assets/svg/Heart.svg'
import HeartFillSvg from '../../assets/svg/HeartFill.svg'
import { connect } from "react-redux";
import * as UserActions from '../../redux/actions/userActions'
const MovieCard = ({ item, favoriteMovies, dispatch, moviesList }) => {
    const [isFavorite, setIsFavorite] = React.useState(false)
    const navigation = useNavigation()
    const goToDetails = () => {
        navigation.navigate(ScreenNames.MOVIE_DETAILS_SCREEN, { id: item.id })
    }
    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(UserActions.removeFavorite(item.id))
        } else {
            dispatch(UserActions.addToFavorite(item))
        }
        setIsFavorite(!isFavorite)
    }

    React.useEffect(() => {
        if (favoriteMovies.filter(movie => movie.id === item.id).length > 0) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }, [moviesList])
    return (
        <TouchableOpacity onPress={goToDetails} style={styles.movieCardContainer}>
            <TouchableOpacity style={styles.favoriteHeartContainer} onPress={toggleFavorite}>
                {
                    isFavorite
                        ?
                        <HeartFillSvg />
                        :
                        <HeartSvg />
                }
            </TouchableOpacity>
            {
                item.poster_path
                    ?
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}` }}
                        resizeMode="stretch"
                        style={styles.moviePosterImage}
                    />
                    :
                    <Image
                        source={require('../../assets/images/defaultImage.webp')}
                        resizeMode="stretch"
                        style={styles.moviePosterImage}
                    />
            }
        </TouchableOpacity>
    )
}
const mapStateToProps = state => ({
    favoriteMovies: state.user.favoriteMovies,
});

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);