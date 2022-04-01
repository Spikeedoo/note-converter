import './App.css';
import React from 'react';
import Note from './note';
import eighth from './eighth.png';
import * as Tone from 'tone';

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

const synth = new Tone.Synth().toDestination();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: []};

    this.handleChange = this.handleChange.bind(this);
    this.playMusic = this.playMusic.bind(this);
  }

  handleChange(event) {
    //this.setState({number: event.target.value});
    let numStr = event.target.value;
    let numStrArr = numStr.split('');
    this.setState({number: numStrArr})
  }

  playMusic() {
    let noteElements = document.getElementsByClassName('note');
    this.cleanBackgrounds(noteElements);
    let notes = []
    for (let i=0; i<this.state.number.length; i++) {
      notes.push(key[this.state.number[i]] + "4");
    }
    let i = 0;
    Tone.start().then(() => {
      const loop = new Tone.Loop(time => {
        if (i < notes.length){
          synth.triggerAttackRelease(notes[i], "8n", time);
          noteElements[i].style.backgroundColor ='darkslategray';
          i+=1;
        }
      }, "4n").start(0)
      Tone.Transport.start()
    })
  }

  cleanBackgrounds(noteElements){
    for (let i=0; i<noteElements.length; i++) {
      noteElements[i].style.backgroundColor = 'transparent';
    }
  }

  render(){
    return (
      <div>
        <h1><img src={eighth} className='eighth'/>Note Translator</h1>
        <div className='input-container'>
          <input type='text' id='number-input' placeholder='Enter your #...' onChange={this.handleChange} />
          <button className='play-btn' onClick={ this.playMusic }><i className="fa-solid fa-play"></i></button>
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
        <div className='signature'>
          <span>by Matteo Grilla</span>
        </div>
      </div>
    );
  }
}

export default App;
