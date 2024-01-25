// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounce(func: any, timeout: number) {
  let timeoutId: number | null = null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    // eslint-disable-next-line prefer-spread, prefer-rest-params
    timeoutId = setTimeout(() => func.apply(null, args as []), timeout);
  }
}

export default debounce;
