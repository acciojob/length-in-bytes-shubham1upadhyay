const byteSize = (str) => {
var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
