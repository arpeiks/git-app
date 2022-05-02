const stringToColour = (str: string) => {
  let hash = 0;
  let colour = "#";

  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);

  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    let sub = "00" + value.toString(16);
    sub = sub.substring(sub.length - 2);
    colour += sub;
  }
  return colour;
};

export default stringToColour;
