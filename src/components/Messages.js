import React from 'react';

import Message from './Message';

// This component displays an individual message.
// We should have logic to display it on the right if the user sent the
// message, or on the left if it was received from someone else.
class Messages extends React.Component {
  componentDidUpdate(){
    // Get the messageList container and set the scrollTop to the height of the container
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }
    render() {
      // Loop through all the messages in the state and create a Message Component
      const messages = this.props.messages.map((message, i) => {
        return (
          <Message
          key={i}
          username={message.username}
          message={message.message}
          fromMe={message.fromMe} />
        );
      });

    return (
      <div className='messages' id='messageList'>
        { messages }
      </div>
    );
    }
    // Display the message text and sender's name
  }

Messages.defaultProps = {
  messages: []
};

export default Messages;
