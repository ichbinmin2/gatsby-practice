import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import Text from '../components/Text'

const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Text text="Hello, World" />
      <Link to="/info">To Info Page</Link>
    </div>
  )
  //
}

export default IndexPage
