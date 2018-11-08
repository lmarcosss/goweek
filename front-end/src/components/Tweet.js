import React, { Component } from "react";
import "./Tweet.css";
import like from "../like.svg";
import api from "../services/api";
export default class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: this.props.tweet
    };
  }

  handleLike = async () => {
    const { _id } = this.state.tweet;

    await api.post(`likes/${_id}`);
  };
  render() {
    const { tweet } = this.state;
    return (
      <li className="tweet">
        <strong>{tweet.author}</strong>
        <p>{tweet.content}</p>
        <button type="button">
          <img src={like} alt="Like" onClick={this.handleLike} />
          {tweet.likes}
        </button>
      </li>
    );
  }
}
