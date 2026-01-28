import { MdDelete } from "react-icons/md";
import { SiAdobeacrobatreader } from "react-icons/si";

const NotesCard = () => {
  return (
    <div className="shadow-sm p-2 py-3 rounded-md flex flex-col">
      <div className="flex flex-col gap-2">
        <p
          style={{
            fontSize: "10px",
          }}
          className="text-black"
        >
          Client mentioned a possible salary revision expected in march 2026
          .Agreed to reconnect after confirmation to reassesss insurance and
          investment options
        </p>
        <p
          style={{
            fontSize: "10px",
          }}
          className="text-gray-500"
        >
          jan 05,2026
        </p>
        <div className="flex justify-between">
          <span className="ml-2 flex gap-1 items-center">
            <SiAdobeacrobatreader className="text-red-500" />
            <a
              href="/sample.pdf" // place your sample.pdf inside public folder
              download="sample.pdf"
              className="text-blue-500 hover:underline text-xs font-medium"
            >
              document.pdf
            </a>
          </span>
          <MdDelete className="text-red-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
