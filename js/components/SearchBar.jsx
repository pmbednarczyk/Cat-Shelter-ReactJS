import React from 'react';
import {CategoryRow} from './_CategoryRow.jsx';

export class SearchBar extends React.Component {
    render() {
        return (
            <header>
                <CategoryRow/>
                <form>
                    <div><label><input type="text"
                                       placeholder="Kitty name..."
                                       onChange={this.props.onTextChange} value={this.props.filterText}/></label></div>
                    <div><label><input type="checkbox" onChange={this.props.onCheckboxChange} value="1"/>Show only cats that like kids</label></div>
                </form>
            </header>
        )
    }
}


