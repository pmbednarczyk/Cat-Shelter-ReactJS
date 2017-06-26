import React from 'react';

export class SearchBar extends React.Component {
    render() {
        return (
            <header>
                <form>
                    <div><label><input type="text" value={this.props.filterText}/></label></div>
                    <div><label><input type="checkbox" value={this.props.likesKids}/> Only show cats that like kids</label></div>
                </form>
            </header>
        )
    }
}


