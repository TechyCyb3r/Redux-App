// amountReducer.js
const reducer = (state = 1000, action) => {
    if (action.type === 'deposit') {
        return state + action.payload
    }
    else if (action.type === 'withdraw') {
        return state - action.payload
    }
    else if (action.type === 'reset') {
        return 0
    }
    else{
        return state;
    }

};

export default reducer;
