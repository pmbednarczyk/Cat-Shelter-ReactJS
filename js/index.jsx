import React from 'react';
import ReactDOM from 'react-dom';
import {CatTable} from './components/CatTable.jsx';
import {SearchBar} from './components/SearchBar.jsx';

document.addEventListener('DOMContentLoaded', () => {
    class App extends React.Component {

        render() {
            return (
                <section>
                    <SearchBar/>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th colSpan="2">male</th>
                        </tr>
                        <tr>
                            <td>Fidel</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Fidel</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <th colSpan="2">female</th>
                        </tr>
                        <tr>
                            <td>Yude</td>
                            <td>4</td>
                        </tr>
                        </tbody>
                    </table>
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
