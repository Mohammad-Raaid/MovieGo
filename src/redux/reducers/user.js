import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
	userData: null,
	userType: "USER",
	favoriteMovies: [],
	appliedFilter: []
};

const user = (state = initialState, action) => {

	const { type, payload } = action;

	switch (type) {
		case actionTypes.SET_USER:
			return {
				...state,
				userData: payload,
			};
		case actionTypes.ADD_TO_FAVORITE: {
			let favoriteMovies = state.favoriteMovies.filter(movie => movie.id === payload.id);
			if (favoriteMovies.length > 0) {
				return state;
			} else {
				return {
					...state,
					favoriteMovies: [...state.favoriteMovies, payload],
				};
			}
		}
		case actionTypes.REMOVE_FROM_FAVORITE: {
			let favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== payload);
			return {
				...state,
				favoriteMovies: favoriteMovies,
			};
		}
		case actionTypes.SET_FILTER: {
			return {
				...state,
				appliedFilter: payload,
			};
		}
		case actionTypes.CLEAR_SESSION:
			return {
				...state,
				userData: null
			};
		default:
			return state;
	}
};

export default user;