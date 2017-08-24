import { Dispatcher } from 'flux'

import React, { Component } from 'react';

class DispatcherClass extends Dispatcher {
    handleAction(action) {
        this.dispatch({
            type: action.type, 
            payload: action.payload
        })
    }
}

export default DispatcherClass