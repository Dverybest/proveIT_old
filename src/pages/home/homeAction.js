const home = (data) => (dispatch, getState) => {
    console.log("action!")
    dispatch({type: "sample", payload: data 

    })
}
export {home};


