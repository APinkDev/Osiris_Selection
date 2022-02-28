const initialState = {
    FoodsState: [],
    Details: [],
    AllDiets: [],
    Allcuisines: [],
    Alldishtypes: [],
    Filtred: [],

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

        //---------------------------------------------------------------------------------------------------------------
        case "FILTRATED": {

            if (action.payload === "") {
              state.Filtred = initialState;
              return {
                ...state,
                Filtred: state.FoodsState,
              };
            }
            if (action.payload === "AZ" && state.Filtred.length === 0) {
            //   console.log("AZ");
              return {
                ...state,
                Filtred: [...state.FoodsState].sort((a, b) =>
                  a.title.localeCompare(b.title)
                ),
              };
            }
            if (action.payload === "AZ" && state.Filtred.length !== 0) {
              return {
                ...state,
                Filtred: [...state.Filtred].sort((a, b) =>
                  a.title.localeCompare(b.title)
                ),
              };
            }
            if (action.payload === "ZA" && state.Filtred.length === 0) {
              return {
                ...state,
                Filtred: [...state.FoodsState].sort((b, a) =>
                  a.title.localeCompare(b.title)
                ),
              };
            }
            if (action.payload === "ZA" && state.Filtred.length !== 0) {
              return {
                ...state,
                Filtred: [...state.Filtred].sort((b, a) =>
                  a.title.localeCompare(b.title)
                ),
              };
            }
            // if (action.payload === "High Health Score" && state.Filtred.length === 0) {
            //   return {
            //     ...state,
            //     Filtred: [...state.FoodsState].sort((a, b) =>
            //       parseInt(a.healthScore.substring(0, 2)) >
            //       parseInt(b.healthScore.substring(0, 2))
            //         ? 1
            //         : parseInt(b.healthScore.substring(0, 2)) >
            //           parseInt(a.healthScore.substring(0, 2))
            //         ? -1
            //         : 0
            //     ),
            //   };
            // }
            if (action.payload === "High Health Score" && state.Filtred.length === 0) {
                return {
                  ...state,
                  Filtred: [...state.FoodsState].sort((a, b) =>
                    a.healthScore < b.healthScore ? 1 : b.healthScore < a.healthScore ? -1 : 0
                  ),
                };
              }
              if (action.payload === "High Health Score" && state.Filtred.length !== 0) {
                return {
                  ...state,
                  Filtred: [...state.Filtred].sort((a, b) =>
                    a.healthScore < b.healthScore ? 1 : b.healthScore < a.healthScore ? -1 : 0
                  ),
                };
              }
        
              if (action.payload === "Low Health Score" && state.Filtred.length === 0) {
                return {
                  ...state,
                  Filtred: [...state.FoodsState].sort((a, b) =>
                    a.healthScore > b.healthScore ? 1 : b.healthScore > a.healthScore ? -1 : 0
                  ),
                };
              }
              if (action.payload === "Low Health Score" && state.Filtred.length !== 0) {
                return {
                  ...state,
                  Filtred: [...state.Filtred].sort((a, b) =>
                    a.healthScore > b.healthScore ? 1 : b.healthScore > a.healthScore ? -1 : 0
                  ),
                };
              }
            break;
          }
        default: {
            return state;
        }

    }

}
export default reducer;