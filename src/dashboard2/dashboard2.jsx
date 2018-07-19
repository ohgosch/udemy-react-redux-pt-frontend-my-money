import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            credit: 0,
            debit: 0
        }
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(res => this.setState(res.data))

    }

    render() {
        const { credit, debit } = this.state

        return (
            <div>
                <ContentHeader title="Dashboard" subtitle="Versão 1.0" />

                <ValueBox
                    cols="12 6 4"
                    color="green"
                    value={`R$ ${credit}`}
                    text="Total de Créditos"
                    icon="bank"
                />
                <ValueBox
                    cols="12 6 4"
                    color="red"
                    value={`R$ ${debit}`}
                    text="Total de Débitos"
                    icon="credit-card"
                />
                <ValueBox
                    cols="12 6 4"
                    color="blue"
                    value={`R$ ${credit - debit}`}
                    text="Valor Consolidado"
                    icon="money"
                />
            </div>
        )
    }
}
