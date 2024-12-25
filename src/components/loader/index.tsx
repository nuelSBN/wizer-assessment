const Loader = () => (
  <div
    role="status"
    aria-label="Loading..."
    className="flex h-full w-full justify-center items-center"
  >
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" />
  </div>
);

export default Loader;
