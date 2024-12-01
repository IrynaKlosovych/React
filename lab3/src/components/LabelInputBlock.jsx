import PropTypes from 'prop-types';
import styles from "../styles/App.module.css"

function LabelInputBlock(props) {
    const { label, description, isRequired, className, name, placeholder, register, errors } = props;
    return (
        <>
            <div className={`${className} ${errors ? styles["block-error"] : ''}`}>
                <div><label htmlFor={name}>{label} {isRequired ? <span className={styles.required}>*</span> : null}</label></div>
                {(description && description !== "") ? <div>{description}</div> : null}
                <div>
                    <input type="text" name={name} id={name} placeholder={placeholder} {...register(name)} />
                </div>
                {errors && <div className={styles.error}>{errors.message}</div>}
            </div>
        </>
    )
}

LabelInputBlock.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    isRequired: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.func,
    errors: PropTypes.object
}

export default LabelInputBlock