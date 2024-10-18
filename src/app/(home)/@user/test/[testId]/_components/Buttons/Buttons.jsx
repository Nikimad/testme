const Buttons = ({
  mainRef,
  mainType,
  mainText,
  altText,
  onMainClick,
  onAltClick,
}) => (
  <>
    <button
      type={mainType}
      className="pill"
      ref={mainRef}
      onClick={onMainClick}
    >
      {mainText}
    </button>
    {altText && (
      <button type="button" className="interactivetext" onClick={onAltClick}>
        {altText}
      </button>
    )}
  </>
);

export default Buttons;
