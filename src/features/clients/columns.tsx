/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColumnDef } from "@tanstack/react-table";
// import { HiOutlineTrash } from "react-icons/hi";

export type MaritalStatus =
  | "Single"
  | "Married"
  | "CommonLaw"
  | "Citizen"
  | "PR"
  | " CommonLaw";

export interface Prospect {
  id: string;
  name: string;
  city: string;
  maritalStatus: MaritalStatus;
  immigrationStatus: string;
  email: string;
  note: string;
}

import { BiFilterAlt } from "react-icons/bi";

import { NotesCell } from "./components/NotesCell";
import CityInputCell from "./components/CityInputCell";
// import MaritalStatusCell from "./components/DropdownCell";
import DropdownCell from "./components/DropdownCell";
import EditableNameCell from "./components/EditableNameCell";

export const columns: ColumnDef<Prospect>[] = [
  {
    accessorKey: "name",
    size: 200, // Custom width for the name column
    header: () => (
      <div className="flex  items-center gap-2">
        Customer <BiFilterAlt className="text-gray-400" />
      </div>
    ),
    cell: ({ row }) => (
      <EditableNameCell
        value={row.original.name}
        onChange={(newName) => {
          row.original.name = newName;
          console.log("Updated name:", newName);
        }}
        onDelete={() => {
          console.log("Delete row:", row.original.id);
        }}
      />
    ),
  },
  {
    accessorKey: "city",
    size: 200, // Custom width
    header: () => (
      <div className="flex items-center gap-2">
        City <BiFilterAlt className="text-gray-400" />
      </div>
    ),
    cell: ({ row, table }) => (
      <CityInputCell
        apiKey="nadnjnjad"
        initialValue={row.original.city}
        onChange={(newValue: any) => {
          // Update table data directly
          table.options.data[row.index].city = newValue;
          console.log("Updated city:", newValue);
        }}
      />
    ),
  },
  {
    accessorKey: "maritalStatus",
    size: 150,
    header: "Marital Status",
    cell: ({ row }) => {
      const STATUS_OPTIONS = ["Single", "Married", "Divorced", "CommonLaw"];
      const STATUS_CLASSES: Record<string, string> = {
        Single: "bg-blue-200 text-white",

        Married: "bg-blue-500 text-white",
        Divorced: "bg-red-500 text-white",

        CommonLaw: "bg-pink-300 text-white",
      };

      return (
        <DropdownCell
          value={row.original.maritalStatus}
          options={STATUS_OPTIONS}
          optionClasses={STATUS_CLASSES}
          onChange={(newStatus: any) => {
            row.original.maritalStatus = newStatus; // update table data
            console.log("Updated status:", newStatus);
          }}
        />
      );
    },
  },
  {
    accessorKey: "immigrationStatus",
    size: 150, // Giving enough room for the badge
    header: "Immigration",
    cell: ({ row, getValue }) => {
      const status = getValue() as string;

      const STATUS_OPTIONS = ["Citizen", "PR"];
      const STATUS_CLASSES: Record<string, string> = {
        Citizen: "bg-[#03516b] text-white",

        PR: "bg-green-300 text-white",
      };

      return (
        <DropdownCell
          value={status}
          options={STATUS_OPTIONS}
          optionClasses={STATUS_CLASSES}
          onChange={(newStatus: any) => {
            row.original.maritalStatus = newStatus; // update table data
            console.log("Updated status:", newStatus);
          }}
        />
      );
    },
  },
  {
    id: "notes",
    size: 150, // Large width for the input field column
    header: "Notes",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cell: () => {
      return <NotesCell note="" name="" />;
    },
  },
];
