import {default as React, Component} from 'react';
import ReactDOM from "react-dom";
const ReactToastr = require("react-toastr");
const {ToastContainer} = ReactToastr;

const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

export class HelloWorld extends React.Component {
    addAlert() {
        this.refs.container.success(
            "Welcome welcome welcome!!",
            "You are now home my friend. Welcome home my friend.", {
                timeOut: 30000,
                extendedTimeOut: 10000
            });
        window.open("http://youtu.be/3SR75k7Oggg");
    }

    clearAlert() {
        this.refs.container.clear();
    }

    render () {
        return (
            <div>
                <ToastContainer ref="container"
                                toastMessageFactory={ToastMessageFactory}
                                className="toast-top-right" />
                <button onClick={this.addAlert}>GGininder</button>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
);
