import {FC} from "react"
import InputField from "../InputField/InputField.tsx"
import {InputProps} from "../inputData.ts"
import {FieldErrors, UseFormRegister} from "react-hook-form"
import {Inputs} from "../CheckoutForm.tsx"

interface IFormSection {
    formData: InputProps[]
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>;
}

export const FormSection: FC<IFormSection> = ({formData, register, errors}) => {
    return (
        formData.map(input => (
            <InputField
                id={input.id}
                key={input.id}
                placeholder={input.label}
                size={input.size}
                register={register}
                registerName={input.label}
                errors={errors}
            />
        ))
    )
}



