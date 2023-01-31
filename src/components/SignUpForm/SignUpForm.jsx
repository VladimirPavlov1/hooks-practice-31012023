import { useState } from 'react';
import { Form, Label } from './SignUpForm.styled';

const SignUpForm = () => {
    
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    console.log(email,setEmail)

    const handleEventChange=event=>{
        console.log(event.target.value)
        setEmail(event.target.value)
    }
    const handleEventPassword=event=>
    setPassword(event.target.password)


  return (
    <div>
      <Form autoComplete="off">
        <Label>
          <span>Почта</span>
          <input
            type="email"
            name="email"
            onChange={handleEventChange}
            value={email}
          />
        </Label>

        <Label>
          <span>Пароль</span>
          <input
            type="password"
            name="password"
            onChange={handleEventPassword}
            value={password}
          />
        </Label>

        <button type="submit">Зарегистрироваться</button>
      </Form>
    </div>
  );
};

export default SignUpForm;

// class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <Form autoComplete="off">
//         <Label>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </Label>

//         <Label>
//           <span>Пароль</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </Label>

//         <button type="submit">Зарегистрироваться</button>
//       </Form>
//     );
//   }
// }

// export default OldSignupForm;
