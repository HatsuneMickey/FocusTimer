import state from './state.js'
import * as timer from './timer.js'
import * as ele from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
}

export function add5() {
    state.addState = true
}

export function decrease5() {
    state.decreaseState = true
}

export function toggleForest() {
    ele.forestSound.classList.toggle('secondary');
    toggleMusic()
    ele.rainSound.classList.remove('secondary');
    ele.cafeteriaSound.classList.remove('secondary');
    ele.fireplaceSound.classList.remove('secondary');
}

export function toggleRain() {
    ele.rainSound.classList.toggle('secondary');
    toggleMusic()
    ele.forestSound.classList.remove('secondary');
    ele.cafeteriaSound.classList.remove('secondary');
    ele.fireplaceSound.classList.remove('secondary');
}

export function toggleCafeteria() {
    ele.forestSound.classList.remove('secondary');
    ele.rainSound.classList.remove('secondary');
    ele.cafeteriaSound.classList.toggle('secondary');
    toggleMusic()
    ele.fireplaceSound.classList.remove('secondary');
}   

export function toggleFireplace() {
    ele.forestSound.classList.remove('secondary');
    ele.rainSound.classList.remove('secondary');
    ele.cafeteriaSound.classList.remove('secondary');
    ele.fireplaceSound.classList.toggle('secondary')    
    toggleMusic()
}

export function set() {
    ele.minutes.setAttribute('contenteditable', true)   
    ele.minutes.focus()
    document.documentElement.classList.remove('running')
    state.isRunning = false
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if(state.isMute && ele.forestSound.classList.contains('secondary')) {
        sounds.forestBackground.play()
        return
    }
    if(state.isMute && ele.rainSound.classList.contains('secondary')) {
        sounds.rainBackground.play()
        return
    }
    if(state.isMute && ele.cafeteriaSound.classList.contains('secondary')) {
        sounds.cafeteriaBackground.play()
        return
    }
    if(state.isMute && ele.fireplaceSound.classList.contains('secondary')) {
        sounds.fireplaceBackground.play()
        return
    }
    sounds.forestBackground.pause()
    sounds.rainBackground.pause()
    sounds.cafeteriaBackground.pause()
    sounds.fireplaceBackground.pause()
}

export function pauseMusic() {
    sounds.forestBackground.pause()
    sounds.rainBackground.pause()
    sounds.cafeteriaBackground.pause()
    sounds.fireplaceBackground.pause()
}