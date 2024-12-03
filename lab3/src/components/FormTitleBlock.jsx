import PropTypes from 'prop-types';

function FormTitleBlock(props){
    const {title, description, other, className} = props
    return(
        <>
            <div className={className}>
                <div>{title}</div>
                <div>{description}</div>
                <div>{other}</div>
            </div>
        </>
    )
}

FormTitleBlock.propTypes ={
    title: PropTypes.string,
    description: PropTypes.string,
    other: PropTypes.string, 
    className: PropTypes.string
}

export default FormTitleBlock