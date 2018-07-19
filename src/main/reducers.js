import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as toastr } from 'react-redux-toastr'

import dashboard from '../dashboard/dashboardReducer'
import tab from '../common/tab/tabReducer'
import billingCycle from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard,
    tab,
    billingCycle,
    form,
    toastr
})

export default rootReducer
