import $ from "jquery";
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

export const setupCounter = () => {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    $('#counter').html(`count is ${counter}`)
  }
  $('#counter').on('click', () => setCounter(counter + 1))
  setCounter(0)
}

export const Counter = /*html*/`
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  `