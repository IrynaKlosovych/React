import PropTypes from 'prop-types';

function DisplayInput(props) {
    const { input } = props;
    return (
        <>
            <div className='screenInput'>
                <input type="text" readOnly value={input} placeholder="0" />
            </div>
        </>
    )
}

DisplayInput.propTypes = {
    input: PropTypes.string
}

export default DisplayInput