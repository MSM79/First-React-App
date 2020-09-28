import React, {Component} from 'react';
import styles from './form.css';

class FormMsm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName : '',
      email : '',
      password : '',
      errorUser : '',
      errorEmail : '',
      errorPass : '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleEmail= this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ userName : event.target.value , errorUser : '' });
  }

  handleEmail(event) {
    this.setState({ email : event.target.value , errorEmail: '' });
  }

  handlePass(event) {
    this.setState({ password : event.target.value, errorPass : '' });
  }

  handleSubmit(event) {
   if (this.state.userName !== '') {
   }
   else {
     this.setState({ errorUser : 'نام کاربری را وارد کنید'});
   }
   if (this.state.password !== '' && this.state.password.length >= 8) {
   }
   else {
     this.setState({ errorPass: 'پسورد باید هشت رقم یا بیشتر باشد'});
   }

   if (this.state.email != '') { /* return true */ }
   else {
     this.setState({ errorEmail: 'ایمیل را به درستی وارد کنید'});

   }


   event.preventDefault();
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h3>Login</h3>
        <div>
           <input
              type="text"
              placeholder="UserName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            <p>{this.state.errorUser}</p>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
            <p>{this.state.errorEmail}</p>
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePass}
            />
            <p>{this.state.errorPass}</p>
          </div>

         <input type="submit" value="LOGIN" />
      </form>
    )
  }
}

export default FormMsm;
