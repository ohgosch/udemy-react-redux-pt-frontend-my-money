import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem label="Dashboard" icon="dashboard" path="#" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem label="Ciclos de Pagamentos" icon="usd" path="#billingCycles" />
        </MenuTree>
    </ul>
)
