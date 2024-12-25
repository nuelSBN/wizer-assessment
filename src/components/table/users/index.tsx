import { ColumnDef } from "@tanstack/react-table";
import { FaEye } from "react-icons/fa";
import CustomTable from "..";
import { IUsers } from "../../../interfaces";
import { Link } from "react-router-dom";

interface Props {
  data: IUsers[];
}

export default function UsersTable({ data }: Props) {
  const columns: ColumnDef<IUsers>[] = [
    {
      header: "Name",
      accessorKey: "name",
      cell: (info) => {
        return <span className="">{info.getValue() as string}</span>;
      },
    },
    {
      header: "Username",
      accessorKey: "username",
      cell: (info) => {
        return <span className="">{info.getValue() as string}</span>;
      },
    },
    {
      header: "Email",
      accessorKey: "email",
      cell: (info) => {
        return <span className="">{info.getValue() as string}</span>;
      },
    },
    {
      header: "Address",
      accessorKey: "address",
      cell: (info) => {
        const address = info.row.original.address;
        return (
          <span className="">
            {address.suite}, {address.street}, {address.city}
          </span>
        );
      },
    },
    {
      header: "Phone",
      accessorKey: "phone",
      cell: (info) => {
        return <span className="">{info.getValue() as string}</span>;
      },
    },
    {
      header: "Website",
      accessorKey: "website",
      cell: (info) => {
        return <span className="">{info.getValue() as string}</span>;
      },
    },
    {
      header: "Company",
      accessorKey: "company",
      cell: (info) => {
        const company = info.row.original.company;
        return <span className="">{company.name}</span>;
      },
    },
    {
      header: "",
      accessorKey: "actions",
      cell: (info) => {
        const rowId = info.row.original.id;

        return (
          <div className="flex gap-2">
            <Link to={`/users/${rowId}`} className="text-blue-500">
              <FaEye />
            </Link>
          </div>
        );
      },
    },
  ];
  return <CustomTable<IUsers> columns={columns} initialData={data} />;
}
