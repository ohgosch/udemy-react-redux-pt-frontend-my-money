const INITIAL_STATE = {
    summary: {
        credit: 0,
        debit: 0
    }
}

export default (state = INITIAL_STATE, action) => {
    const TYPES = [
        'BILLING_SUMMARY_FETCHED'
    ]
    const { type, payload } = action

    if(TYPES.indexOf(type) < 0) return state

    if(type == TYPES[0])
        return { ...state, summary: payload.data }
}
