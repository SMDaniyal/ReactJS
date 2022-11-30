export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTIONITEM':
            return{
                ...state,
                transactions: state.transactions.filter(item => item.id !== action.payload)
            }
        case 'ADD_TRANSACTIONITEM':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}