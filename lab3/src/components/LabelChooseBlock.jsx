import PropTypes from 'prop-types';
import styles from "../styles/App.module.css"

function LabelChooseBlock(props) {
    const { label, description, isRequired, className, name, valueArray, type, register, errors } = props;

    return (
        <>
            <div className={`${className} ${errors ? styles["block-error"] : ''}`}>
                <div><label htmlFor={name}>{label} {isRequired ? <span className={styles.required}>*</span> : null}</label></div>
                {(description && description !== "") ? <div>{description}</div> : null}
                {valueArray.map((elem) => {
                    return (
                        <div key={elem.id}>
                            <input type={type} name={name} id={elem.id} value={elem.value} {...register(name)} />
                            <label htmlFor={elem.id}>{elem.value}
                                {elem.id.endsWith("other") && <input type="text" name={name} {...register(`${name}_other`)} />}</label>
                        </div>
                    );
                })}
                {errors && <div className={styles.error}>{errors.message}</div>}
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
    type: PropTypes.string,
    register: PropTypes.func,
    errors: PropTypes.object
}

export default LabelChooseBlock