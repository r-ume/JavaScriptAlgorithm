import React from 'react'
import PropTypes from 'prop-types'

// component declaration is the same
const MovieHeader = (props) => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  )
}

// class MovieHeader extends React.Component {
//   render() {
//     const { text } = this.props

//     return (
//       <header className="App-header">
//         <h2>{text}</h2>
//       </header>
//     )
//   }
// }

MovieHeader.propTypes = {
  text: PropTypes.string,
}

export default MovieHeader
