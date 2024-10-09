import MessageForm from "./MessageForm"
import MyMessage from "./MyMessage"
import TheirMessage from "./TheirMessage"

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  // const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
  //   <div
  //     key={`read_${index}`}
  //     className="read-receipt"
  //     style={{
  //       float: isMyMessage ? 'right' : 'left',
  //       backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
  //     }}
  //   />
  // ));
  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => {
    const username = person.person.username; // Username ko fetch karo
    const words = username.match(/[A-Z][a-z]*/g) || username.split(' '); // CamelCase ya space se split karna
    const initials = words.length > 0
      ? words.slice(0, 2).map(word => word[0]).join('').toUpperCase() // Pehle do words se first letter lo
      : username.slice(0, 2).toLowerCase();
    return person.last_read === message.id && (
      <div
        key={`read_${index}`}
        className="read-receipt"
        style={{
          float: isMyMessage ? 'right' : 'left', // Right for your message, left for their message
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f0',  // Circle background color
          color: 'white',
          textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          fontSize: '16px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginLeft: isMyMessage ? '0' : '-56px', // Adjust margin for better spacing
          marginRight: isMyMessage ? '-8px' : '0', // Adjust margin for better spacing
          marginTop: "-40px"
        }}
      >
        {initials}
      </div>
    );
  });


  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {
              isMyMessage ? <MyMessage message={message} /> : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
            }
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      )
    })
  }

  if (!chat) return <div />;
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">
          {chat.title}
        </div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }}> </div>
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  )
}

export default ChatFeed
