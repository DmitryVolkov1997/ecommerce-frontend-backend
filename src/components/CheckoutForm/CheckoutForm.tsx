import { Box, Button, InputGroup, Stack } from '@chakra-ui/react'
import { CheckoutSummary, Heading } from 'components'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './CheckoutForm.module.scss'
import { FormSection } from './FormSection/FormSection.tsx'
import { inputData } from './inputData.ts'
import { useYupValidationResolver, validationSchema } from './yap-validation.ts'

export type Inputs = {
	[key: string]: string
}

export const CheckoutForm: FC = () => {
	const resolver = useYupValidationResolver(validationSchema) as never
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ resolver })
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

	return (
		<Box className={styles.checkout}>
			<Box className={styles.box}>
				<Heading className={styles.title}>
					How would you like to get your order?
				</Heading>

				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Stack spacing={3}>
						<InputGroup size='sm'>
							<FormSection
								formData={inputData.slice(0, 2)}
								register={register}
								errors={errors}
							/>
						</InputGroup>

						<FormSection
							formData={inputData.slice(2, 3)}
							register={register}
							errors={errors}
						/>

						<InputGroup size='sm'>
							<FormSection
								formData={inputData.slice(3, 6)}
								register={register}
								errors={errors}
							/>
						</InputGroup>

						<FormSection
							formData={inputData.slice(6, 8)}
							register={register}
							errors={errors}
						/>
					</Stack>

					<Button
						className={styles.btn}
						backgroundColor='blackAlpha.900'
						color='white'
						type={'submit'}
					>
						Continue to payment
					</Button>
				</form>
			</Box>

			<CheckoutSummary />
		</Box>
	)
}
