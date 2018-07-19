import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import { getSummary } from './dashboardActions'


class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debit } = this.props.summary

        return (
            <div>
                <ContentHeader title="Dashboard" subtitle="Versão 1.0" />

                <Content>
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
                </Content>
            </div>
        )
    }
}

/**
 *
 * Mapeamento do que está dentro do "reducers.js"
 */
const mapStateToProps = state => ({
    summary: state.dashboard.summary
})
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
