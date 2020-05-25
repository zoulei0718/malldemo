export function debounce(fun, delay = 300, ...args) {
  let timer = null
  if (timer) {
    console.log(`清除 timer${timer}`)
    clearTimeout(timer)

  }
  timer = setTimeout(() => {
    console.log(`执行了防抖 debounce... timer:${timer}`);
    fun.apply(this, args)
  }, delay);

}
