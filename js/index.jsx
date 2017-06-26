import React from 'react';
import ReactDOM from 'react-dom';
import {CatTable} from './components/CatTable.jsx';
import {SearchBar} from './components/SearchBar.jsx';

document.addEventListener('DOMContentLoaded', () => {
    class App extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                filterText: '',
                likesKids: false,
            }
        }

        handleTextChange = event => {
            this.setState({
                filterText: event.target.value,
            });
        };

        handleCheckboxChange = event => {
            this.setState({
                likesKids: event.target.checked,
            });
        };

        render() {
            const kitties2 = this.props.kitties.filter(cat => {
                if(this.state.likesKids && !cat.likesKids) {
                    return false;
                };

                if (this.state.filterText.length > 0 && cat.name.indexOf(this.state.filterText) === -1) {
                    return false;
                }

                return true;
            });
            return (
                <section>
                    <SearchBar onTextChange={this.handleTextChange} onCheckboxChange={this.handleCheckboxChange} filterText={this.state.filterText} likesKids={this.state.likesKids}/>
                    <CatTable kitties={kitties2}/>
                </section>
            )
        }
    }

    var kitties = [
        {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
        {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
        {category: "male", age: "2", likesKids: false, name: "Grumpy"},
        {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
        {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
        {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
    ];

    ReactDOM.render(
        <App kitties={kitties}/>,
        document.querySelector('#app')
    );
});
