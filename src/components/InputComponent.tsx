const InputComponent = ({
  name,
  labelText,
}: {
  labelText: string;
  name: string;
}) => {
  return (
    <>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">{labelText} :</span>
        </div>
        <input
          type="text"
          name={name}
          placeholder="Type here"
          className="input input-bordered input-primary w-full rounded-md"
        />
      </label>
    </>
  );
};

export default InputComponent;
