import React from 'react';
import { CategoryRow } from './_CategoryRow.jsx';
import { CatRow } from './_CatRow.jsx';

    export class CatTable extends React.Component {

        render() {
            return (
                <div>
                    <h2>Hello It's CatTable component here!</h2>
                    <CategoryRow/>
                    <CatRow/>
                </div>
            )
        }
    }


