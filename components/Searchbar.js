import { SearchIcon } from "@heroicons/react/outline";

 export default function Searchbar() {
    return (
        <div className="flex items-center justify-between bg-none">
          <form method="GET">
            <div className="relative text-white focus-within:text-gray-200">
              <span className="absolute inset-y-0 left-0 flex items-center pr-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                  <SearchIcon
                    color="#E4E4E7"
                    // fontSize="20px"
                    className="search_icon h-5 w-5 mt-2 text-gray-400 flex flex-col items-center justify-center"
                   />
                </button>
              </span>
              <input type="search" name="q" className="input py-2 text-md text-gray-200 mt-2 bg-gray-900 border-b-2 border-gray-400 bg-opacity-5 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-white" placeholder = "Search..." autoComplete="off" />
          </div>
        </form>
      </div>
    );
}