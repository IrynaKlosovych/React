import PropTypes from 'prop-types';
import styles from "../styles/App.module.css"

function LabelMultiChooseBlock(props) {

    const { label, description, isRequired, className, valueArray, type, register, name, errors, handelChange} = props;

    return (
        <>
            <div className={`${className} ${errors ? styles["block-error"] : ''}`}>
                <div><label>{label} {isRequired ? <span className={styles.required}>*</span> : null}</label></div>
                {(description && description !== "") ? <div>{description}</div> : null}

                <div className={`${styles['question-header']}`}>
                    <div></div>

                    {valueArray.columns.map((elem) => {
                        return (
                            <div key={`Id ${elem}`}>
                                {elem}
                            </div>
                        )
                    })}
                </div>
                {valueArray.rows.map((row) => (
                    <div key={row.name} className={`${styles['choose-rows']}`} role='radiogroup'>
                        <div><label htmlFor={row.name}>{row.label}</label></div>
                        {valueArray.columns.map((column) => (
                            <div key={`${row.name}-${column}`}>
                                <input type={type} name={`${name}[0].${row.name}`} id={`${row.name}-${column}`}
                                 value={`${column}`} {...register(`${name}[0].${row.name}`)} onChange={()=>handelChange(name)}/>
                            </div>
                        ))}
                    </div>
                ))}
                {errors && <div className={styles.error}>{errors.message}</div>}
            </div>
        </>
    )
}

LabelMultiChooseBlock.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    isRequired: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.string,
    valueArray: PropTypes.object,
    register: PropTypes.func,
    errors: PropTypes.object,
    name: PropTypes.string,
    handelChange: PropTypes.func
}

export default LabelMultiChooseBlock