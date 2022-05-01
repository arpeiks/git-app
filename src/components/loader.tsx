const Loader = () => (
  <svg width="100" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#010920">
    <circle cx="15" cy="15" r="15">
      <animate
        to="15"
        from="15"
        begin="0s"
        dur="0.8s"
        values="15;9;15"
        attributeName="r"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        to="1"
        from="1"
        begin="0s"
        dur="0.8s"
        values="1;.5;1"
        calcMode="linear"
        repeatCount="indefinite"
        attributeName="fill-opacity"
      />
    </circle>
    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
      <animate
        to="9"
        from="9"
        begin="0s"
        dur="0.8s"
        values="9;15;9"
        attributeName="r"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        to="0.5"
        from="0.5"
        begin="0s"
        dur="0.8s"
        values=".5;1;.5"
        calcMode="linear"
        repeatCount="indefinite"
        attributeName="fill-opacity"
      />
    </circle>
    <circle cx="105" cy="15" r="15">
      <animate
        to="15"
        from="15"
        begin="0s"
        dur="0.8s"
        values="15;9;15"
        attributeName="r"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        to="1"
        from="1"
        begin="0s"
        dur="0.8s"
        values="1;.5;1"
        calcMode="linear"
        repeatCount="indefinite"
        attributeName="fill-opacity"
      />
    </circle>
  </svg>
);

export default Loader;
