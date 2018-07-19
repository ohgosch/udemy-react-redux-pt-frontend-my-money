import React, { Component } from 'react'

export default class Grid extends Component {

    toCssClasses(numbers) {
        const dictionary = ['xs', 'sm', 'md', 'lg', 'xl']
        const cols = numbers ? numbers.split(' ') : []

        let classes = ''

        cols.forEach((col, index) => {
            if(index == dictionary.length) return

            if(col) {
                classes += `col-${ dictionary[index] }-${ col }`

                if(cols.length != index + 1)
                    classes += ' '
            }
        })

        return classes
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)

        return (
            <div className={ gridClasses }>
                { this.props.children }
            </div>
        )
    }
}
