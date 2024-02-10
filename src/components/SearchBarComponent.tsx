import { type FormEventHandler } from "react";

type SearchBarPropsType = {
  handelSearch: (query: string) => void;
};

const SearchBarComponent = ({ handelSearch }: SearchBarPropsType) => {
  const handelSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const query = formData.get("searchBarInput") as string;
    handelSearch(query.toLocaleLowerCase());
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className="flex gap-2 max-sm:flex-col max-sm:gap-5">
        <input
          type="text"
          name="searchBarInput"
          className="block w-full rounded-full border bg-white px-4 py-2 text-blue-700 shadow-xl focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 md:min-w-[20rem]"
          placeholder="Search..."
        />
        <button className="justify-center rounded-full bg-blue-600 px-4 py-2 text-white shadow-xl max-sm:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBarComponent;
