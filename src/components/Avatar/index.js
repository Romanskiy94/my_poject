import React from 'react';

class Avatar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            error: null
        };
    }
    onErrorHandler = (e) => {};

    render () {
        if(this.state.error){
            return <div style={{backgroundColor:  'red'}}>{`${this.props.firstName[0]}${this.props.lastName}`} </div>;
        }
        return (
            <img className={this.props.className} src={this.props.src} alt={this.onErrorHandler()}/>
        );
    }
}

export default Avatar;