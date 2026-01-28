import { useState } from "react";
import Toggle from "../../../components/ui/Toggle";
import { IoMdMail } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import NotesCard from "./NotesCard";
import CommentBox from "./CommentBox";

const NotesAndComments = ({ onClose }: { onClose: () => void }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col">
        <header className="flex justify-between">
          <div className="">
            <h3 className="font-bold text-md">Alex's Notes</h3>
            <p
              style={{
                fontSize: "8px",
              }}
              className="text-gray-400"
            >
              Permanent Resident , Halifax,NS
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center ">
            <IoMdMail className="text-gray-400 " />
            <Toggle
              width={28}
              height={15}
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
            <span className="text-xs cursor-pointer hover:text-gray-500">
              Send to client
            </span>
            <CgNotes className="cursor-pointer" />
            <button
              onClick={onClose}
              className="bg-black cursor-pointer text-white font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </header>

        <div className="flex flex-col gap-4 pt-12">
          <NotesCard />
          <NotesCard />
        </div>
      </div>

      <div className="">
        <CommentBox />
      </div>
    </div>
  );
};

export default NotesAndComments;
