import * as yup from 'yup';
import data from '../data/dataForLab.js'

const validationRules = {
    isRequired: (validation, value) =>  value ? validation.required("Відповідь на це запитання обов'язкова") : validation,
    minlen: (validation, value) => validation.min(value, `Мінімальна довжина ${value} символів`),
};

function Validate(validation, conditionals) {
    conditionals.forEach((condition) => {
        Object.entries(condition).forEach(([key, value]) => {
            if (validationRules[key]) {
                validation = validationRules[key](validation, value);
            }
        });
    }
    )
    console.log(validation)
    return validation;
}

const schema = yup.object(
    data.reduce((acc, field) => {
        if (field.content.conditionals) {
            console.log(field.id);
            let validation;
            switch (field.type) {
                case 'input': {
                    validation = yup.string();
                    break
                }
                case 'choose': {
                    if (field.content.type === "radio") {
                        validation = yup.string();
                    }
                    if (field.content.type === "checkbox") {
                        validation = yup.array().of(yup.bool())
                    }
                    break;
                }
                default:
                    validation = yup.mixed();
                    break;
            }
            validation = Validate(validation, field.content.conditionals)
            acc[field.content.name] = validation;
        }
        return acc;
    }, {})
);

export default schema