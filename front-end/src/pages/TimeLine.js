import React, { Component } from "react";
import twitterLogo from "../twitter.svg";
import "./Timeline.css";
export default class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTweet: ""
    };
  }

  handleNewTweet = () => {};

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="GoTwitter" />
        <form>
          <textarea
            value={this.state.newTweet}
            onChange={event => this.handleChange(event)}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"
          />
        </form>

        <ul>a</ul>
      </div>
    );
  }
}
