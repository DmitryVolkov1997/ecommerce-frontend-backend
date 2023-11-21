import {Box, Input} from "@chakra-ui/react"
import {FC} from "react"
import {FieldErrors, UseFormRegister} from "react-hook-form"
import {Inputs} from "../CheckoutForm.tsx"


interface InputField {
    id: number;
    placeholder: string;
    size: string;
    register: UseFormRegister<Inputs>;
    registerName: string
    errors: FieldErrors<Inputs>;
}

const InputField: FC<InputField> = ({id, size, placeholder, register, registerName, errors}) => {
    const error = errors[registerName]

    return (
        <Box className="w-full" mr={3}
             _last={{
                 mr: 0,
             }}>
            <Input
                key={id}
                placeholder={placeholder}
                size={size}
                {...register(registerName, {required: true})}
            />

            {error && (
                <Box
                    as={'span'}
                    className="error text-red text-base font-medium">
                    {error.message}
                </Box>
            )}
        </Box>
    )
}

export default InputField

