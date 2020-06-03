import React, {Component} from 'react';
import './App.css';
import "@progress/kendo-theme-default/dist/all.css";
import { Chat } from "@progress/kendo-react-conversational-ui";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.user = {
            id: 1,
            avatarUrl: "https://via.placeholder.com/24/008000/008000.png"
        };
        this.bot = { id: 0 };
        this.state = {
            messages: [
                {
                    author: this.bot,
                    timestamp: new Date(),
                    text: "Hello, Welcome to Walmart MarketPlace!"
                }
            ]
        };
    }

    addNewMessage = (event) => {
        let botResponse = Object.assign({}, event.message);
        botResponse.text = "hello";
        botResponse.author = this.bot;
        this.setState((prevState) => ({
            messages: [
                ...prevState.messages,
                event.message
            ]
        }));
        this.setState(prevState => ({
            messages: [
                ...prevState.messages,
                botResponse
            ]
        }));
    };


    render() {
        return (
            <div className = "appContainer">
                <Chat user={this.user}
                    messages={this.state.messages}
                    onMessageSend={this.addNewMessage}
                    placeholder={"Type a message..."}
                    width={400}>
                </Chat>
            </div>
        );
    }
}

