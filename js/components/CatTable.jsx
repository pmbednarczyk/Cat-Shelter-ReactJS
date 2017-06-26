import React from 'react';
import {CategoryRow} from './_CategoryRow.jsx';
import {CatRow} from './_CatRow.jsx';

export class CatTable extends React.Component {

    getCats = (sex) => {
        const cats = this.props.kitties.filter(cat => {
            return cat.category === sex;
        });

        const catsRows = cats.map((cat, age) => {
            return <CatRow key={cat.name} age={cat.age} name={cat.name}/>;
        });
        return catsRows;
    };

    render() {
        return (
            <div>
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
                    {this.getCats("male")}

                    <tr>
                        <th colSpan="2">female</th>
                    </tr>
                    {this.getCats("female")}
                    </tbody>
                </table>
            </div>
        )
    }
}


