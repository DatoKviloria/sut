import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="SUTJS - JavaScript test framework"
      meta={[
        { name: 'description', content: 'JavaScript test framework' },
        { name: 'keywords', content: 'Sutjs, nodejs, neo, sut@neo, sut 2.0, tdd, framework, assert' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 100+'%',
        marginTop: -27
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
