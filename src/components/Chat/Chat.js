import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageInput: ''
        }

        this.changeInputMessage = this.changeInputMessage.bind(this);
        this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
    }

    changeInputMessage(event) {
        this.setState({ messageInput: event.target.value });
    }
    sendMessageOnEnter(event) {

        if (event.key === 'Enter') {
            this.setState(prevState => ({
                messages: [...prevState.messages, {text: prevState.messageInput }],
                messageInput: ''
            }));
        }
    }

    render() {
        const { messages, messageInput } = this.state;
        return(
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {messages.map((value, index) => {
                            return <Message key={index} text={value.text}/>
                        })}
                    </div>
                </div>
                <input
                    type="text"
                    className="input-message"
                    value={messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                />
            </div>
        );
    }
}

export default Chat;