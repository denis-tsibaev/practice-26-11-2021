//hooks

// import { useState } from 'react';
// import Form from './components/Form/Form.jsx';

// const App = () => {
//     const initialState = [
//         { name: 'Arnold Dira', age: '51' },
//         { name: 'Регламентина', age: '99' },
//         { name: 'Зигмунд', age: 'забудь эти цифры' },
//         { name: 'Gomer', age: '102' },
//     ];

//     // const initialState = [];

//     const [contacts, setContacts] = useState(initialState);

//     const onSumbitHandler = newContact => {
//         setContacts([newContact, ...contacts]);
//     };

//     return (
//         <div>
//             <Form onSubmit={onSumbitHandler} />
//             {contacts && (
//                 <ol>
//                     {contacts.map(({ name, age }) => (
//                         <li key={name}>
//                             <span>name: {name}</span>
//                             <br />
//                             <span>age: {age}</span>
//                         </li>
//                     ))}
//                 </ol>
//             )}
//         </div>
//     );
// };

// export default App;

//class

import React, { Component } from 'react';
import Form from './components/Form/Form.jsx';

export default class App extends Component {
    state = {
        contacts: [
            { name: 'Arnold Dira', age: '51' },
            { name: 'Регламентина', age: '99' },
        ],
    };

    onSumbitHandler = newContact => {
        this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
        }));
        console.log(newContact);
    };

    render() {
        const { contacts } = this.state;
        return (
            <div>
                <Form onSubmit={this.onSumbitHandler} />
                <ol>
                    {contacts.map(({ name, age }) => (
                        <li key={name}>
                            <p>{name}</p>
                            <p>{age}</p>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}
