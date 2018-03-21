import React from 'react'
import Link from 'gatsby-link'
import './style.css'
import logo from '../assets/logo.svg'
import featureFull from '../assets/ff.svg'
import easyToUnd from '../assets/und.svg'
import easyToSet from '../assets/set.svg'
import terminalImage from '../assets/terminal.png';

const IndexPage = () => (
  <div>
    <div className='card-full'>
      <img style={{width: 150, height: 150}} src={logo} />
      <p className='desc'>SUT@Neo is a feature-full JavaScript TDD framework for Node.js, Easy to make async testing. SUT@Neo allowing for flexible and accurate tdd pair programming.</p>
      {/* <p>Now go build something great.</p> */}
      <div>
        <iframe 
          src="https://ghbtns.com/github-btn.html?user=dkvilo&repo=sut&type=star&count=true&size=large" 
          style={{border: 'none'}} width="120px" height="30px"></iframe>
      </div>
      <div className='button-group'>
        <Link className='button' to="/docs/">Read The Docs</Link>
        <Link className='button' to="/article/getting-started">Getting Started</Link>
      </div>
    </div>
    {/* Section two */}
    <div className='card-full' style={{padding: 100, background: '#fff', display: 'flex', flexDirection: 'row'}}>
      <div className='flex-col'>
        <img width={100} src={easyToSet} />
        <h1>Easy setup</h1>
        <p style={{padding: 20}}>Complete and easy to set-up JavaScript testing solution. Works out of the box for any React project</p>
      </div>
      <div className='flex-col'>
        <img width={100} src={featureFull} />
        <h1>Feature full</h1>
        <p style={{padding: 20}}>Complete and easy to set-up JavaScript testing solution. Works out of the box for any React project</p>
      </div>
      <div className='flex-col'>
        <img width={100} src={easyToUnd} />
        <h1>Easy to setup</h1>
        <p style={{padding: 20}}>Complete and easy to set-up JavaScript testing solution. Works out of the box for any React project</p>
      </div>  
    </div>
    {/* section three */}
    <div className='card-full' style={{padding: 100, background: '#fff', display: 'flex', flexDirection: 'row'}}>
      <div className='flex-col'>
        <h1>Beautiful & Simple</h1>
        <p style={{padding: 20}}>Complete and easy to set-up JavaScript testing solution. Works out of the box for any React project</p>
      </div>
      <div className='flex-col'>
        <img className='image-a' width={650} src={terminalImage} />
      </div>
    </div>

  </div>
)

export default IndexPage

