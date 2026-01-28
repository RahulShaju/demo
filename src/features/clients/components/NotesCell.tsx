import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import Drawer from "../../../components/ui/Drawer";
import NotesAndComments from "./NotesAndComments";

interface NotesCellProps {
  note: string;
  name: string;
}

export const NotesCell: React.FC<NotesCellProps> = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 px-3 py-1">
      <input
        type="text"
        placeholder="Enter note"
        className="w-3/4 border border-gray-300 rounded-sm px-2 py-0.5 outline-none text-xs bg-gray-100 focus:ring-1 focus:ring-gray-300"
        defaultValue={note}
        onChange={(e) => console.log("New note:", e.target.value)}
      />

      <CgNotes
        className="text-blue-500 cursor-pointer"
        size={16}
        onClick={() => setIsOpen(true)}
      />

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        // title={`Notes for ${name}`}
      >
        <NotesAndComments onClose={() => setIsOpen(false)} />
      </Drawer>
    </div>
  );
};
