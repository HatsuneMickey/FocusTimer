import state from './state.js'
import * as ele from './elements.js'
import { reset } from './actions.js'

export function countdown() {
    clearTimeout(state.countdownId)
    
    let minutes = Number(ele.minutes.textContent)
    let seconds = Number(ele.seconds.textContent)
    
    if(!state.isRunning) {
        return
    }
 
    if(state.addState === true) {
        minutes = minutes + 5
        state.addState = false
    }

    if(state.decreaseState === true) {
        minutes = minutes - 5
        state.decreaseState = false
    }

    seconds--
    
    if(seconds < 0) {
        seconds = 59
        minutes--
    }
    
    if(minutes > 60) {
        minutes = 60
        seconds = 0
    }

    if(minutes < 0) {
        reset()
        return
    }

    
    updateDisplay(minutes, seconds)
    state.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    ele.minutes.textContent = String(minutes).padStart(2, "0")
    ele.seconds.textContent = String(seconds).padStart(2, "0")
}