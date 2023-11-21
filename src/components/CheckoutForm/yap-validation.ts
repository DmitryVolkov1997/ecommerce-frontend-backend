import {useCallback} from "react"
import * as yup from "yup"

type FormData = {
    "First name": string;
    "Last name": string;
};

export type ValidationSchema = yup.AnyObjectSchema;

export const useYupValidationResolver = (validationSchema: ValidationSchema) =>
    useCallback(
        async (data: FormData) => {
            try {
                const values = await validationSchema.validate(data, {
                    abortEarly: false,
                })

                return {
                    values,
                    errors: {},
                }
            } catch (errors: yup.ValidationError | unknown) {
                return {
                    values: {},
                    errors: (errors as yup.ValidationError).inner.reduce(
                        (allErrors: Record<string, unknown>, currentError: yup.ValidationError) => ({
                            ...allErrors,
                            [String(currentError.path)]: {  // Преобразовываем currentError.path в строку
                                type: currentError.type ?? "validation",
                                message: currentError.message,
                            },
                        }),
                        {}
                    ),
                }
            }
        },
        [validationSchema]
    )

export const validationSchema: ValidationSchema = yup.object().shape({
    ["First name"]: yup.string().required("Минимум 2 символа"),
    ["Last name"]: yup.string().required("Минимум 2 символа"),
    ["Street address"]: yup.string().required("Минимум 2 символа"),
    ["Town / City"]: yup.string().required("Минимум 2 символа"),
    ["Email address"]: yup.string().email("Неверный формат адреса электронной почты").required("Минимум 2 символа")
})
