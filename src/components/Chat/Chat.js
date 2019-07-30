import React from 'react';

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
            this.setState({
                messages: [...this.state.messages, {text: this.state.messageInput}],
                messageInput: ''
            });
        }
    }

    render() {
        return(
            <div className="chat">
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