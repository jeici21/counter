import $ from "jquery";

export function setupCounter(element: JQuery) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    $(element).html(`count is ${counter}`)
  }
  element.on('click', () => setCounter(counter + 1))
  setCounter(0)
}
