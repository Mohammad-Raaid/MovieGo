import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from './MovieDetailsStyles'
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import BackSvg from '../../assets/svg/Back.svg'
import axios from "axios";

const MovieDetailsScreen = ({ navigation, route }) => {

    const [movieDetails, setMovieDetails] = React.useState(null)
    const getMovieDetails = async (query, page) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=267178726d206932bb194c9ce3968384`)
            setMovieDetails(response.data)
        } catch (error) {
            console.log("MovieDetailsScreen->getMovieDetails", error.message);
        }
    }

    const goBack = () => {
        navigation.goBack()
    }

    React.useEffect(() => {
        // getMovieDetails()
    }, [])
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isLightBar isTopSpace={false} />
            <View
                style={styles.movieBannerImageContainer}
            >
                <TouchableOpacity onPress={goBack} style={styles.backIconContainer}>
                    <BackSvg />
                </TouchableOpacity>
                <View style={styles.movieBannerLayer} />
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieDetails?.backdrop_path}` }}
                    style={styles.movieBannerImageContainer}
                />
            </View>
            <View style={styles.movieDetailsContainer}>
                <Text style={styles.movietitleText}>
                    {movieDetails?.title}
                </Text>
                <Text style={styles.movieReleaseDateText}>
                    Released On:- {movieDetails?.release_date}
                </Text>
                <Text style={styles.movieDescriptionText}>
                    {movieDetails?.overview}
                </Text>
            </View>
        </View>
    )
}

export default MovieDetailsScreen;