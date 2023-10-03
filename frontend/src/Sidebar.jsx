import { useState } from "react";
import Avatar from "./Avatar";
import ChatList from "./features/chats/ChatList";
import NewChat from "./features/chats/NewChat";

function Sidebar() {
  const [showNewChat, setShowNewChat] = useState(false);

  function handleHideNewChat() {
    setShowNewChat(false);
  }

  return (
    <div className="w-[30%] relative shrink-0 h-full border-r border-slate-200 pb-3.5">
      <NewChat isVisible={showNewChat} onHide={handleHideNewChat} />

      <div className="shadow-sm">
        <div className="bg-slate-200 flex justify-between items-center px-4 py-2">
          <Avatar size={11} src="/profile.jpeg" alt="profile" />
          <img
            onClick={() => setShowNewChat(true)}
            className="h-8 w-8 cursor-pointer"
            src="/message-add.svg"
            alt="message add"
          />
        </div>
        <div className="px-4 py-2">
          <div className="bg-slate-200 px-2 py-1 rounded-md flex items-center gap-4">
            <img className="h-4 w-4" src="search.svg" alt="search" />
            <input
              className="w-full bg-inherit placeholder:text-gray-600 focus:outline-none"
              type="text"
              placeholder="Search chat"
            />
          </div>
        </div>
      </div>

      <div className="overflow-y-scroll h-full">
        <ChatList />
      </div>
    </div>
  );
}

export default Sidebar;
