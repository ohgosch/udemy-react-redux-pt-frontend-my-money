const INITIAL_STATE = {
    list: []
}

export default (state = INITIAL_STATE, action) => {
    const TYPES = [
        'BILLING_CYCLES_FETCHED',
    ]
    const { type, payload } = action

    // Default value
    if (TYPES.indexOf(type) < 0) return state

    // Equal BILLING_CYCLES_FETCHED
    if (type == TYPES[0])
        return { ...state, list: payload.data }
}
