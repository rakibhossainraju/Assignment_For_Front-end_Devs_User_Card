const SortBarComponent = () => {
  return (
    <div className="dropdown dropdown-bottom max-md:flex-col">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 gap-20 rounded-lg bg-white px-5 shadow-xl max-sm:min-w-full"
      >
        <span>Sorted by:</span>
        <svg
          className="aspect-square w-5 fill-blue-950"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          viewBox="0 0 24 24"
        >
          <path d="M24,7v2H10v-2h14Zm-14,7h11v-2H10v2Zm0,5h8v-2H10v2Zm0,5h5v-2h-5v2ZM3.586,.586L.086,4.086l1.414,1.414,2.5-2.5V24h2V3l2.5,2.5,1.414-1.414L6.414,.586C5.635-.193,4.365-.193,3.586,.586Z" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-white p-2 shadow"
      >
        <li>
          <a className="active-style">Name</a>
        </li>
        <li>
          <a className="active-style">Email</a>
        </li>
        <li>
          <a className="active-style">Company Name</a>
        </li>
      </ul>
    </div>
  );
};

export default SortBarComponent;
