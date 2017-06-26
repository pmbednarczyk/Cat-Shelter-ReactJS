import React from 'react';
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
            <div className="cats-container">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="kitties-sex" >
                        <th colSpan="2">Male kitties</th>
                    </tr>
                    {this.getCats("male")}

                    <tr className="kitties-sex">
                        <th colSpan="2">Female kitties</th>
                    </tr>
                    {this.getCats("female")}
                    </tbody>
                </table>
            </div>
        )
    }
}


