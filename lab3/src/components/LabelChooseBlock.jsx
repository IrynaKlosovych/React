import PropTypes from 'prop-types';
import styles from "../styles/App.module.css"

// import { useState } from 'react';

function LabelChooseBlock(props) {
    const { label, description, isRequired, className, name, valueArray, type} = props;

    // const {error, SetError} = useState(false);

    return (
        <>
             <div className={className}>
                <div><label htmlFor={name}>{label} {isRequired ? <span className={styles.required}>*</span> : null}</label></div>
                {(description && description !== "") ? <div>{description}</div> : null}
                {valueArray.map((elem) => {
                    return (
                        <div key={elem.id}>
                            <input type={type} name={name} id={elem.id} value={elem.value} />
                            <label htmlFor={elem.id}>{elem.value}</label>
                            {elem.id.endsWith("other") && <input type="text" name={name}/>}
                        </div>
                    );
                })}
                <div className={styles.error}></div>
            </div>
        </>
    )
}

LabelChooseBlock.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    isRequired: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    valueArray: PropTypes.array,
    type: PropTypes.string
}

export default LabelChooseBlock