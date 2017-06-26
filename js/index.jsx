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
                }

                if (this.state.filterText.length > 0 && cat.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) === -1) {
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
        {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"},
        {category: "female", age: "20", likesKids: true, name: "Granny Meow"},
        {category: "male", age: "1", likesKids: false, name: "The Beast"},
        {category: "male", age: "7", likesKids: true, name: "John Bambo"},
        {category: "male", age: "12", likesKids: true, name: "Wet Prince"},
        {category: "female", age: "2", likesKids: true, name: "Merciless"},
        {category: "male", age: "7", likesKids: false, name: "Spacetraveler"},
        {category: "male", age: "25", likesKids: true, name: "Luke Skywhisker"},
        {category: "male", age: "9", likesKids: true, name: "Felix"},
        {category: "male", age: "2", likesKids: false, name: "Karate Cat"},
        {category: "female", age: "1", likesKids: true, name: "Gonzalez"},
        {category: "female", age: "2", likesKids: false, name: "Grażyna"},
        {category: "female", age: "3", likesKids: true, name: "Demi Meower"},
        {category: "female", age: "20", likesKids: true, name: "Katy Purry"},
        {category: "male", age: "1", likesKids: false, name: "Anderson Pooper"},
        {category: "male", age: "7", likesKids: true, name: "Picatso"},
        {category: "male", age: "12", likesKids: true, name: "Santa Claws"},
        {category: "female", age: "2", likesKids: true, name: "Oprah Whisker"},
        {category: "female", age: "7", likesKids: false, name: "Jessicat"}
    ];

    ReactDOM.render(
        <App kitties={kitties}/>,
        document.querySelector('#app')
    );
});
