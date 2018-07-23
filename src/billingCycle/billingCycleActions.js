import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const payload = axios.get(`${BASE_URL}/billingCycles`)

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload
    }
}

export function create(values) {

    return dispatch => {
        const payload = axios.post(`${BASE_URL}/billingCycles`, values)
            .then(res => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(res => {
                let { errors } = res.response.data

                errors.forEach(err => toastr.error('Erro', err));
            })

    }

}
