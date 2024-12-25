import React from "react";
import UsersTable from "../../components/table/users";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";
import { useUsers } from "../../hooks/useUsers";

export default function Users() {
  const {
    data,
    isFetching,
    currentPage,
    itemsPerPage,
    totalPages,
    setItemsPerPage,
    setCurrentPage,
  } = useUsers();

  if (isFetching) {
    return <Loader />;
  }

  return (
    <section className="w-full h-full bg-white">
      <div className="h-[90%] border-b border-[#eee] py-2 overflow-y-scroll">
        <UsersTable data={data || []} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={itemsPerPage}
        onPageChange={(page) => setCurrentPage(page)}
        onRowsPerPageChange={(rows) => {
          setItemsPerPage(rows);
          setCurrentPage(1);
        }}
      />
    </section>
  );
}
