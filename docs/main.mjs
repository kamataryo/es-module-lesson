import * as A from './a.mjs'
import * as B from './b.mjs'

const elementA = document.getElementById('module-a-status')
const elementB = document.getElementById('module-b-status')

const elements = document.getElementsByTagName('p')

elementA.innerHTML = 'module A is loaded: ' + JSON.stringify(A)
elementB.innerHTML = 'module B is loaded: ' + JSON.stringify(B)
