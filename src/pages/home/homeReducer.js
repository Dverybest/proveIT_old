export default (state = "", action) => {
    switch (action.type) {
        case "sample":
            console.log("check9ing" )
            return action.payload
            break;
    
        default:
            return state;
            break;
    }
}