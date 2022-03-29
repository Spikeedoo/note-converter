import './App.css';
import React from 'react';
import Note from './note';
import eighth from './eighth.png';

const key = {
  "0": "C",
  "1": "C#",
  "2": "D",
  "3": "D#",
  "4": "E",
  "5": "F",
  "6": "F#",
  "7": "G",
  "8": "G#",
  "9": "A",
  "t": "Bb",
  "T": "Bb",
  "e": "B",
  "E": "B"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: []};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //this.setState({number: event.target.value});
    let numStr = event.target.value;
    let numStrArr = numStr.split('');
    this.setState({number: numStrArr})
  }

  render(){
    console.log(this.state);
    return (
      <div>
        <h1><img src={eighth} className='eighth'/>Note Translator</h1>
        <div className='input-container'>
          <input type='text' id='number-input' placeholder='Enter your #...' onChange={this.handleChange} />
        </div>
        <div className='note-container'>
          <ul>
            {
              ((this.state.number != [] && this.state.number != undefined) ?
                this.state.number.map((n) => {
                  if (n in [0,1,2,3,4,5,6,7,8,9] || ["t", "T", "e", "E"].includes(n)) {
                    return <Note noteType={key[n]}/>
                  }
                })
              : '')

            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
