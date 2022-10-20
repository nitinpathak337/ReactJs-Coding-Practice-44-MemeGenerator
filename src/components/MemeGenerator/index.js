import {Component} from 'react'
import {CustomButton, MemeContainer, Para} from './styledComponents'

import './index.css'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    memeVisible: false,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
  }

  onImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onTopText = event => {
    this.setState({topText: event.target.value})
  }

  onBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onGenerate = () => {
    this.setState({memeVisible: true})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, memeVisible} = this.state

    return (
      <>
        <h1 className="heading">Meme Generator</h1>
        <div className="bg-container">
          <form className="form">
            <label htmlFor="image">Image Url</label>

            <input
              type="text"
              id="image"
              onChange={this.onImageUrl}
              value={imageUrl}
            />
            <label htmlFor="topText">Top Text</label>

            <input
              type="text"
              id="topText"
              onChange={this.onTopText}
              value={topText}
            />
            <label htmlFor="bottomText">Bottom Text</label>

            <input
              type="text"
              id="bottomText"
              onChange={this.onBottomText}
              value={bottomText}
            />
            <label htmlFor="font">Font Size</label>
            <select value={fontSize} onChange={this.onFontSize} id="font">
              {fontSizesOptionsList.map(eachItem => (
                <option value={eachItem.optionId} key={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <CustomButton type="button" onClick={this.onGenerate}>
              Generate
            </CustomButton>
          </form>
          <MemeContainer visible={memeVisible} data-testid="meme">
            <Para size={`${fontSize}px`}>{topText}</Para>
            <Para size={`${fontSize}px`}>{bottomText}</Para>
          </MemeContainer>
        </div>
      </>
    )
  }
}

export default MemeGenerator
