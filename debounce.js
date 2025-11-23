function debounce(fn, wait, { leading = false } = {}) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;
  let hasLeadingRun = false;

  return function (...args) {
    lastArgs = args;
    lastThis = this;

    if (leading && !timer && !hasLeadingRun) {
      hasLeadingRun = true;
      return fn.apply(lastThis, lastArgs);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      hasLeadingRun = false;
      fn.apply(lastThis, lastArgs);
      timer = null;
    }, wait);
  };
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
