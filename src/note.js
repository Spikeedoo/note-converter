import React from 'react';
import note from './quarter.png';
import './note.css';
import 'animate.css';

export default class Note extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {color: ''};  
    }

    componentDidMount(){
        switch(this.props.noteType) {
            case 'C':
                // color='#a8e6cf';
                this.setState({color: '#a8e6cf'});
                break;
            case 'C#':
                // color='#dcedc1';
                this.setState({color: '#dcedc1'});
                break;
            case 'D':
                // color='#ffd3b6';
                this.setState({color: '#ffd3b6'});
                break;
            case 'D#':
                // color='#ffaaa5';
                this.setState({color: '#ffaaa5'});
                break;
            case 'E':
                // color='#ff8b94';
                this.setState({color: '#ff8b94'});
                break;
            case 'F':
                // color='#d2e0f2';
                this.setState({color: '#d2e0f2'});
                break;
            case 'F#':
                // color='#e3fffb';
                this.setState({color: '#e3fffb'});
                break;
            case 'G':
                // color='#d6ffd9';
                this.setState({color: '#d6ffd9'});
                break;
            case 'G#':
                // color='#fbece9';
                this.setState({color: '#fbece9'});
                break;
            case 'A':
                // color='#feffe1';
                this.setState({color: '#feffe1'});
                break;
            case 'Bb':
                // color='#afdfdb';
                this.setState({color: '#afdfdb'});
                break;
            case 'B':
                // color='#75c9cc';
                this.setState({color: '#75c9cc'});
                break;
        }
    }

    render() {
        return(
            <li className='note animate__animated animate__fadeInUp' style={(this.state.color!=undefined)?{ borderColor: this.state.color }:''}>
                <img src={note}/>
                <p style={(this.state.color!=undefined)?{ color: this.state.color }:''}>{(this.props.noteType != undefined) ? this.props.noteType : ''}</p>
            </li>
        );
    }
}