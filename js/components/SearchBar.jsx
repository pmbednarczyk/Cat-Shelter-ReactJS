import React from 'react';

export class SearchBar extends React.Component {
    render() {
        return (
            <header>
                <form>
                    <div><label><input type="text" onChange={this.props.onTextChange} value={this.props.filterText}/></label></div>
                    <div><label><input type="checkbox" onChange={this.props.onCheckboxChange} value="1"/> Only show cats that like kids</label></div>
                </form>
            </header>
        )
    }
}


