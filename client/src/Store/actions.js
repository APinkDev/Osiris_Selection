import axios from "axios"
// import fetch from "node-fetch"

export const FoodsAll = () => { //async - await
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

// export const FoodsAll = () => { //promise
//     return function (dispatch) {
//         fetch(`http://localhost:3001/recipes`)
//         .then((result) => result.json())
//         .then((result)=> console.log(result))
//         .then((daaata) => {
//             dispatch({
//                 type: "FOODSALL",
//                 payload: {food: daaata}
//             })
//         })
//     }
// }


export const SearchFood = (title) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/recipes?title=${title}`); //query
        // console.log(response.data)
        if (response?.data) {
            dispatch({
                type: "SEARCHFOOD",
                payload: { food: response.data },
            });
        }
    }
}

// export const SearchFood = (title) => { //promise
//     return function (dispatch) {
//         fetch(`http://localhost:3001/recipes?title=${title}`)
//         .then((result) => result.json())
//         .then((result)=> console.log(result))
//         .then((daaata) => {
//             dispatch({
//                 type: "SEARCHFOOD",
//                 payload: {food: daaata}
//             })
//         })
//     }
// }


export const Detailed = (id) => {
    return async (dispatch) => {
        // console.log("existoooooo:")
        const response = await axios.get(`http://localhost:3001/recipes/${id}`) //params
        // console.log("response:", response)
        if (response?.data) {
            dispatch({
                type: "DETAILED",
                payload: { food: response.data }
            })
        }
    }
}


// export const Detailed = (id) => { //promise
//     return function (dispatch) {
//         fetch(`http://localhost:3001/recipes/${id}`)
//         .then((result) => result.json())
//         .then((result)=> console.log(result))
//         .then((daaata) => {
//             dispatch({
//                 type: "DETAILED",
//                 payload: {food: daaata}
//             })
//         })
//     }
// }


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

// export const GetDiets = (id) => { //promise
//     return function (dispatch) {
//         fetch(`http://localhost:3001/diets`)
//         .then((result) => result.json())
//         .then((result)=> console.log(result))
//         .then((daaata) => {
//             dispatch({
//                 type: "GETDIETS",
//                 payload: {food: daaata}
//             })
//         })
//     }
// }


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

// export const GetCuisines = (id) => { //promise
//     return function (dispatch) {
//         fetch(`http://localhost:3001/cuisines`)
//         .then((result) => result.json())
//         .then((result)=> console.log(result))
//         .then((daaata) => {
//             dispatch({
//                 type: "GETCUISINES",
//                 payload: {food: daaata}
//             })
//         })
//     }
// }


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

// export const GetDishTypes = (id) => { //promise
//     return function (dispatch) {
//         fetch(`http://localhost:3001/dishtypes`)
//         .then((result) => result.json())
//         .then((result)=> console.log(result))
//         .then((daaata) => {
//             dispatch({
//                 type: "GETDISHTYPES",
//                 payload: {food: daaata}
//             })
//         })
//     }
// }

export const Post = function (inputs) {
    return function (dispatch) {
        return axios.post("/create", inputs).then((response) => {
            // console.log(response)
        })
    }
}


export const Filtrated = (arg) => {
    return {
        type: "FILTRATED",
        payload: arg,
    }
}

export const DietFiltrated = (arg) => {
    return {
      type: "DIETFILTRATED",
      payload: arg,
    };
  };