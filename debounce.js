function debounce(fn, wait, { leading = false }) {
  let timer;
  let count = 0;
  if (leading && !timer) {
    return function (...args) {
      fn.apply(this, args);
    };
  } else {
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, wait);
    };
  }
}

function hi() {
  return "hello";
}
timer = 5000;

const handleMouseMove = debounce(
  (index) => {
    console.log(index);
  },
  1000,
  { leading: true }
);
handleMouseMove(1);
handleMouseMove(2);
handleMouseMove(3);
handleMouseMove(4);
// document.addEventListener("mousemove", handleMouseMove); // Add listener
// document.removeEventListener("mousemove", handleMouseMove); // Remove listener
