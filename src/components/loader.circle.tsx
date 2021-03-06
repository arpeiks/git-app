const CircleLoader = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="black">
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            dur="1s"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            repeatCount="indefinite"
            attributeName="transform"
          />
        </path>
      </g>
    </g>
  </svg>
);

export default CircleLoader;
