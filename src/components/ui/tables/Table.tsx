/* eslint-disable @typescript-eslint/no-explicit-any */

import SearchBox from "../../search/Search";
import { DataTable } from "./Datatable";
import type { ColumnDef } from "@tanstack/react-table";

interface TableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  search: boolean;
  label: string;

  labelInfo: string;
  buttons?: React.ReactNode;
}

export function Table<TData>({
  columns,
  data,
  label,
  labelInfo,

  buttons,
  search,
}: TableProps<TData>) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full grid grid-cols-3 items-center">
        {/* Left: Title */}
        <div>
          <h3 className="font-bold text-2xl">{label}</h3>
          <p className="text-xs text-gray-500">{labelInfo}</p>
        </div>

        {/* Center: Buttons */}
        <div className="flex justify-center gap-2">{buttons}</div>

        {/* Right: Search */}
        <div className="flex justify-end">{search && <SearchBox />}</div>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default Table;
