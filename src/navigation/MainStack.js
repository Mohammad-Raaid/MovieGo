import React from "react";
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import { ScreenNames } from "../global/index";
import HomeScreen from "../screens/Home/HomeScreen";
import SearchMoviesScreen from "../screens/SearchMovies/SearchMoviesScreen";
import MovieDetailsScreen from "../screens/MovieDetails/MovieDetailsScreen";
import FavoriteMoviesScreen from "../screens/FavoriteMovies/FavoriteMoviesScreen";
import FiltersScreen from "../screens/Filters/FiltersScreen";
enableScreens();
const Stack = createStackNavigator();

const MainStack = ({ }) => {

    return (
        <NavigationContainer
        >
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={ScreenNames.HOME_SCREEN}>
                <Stack.Screen name={ScreenNames.HOME_SCREEN} component={HomeScreen} />
                <Stack.Screen name={ScreenNames.SEARCH_MOVIES_SCREEN} component={SearchMoviesScreen} />
                <Stack.Screen name={ScreenNames.MOVIE_DETAILS_SCREEN} component={MovieDetailsScreen} />
                <Stack.Screen name={ScreenNames.FAVORITE_MOVIES_SCREEN} component={FavoriteMoviesScreen} />
                <Stack.Screen name={ScreenNames.FILTER_SCREEN} component={FiltersScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;