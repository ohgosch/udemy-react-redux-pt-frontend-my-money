import React from 'react'

export default props => (
    <li>
        <a href={ props.path }>
            <i aria-hidden="true" className={`fa fa-${ props.icon }`}></i> { props.label }
        </a>
    </li>
)
