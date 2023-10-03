import React from "react";
import Avatar from "../../Avatar";

function ChatItem() {
  return (
    <li className="flex items-center gap-4 px-4 py-2">
      <Avatar size={12} src="/user.svg" alt="profile" />
      <div className="flex w-full py-3 border-b border-stone-200">
        <div className="grow">
          <h3 className="font-semibold">Sean Huvaya</h3>
          <p className=" text-sm">My status</p>
        </div>
      </div>
    </li>
  );
}

export default ChatItem;
