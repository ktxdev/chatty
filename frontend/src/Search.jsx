function Search({ placeholder }) {
  return (
    <div className="bg-slate-200 px-2 py-1 rounded-md flex items-center gap-4">
      <img className="h-4 w-4" src="search.svg" alt="search" />
      <input
        className="w-full bg-inherit placeholder:text-gray-600 focus:outline-none"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Search;
