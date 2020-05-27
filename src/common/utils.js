export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    // debugger
    if (timer) {
      // console.log(`清除 timer:${timer}`)
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
