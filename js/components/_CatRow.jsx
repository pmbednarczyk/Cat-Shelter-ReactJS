import React from 'react';


export class CatRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
            </tr>
        )
    }
}


