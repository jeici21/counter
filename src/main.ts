import './style.css'
import { Counter, setupCounter } from './counter.ts'
import $ from 'jquery'

$(() => {
  $('#app')!.html(Counter)
  setupCounter()
})