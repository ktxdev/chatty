import ChatListItem from "./ChatListItem";

function ChatList() {
  return (
    <ul>
      {new Array(20).fill(0).map((_, i) => (
        <ChatListItem key={i} />
      ))}
    </ul>
  );
}

export default ChatList;
