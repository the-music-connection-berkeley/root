# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
prevQuestion = ->
  console.log("previous question")
nextQuestion = ->
  console.log("next question")
window.onload = ->
  console.log("hello")
  prev = document.getElementById("prev")
  next = document.getElementById("next")
  if prev
    prev.addEventListener('click', prevQuestion)
    console.log("added addEventListener")
  if next
    next.addEventListener('click', nextQuestion)
