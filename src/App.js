/*
import React, {Fragment} from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            number: '',
        };

    }

    handleChange = (event) => {
        this.setState({number: event.target.value});
    };

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    isIncrementCounter = () => {
        this.setState({
            counter: this.state.counter + +this.state.number ,
        });
    };

    decrementCounter = () => {
        this.setState({
            counter: this.state.counter - +this.state.number,
        });

    };

    render() {
        return (
            <Fragment>
                <h1>{this.state.counter}</h1>
                <button onClick={this.isIncrementCounter}>+</button>
                <button onClick={this.decrementCounter}>-</button>

                <input name="number" type="number" number={this.state.number}
                       onChange={this.handleChange}/>
            </Fragment>
        );
    }
}

export default App;*/

/*
import React from 'react';
import Timer from './components/Timer';

function App (props) {


    return <Timer/>
}


export default App;*/

import React from 'react';
