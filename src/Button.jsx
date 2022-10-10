
import PropTypes from 'prop-types';

export function Button({text,name}){
  if(!text) console.error("Incorrect data!")
  return <button>{text} {name}</button>
}

Button.defaultProps= {
  name: 'User'
}

Button.propTypes= {
  text: PropTypes.string.isRequired
}