import { ColumnDef } from "@tanstack/react-table";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CustomTable from "..";
import { IComment } from "../../../interfaces";

interface Props {
  data: IComment[];
}

export default function CommentsTable({ data }: Props) {
  const columns: ColumnDef<IComment>[] = [
    {
      header: "Name",
      accessorKey: "name",
      cell: (info) => {
        const name = info.row.original.name;
        return <span className="w-[20%]">{name.substring(0, 24)}</span>;
      },
    },
    {
      header: "Email",
      accessorKey: "email",

      cell: (info) => {
        return <span className="w-[20%]">{info.getValue() as string}</span>;
      },
    },
    {
      header: "Body",
      accessorKey: "body",
      cell: (info) => {
        const body = info.row.original.body;

        return <span className="w-[50%]">{body.substring(0, 50)}....</span>;
      },
    },
    {
      header: "",
      accessorKey: "actions",
      cell: (info) => {
        const rowId = info.row.original.id;

        return (
          <div className="flex gap-2">
            <Link to={`/comments/${rowId}`} className="text-blue-500">
              <FaEyeSlash />
            </Link>
          </div>
        );
      },
    },
  ];
  return <CustomTable<IComment> columns={columns} initialData={data} />;
}
