export const SearchInput = ({ handleSearchChange, value, reset }) => {
  return (
    <div className="input-group input-group-lg mb-5">
      <input
        onChange={handleSearchChange}
        value={value}
        type="text"
        className="form-control"
        placeholder="Type to search ..."
      />
      <button
        onClick={reset}
        className="btn btn-outline-secondary"
        type="button"
      >
        Reset
      </button>
    </div>
  );
};
