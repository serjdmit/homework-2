import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
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
            this.setState((prevState) => {
                prevState.messages.push({text: this.state.messageInput})
            });
            this.setState({
                messageInput: ''
            });
        }
    }

    render() {
        return(
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {this.state.messages.map((value, index) => {
                            return <Message key={index} text={value.text}/>
                        })}
                    </div>
                </div>
                <input
                    type="text"
                    className="input-message"
                    value={this.state.messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                />
            </div>
        );
    }
}

export default Chat;