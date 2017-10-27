import React from 'react'
import { render } from 'react-dom'
import { Navbar } from './components/Navbar'
import { Signup } from './components/Signup'

window.React = React

render(
		<Navbar />, 
 document.getElementById('app')
)

