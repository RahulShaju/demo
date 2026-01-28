import { useState } from "react";
import TextArea from "../../../components/ui/TextArea";
import Button from "../../../components/ui/Button";

import { MdOutlineAttachment } from "react-icons/md";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-md">Comments</h3>
      <TextArea
        // label="Comment"
        value={comment}
        onChange={setComment}
        placeholder="Write your notes here...."
        resize="horizontal"
        className="rounded-md outline-none  focus:outline-none text-xs"
      />
      <div className="flex justify-between w-full">
        {/* Left button */}
        <Button
          width="w-32"
          className="text-xs text-gray-500 bg-gray-200 flex gap-1 items-center"
        >
          <MdOutlineAttachment className="text-gray-500" size={16} />
          <span className="text-gray-500 text-xs">Attachment</span>
        </Button>

        {/* Right button */}
        <Button
          width="w-32"
          className="text-xs p-0  text-white bg-black flex gap-1 items-center"
        >
          <span className="text-xs">Save notes</span>
        </Button>
      </div>
    </div>
  );
};

export default CommentBox;
