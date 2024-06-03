import state from './state.js'
import { controls, sounds } from './elements.js'
import * as actions from './actions.js'
import * as ele from './elements.js'
import { updateDisplay } from "./timer.js"

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function') {
            return
        }
        actions[action]()
    })
}

export function soundsRegisterControls() {
    sounds.addEventListener('click', (event) => {
        const soundButton = event.target.closest('.ph'); // Find the closest ancestor with the .ph class

        if (!soundButton) {
            return; // If the clicked element is not a button, do nothing
        }

        const sound = soundButton.dataset.action;

        if (typeof actions[sound] !== 'function') {
            return;
        }

        actions[sound]();
    });
}
export function setMinutes() {
    ele.minutes.addEventListener('focus', () => {
        ele.minutes.textContent = ""
        ele.minutes.setAttribute('contentEditable', true)
    })

    ele.minutes.addEventListener('keydown', (event) => {
        if (!/\d/.test(event.key) || ele.minutes.textContent.length >= 2) {
            event.preventDefault();
        } 
    });

    ele.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        ele.minutes.removeAttribute('contenteditable')
    })
}

export function appendPlaceholder() {
    ele.minutes.setAttribute("placeholder", "00")
}