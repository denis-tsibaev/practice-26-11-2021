// // hooks;
// import { useState } from 'react';

// const Form = ({ onSubmit }) => {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');

//     const onChangeHandler = e => {
//         const { name, value } = e.target;
//         if (name === 'name') setName(value);
//         if (name === 'age') setAge(value);
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         onSubmit({ name, age });
//         setName('');
//         setAge('');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Name
//                 <input
//                     type="text"
//                     name="name"
//                     value={name}
//                     onChange={onChangeHandler}
//                 />
//             </label>

//             <label>
//                 Age
//                 <input
//                     type="text"
//                     name="age"
//                     value={age}
//                     onChange={onChangeHandler}
//                 />
//             </label>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default Form;

//class
// import React, { Component } from 'react';

// export default class Form extends Component {
//     state = {
//         name: '',
//         age: '',
//     };

//     onChangeHandler = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//         this.setState({ name: '', age: '' });
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name
//                     <input
//                         type="text"
//                         name="name"
//                         value={this.state.name}
//                         onChange={this.onChangeHandler}
//                     />
//                 </label>

//                 <label>
//                     Age
//                     <input
//                         type="text"
//                         name="age"
//                         value={this.state.age}
//                         onChange={this.onChangeHandler}
//                     />
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         );
//     }
// }

// ref
// import React, { Component } from 'react';

// export default class Form extends Component {
//     nameRef = React.createRef();
//     ageRef = React.createRef();

//     onShowMessage = () => {
//         alert(
//             `Name: ${this.nameRef.current.value}
// 			 Age: ${this.ageRef.current.value}`,
//         );
//     };

//     render() {
//         return (
//             <form onSubmit={this.onShowMessage}>
//                 <label>
//                     Name
//                     <input type="text" name="name" ref={this.nameRef} />
//                 </label>

//                 <label>
//                     Age
//                     <input type="text" name="age" ref={this.ageRef} />
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         );
//     }
// }

////hook ref
// import { useRef } from 'react';

// const Form = () => {
//     const nameRef = useRef(null);
//     const ageRef = useRef(null);

//     const onShowMessage = () => {
//         alert(`Name: ${nameRef.current.value} Age: ${ageRef.current.value}`);
//     };

//     return (
//         <form onSubmit={onShowMessage}>
//             <label>
//                 Name
//                 <input type="text" name="name" ref={nameRef} />
//             </label>

//             <label>
//                 Age
//                 <input type="text" name="age" ref={ageRef} />
//             </label>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default Form;

////useLayout

import { useLayoutEffect, useState } from 'react';

const Form = () => {
    const [number, setNumber] = useState(0);

    useLayoutEffect(() => {
        if (number === 0) setNumber(Math.random());
    }, [number]);

    return (
        <div
            onClick={() => {
                setNumber(0);
            }}
        >
            {number}
        </div>
    );
};

export default Form;
