import * as yup from 'yup';
import data from '../data/dataForLab.js'

const validationRules = {
    isRequired: (validation, value) => value ? validation.required("Відповідь на це запитання обов'язкова") : validation,
    minlen: (validation, value) => validation.min(value, `Мінімальна довжина ${value} символів`),
    minlencheckbox: (validation, value) => validation.min(value, `Мінімальна кількість ${value}`).typeError(`Необхідно обрати принаймні ${value}`),

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
    return validation;
}

const schema = yup.object(
    data.reduce((acc, field) => {
        if (field.content.conditionals) {
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
                        validation = yup.array()
                    }
                    break;
                }
                case 'multichoose': {

                    validation = yup.array()
                        .of(
                            yup.object().shape(
                                Object.fromEntries(
                                    field.content.valueArray.rows.map((row) => [
                                        row.name,
                                        yup.string().required(),
                                    ])
                                )
                            )
                        )
                        .test(
                            "all-answered",
                            "Для цього запитання потрібно дати одну відповідь на рядок",
                            (values) => {
                                return values.every((row) =>
                                    Object.values(row).every((value) => value && value.trim() !== "")
                                );
                            }
                        );

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