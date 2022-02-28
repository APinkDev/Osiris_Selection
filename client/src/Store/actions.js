import axios from "axios"

export const FoodsAll = () => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:3001/recipes")
        try {
            if (response?.data) {
                dispatch({
                    type: "FOODSALL",
                    payload: { food: response.data }
                })
            }
        } catch (e) { console.log(e) }

    }
}

export const SearchFood = (title) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/recipes?title=${title}`);
        // console.log(response.data)
        if (response?.data) {
            dispatch({
                type: "FOODSALL",
                payload: { food: response.data },
            });
        }
    }
}

export const Detailed = (id) => {
    return async (dispatch) => {
        // console.log("existoooooo:")
        const response = await axios.get(`http://localhost:3001/recipes/${id}`)
        console.log("response:", response)
        if (response?.data) {
            dispatch({
                type: "DETAILED",
                payload: { food: response.data }
            })
        }
    }
}

export const GetDiets = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/diets`)
        // console.log("response:", response)
        if (response?.data) {
            dispatch({
                type: "GETDIETS",
                payload: { food: response.data }
            })
        }
    }
}
export const GetCuisines = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/cuisines`)
        // console.log("response:", response)
        if (response?.data) {
            dispatch({
                type: "GETCUISINES",
                payload: { food: response.data }
            })
        }
    }
}
export const GetDishTypes = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/dishtypes`)
        // console.log("response:", response)
        if (response?.data) {
            dispatch({
                type: "GETDISHTYPES",
                payload: { food: response.data }
            })
        }
    }
}

export const Post = function (inputs) {
    return function (dispatch) {
        return axios.post("/create", inputs).then((response) => {
            // console.log(response)
        })
    }
}