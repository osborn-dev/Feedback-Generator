import PropTypes from 'prop-types'

function card({children, reverse}) {
  return (
    // 'CARD' == CSS CARD 'REVERSE' == CSS REVERSE
    // CONDITIONAL CLASS FOR THE CARD BACKGROUND/TEXT
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
  )
}

card.defaultProps = {
    reverse: false,
}

card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default card
