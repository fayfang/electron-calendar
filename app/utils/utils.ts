/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 放抖动函数
 * @param {function} callback 调用含税
 * @param {number} delay 延迟时间
 * @param {boolean} first 是否按第一次的参数触发
 */
export function debounce(
  callback: (...args: any[]) => void,
  delay = 200,
  first = false
) {
  let timer: NodeJS.Timeout | null;
  let saveArgs: any[] = [];
  return function debounceFn(...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    } else if (first) {
      saveArgs = args;
    }

    timer = setTimeout(() => {
      if (first) {
        callback(...saveArgs);
      } else {
        callback(...args);
      }

      timer = null;
    }, delay);
  };
}

export default null;

export function silent(callback: (...args: any[]) => void, delay = 500) {
  let silence = false;
  let timer: NodeJS.Timeout;
  return function silentFn(...args: any[]) {
    if (silence) {
      clearTimeout(timer);
    } else {
      callback(...args);
      silence = true;
    }
    timer = setTimeout(() => {
      silence = false;
    }, delay);
  };
}

export type SILENTFN = ReturnType<typeof silent>;
