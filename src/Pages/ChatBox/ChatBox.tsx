import ChatHistory from "../../Components/ChatHistory/ChatHistory"
import Inbox from "../../Components/Inbox/Inbox"

const ChatBox = () => {
  return (
    <div className={`flex`}>
      <ChatHistory />
      <Inbox />
    </div>
  )
}

export default ChatBox