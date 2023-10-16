export const InStockFilter = ({ handleChangeStock, isInStock }) => {
  return (
    <fieldset className="me-5">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>In stock</span>
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleChangeStock}
            checked={isInStock}
          />
        </label>
      </div>
    </fieldset>
  );
};
