interface SearchBarPropsType {
  handelSearch: (query: string) => void;
}

const SearchBarComponent = ({ handelSearch }: SearchBarPropsType) => {
  return (
    <div className="flex">
      <input
        onChange={(event) =>
          handelSearch(event.target.value.trim().toLowerCase())
        }
        type="text"
        className="block w-full rounded-full border bg-white px-4 py-3 pl-5 text-blue-700 shadow-xl focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 md:min-w-[20rem]"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBarComponent;
