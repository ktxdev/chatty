import Avatar from "../../Avatar";

function ChatListItem() {
  return (
    <li className="flex items-center gap-4 px-4 py-2">
      <Avatar size={12} src="/profile.jpeg" alt="profile" />
      <div className="flex w-full py-3 border-b border-stone-200">
        <div className="grow">
          <h3 className="font-semibold">Sean Huvaya</h3>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet consectetur amet amet ...
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <span className="text-slate-500">08:30</span>
          <span className="bg-slate-500 text-stone-50 text-sm h-5 w-5 text-center rounded-full">
            3
          </span>
        </div>
      </div>
    </li>
  );
}

export default ChatListItem;
