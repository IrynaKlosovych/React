import PropTypes from 'prop-types';
import styles from "../styles/App.module.css"

// import { useState } from 'react';

function LabelInputBlock(props){
    const {label, description, isRequired, className, name, placeholder} = props;

    // const {error, SetError} = useState(false);

    return(
        <>
            <div className={className}>
                <div><label htmlFor={name}>{label} {isRequired? <span className={styles.required}>*</span> : null}</label></div>
                {(description && description !== "")?<div>{description}</div>:null} 
                <div>
                    <input type="text" name={name} id={name} placeholder={placeholder}/>
                </div>
                <div className={styles.error}></div>
            </div>
        </>
    )
}

LabelInputBlock.propTypes ={
    label: PropTypes.string,
    description: PropTypes.string,
    isRequired: PropTypes.bool, 
    className: PropTypes.string,
    name: PropTypes.string, 
    placeholder: PropTypes.string
}

export default LabelInputBlock