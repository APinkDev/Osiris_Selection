const initialState = {
    FoodsState: [],
    Details: [],
    AllDiets: [],
    Allcuisines: [],
    Alldishtypes: [],

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOODSALL": {
            console.log(action.payload.food)
            state = initialState;
            return {
                ...state,
                FoodsState: state.FoodsState.concat(action.payload.food),
            };
        }
        case "SEARCHFOOD": {
            state = initialState;
            return {
                ...state,
                FoodsState: state.FoodsState.concat(action.payload.food),
            };
        }
        case "DETAILED": {
            state = initialState;
            return {
                ...state,
                Details: action.payload.food,
            }
        }
        case "GETDIETS": { 
            state.AllDiets = state.AllDiets.slice(0, state.AllDiets.length - 1);
            return {
                ...state,
                AllDiets: state.AllDiets.concat(action.payload.food)
            }
        }
        case "GETCUISINES": {
            state.Allcuisines = state.Allcuisines.slice(0, state.Allcuisines.length - 1);
            return {
                ...state,
                Allcuisines: state.Allcuisines.concat(action.payload.food)
            }
        }
        case "GETDISHTYPES": {
            state.Alldishtypes = state.Alldishtypes.slice(0, state.Alldishtypes.length - 1);
            return {
                ...state,
                Alldishtypes: state.Alldishtypes.concat(action.payload.food)
            }
        }
        default: {
            return state;
        }

    }

}
export default reducer;