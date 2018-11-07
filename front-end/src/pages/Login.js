import React, { Component } from "react";
import twitterLogo from "../twitter.svg";
import "./Login.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem("@GoTwitter:username", username);

    this.props.history.push("/timeline");
  };

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="Go Twitter" />
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            name="username"
            placeholder="Nome de Usuário"
            value={this.state.username}
            onChange={event => this.handleChange(event)}
          />
          <button type="submit" onClick={null}>
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
