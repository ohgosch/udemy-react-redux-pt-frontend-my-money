const INITIAL_STATE = {
    selected: ''
}

export default (state = INITIAL_STATE, action) => {
    const TYPES = [
        'TAB_SELECTED',
        'TAB_SHOWED'
    ]
    const { type, payload } = action

    // Default value
    if (TYPES.indexOf(type) < 0) return state

    // Equal TAB_SELECTED
    if (type == TYPES[0])
        return { ...state, selected: payload }

    // Equal TAB_SHOWED
    if (type == TYPES[1])
        return { ...state, visible: payload }
}
