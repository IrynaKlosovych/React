import PropTypes from 'prop-types';

const listOfButtons = [
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", "+", "=", "Clear"]
];

function DisplayButton(props) {
  const { buttonClick } = props
  return (
    <>
      <div className='buttonsContainer'>
        {listOfButtons.map((row, rowIndex) =>
          row.map((buttonName, index) => (
            <button key={`${rowIndex}-${index}`} onClick={() => buttonClick(buttonName)} >{buttonName}</button>
          ))
        )}</div>
    </>
  )
}

DisplayButton.propTypes = {
  buttonClick: PropTypes.func
}

export default DisplayButton