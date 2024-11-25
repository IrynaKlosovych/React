import PropTypes from 'prop-types';

function DisplayOutput(props) {
    const { result } = props;
    return (
        <>
            <div className='screenOutput'>
                <input type="text" readOnly value={result} placeholder="Result" />
            </div>
        </>
    )
}

DisplayOutput.propTypes = {
    result: PropTypes.string
}

export default DisplayOutput