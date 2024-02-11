type FunctionType = (...args: any[]) => void;

export function debounce(func: FunctionType, delay: number) {
  let timer: number;

  return function (this: any, ...args: any[]) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
