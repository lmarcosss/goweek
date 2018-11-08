import React, { Component } from "react";
import api from "../services/api";
import socket from "socket.io-client";
import twitterLogo from "../twitter.svg";
import Tweet from "../components/Tweet";
import "./Timeline.css";
export default class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTweet: "",
      tweets: []
    };
  }

  subscribeToEvents = () => {
    const io = socket("http://localhost:3000");

    io.on("tweet", data => {
      this.setState({ tweets: [data, ...this.state.tweets] });
    });
    io.on("like", data => {
      console.log(data);
      this.setState({
        tweets: this.state.tweets.map(tweet =>
          tweet._id === data._id ? data : tweet
        )
      });
    });
  };

  async componentDidMount() {
    this.subscribeToEvents();

    const response = await api.get("tweets");
    this.setState({
      tweets: response.data
    });
  }

  renderTweets() {
    return this.state.tweets.map(tweet => {
      return <Tweet key={tweet._id} tweet={tweet} />;
    });
  }

  handleNewTweet = async event => {
    if (event.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem("@GoTwitter:username");

    await api.post("tweets", { content, author });

    this.setState({ newTweet: "" });
  };

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
            name="newTweet"
            onChange={event => this.handleChange(event)}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"
          />
        </form>
        <ul className="tweet-list">{this.renderTweets()}</ul>
      </div>
    );
  }
}
