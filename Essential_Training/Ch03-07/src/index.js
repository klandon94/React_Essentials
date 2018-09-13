import React from 'react'
import {render} from 'react-dom'
import './stylesheets/ui.scss'
import {App} from './components/App'
import {Whoops404} from './components/Whoops404'
import {Router, Route, hashHistory} from 'react-router'

window.React = React

// hashHistory can be set up without configuring a server
render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="list-days" component={App}>
            <Route path=":filter" component={App}/>
        </Route>
        <Route path="add-day" component={App} />
        <Route path="*" component={Whoops404} />
    </Router>,
    document.getElementById('react-container')
)