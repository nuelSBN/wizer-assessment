import Loader from "../../components/loader";
import Pagination from "../../components/pagination";
import CommentsTable from "../../components/table/comments";
import { useComments } from "../../hooks/useComments";

export default function Comments() {
  const {
    data,
    isFetching,
    currentPage,
    itemsPerPage,
    totalPages,
    setItemsPerPage,
    setCurrentPage,
  } = useComments();

  if (isFetching) {
    return <Loader />;
  }

  return (
    <section className="w-full h-full bg-white">
      <div className="h-[90%] border-b border-[#eee] py-2 overflow-y-scroll">
        <CommentsTable data={data || []} />
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
