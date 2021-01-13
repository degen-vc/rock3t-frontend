const initialState = {
    lockedLP: 0,
    lockPeriod: 0,
    lpBurn: 0
}

export const balance = function(state = initialState, action) {
    switch (action.type) {
        case "GET_LIQUID":
            const { lockPeriod, lockedLP, lpBurn } = action.payload
            return Object.assign({ lockPeriod, lockedLP, lpBurn });
        default:
            return state;
    }
};