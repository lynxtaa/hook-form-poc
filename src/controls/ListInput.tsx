import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/core'
import React, { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

type ListInputValue = string[]

export type ListInputProps = {
	isRequired?: boolean
	label: string
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
	onChange: (value: ListInputValue) => void
	meta: {
		error?: FieldError
	}
	value: ListInputValue
}

const ListInput = forwardRef<HTMLInputElement, ListInputProps>(
	({ onBlur, onChange, value, meta, label, isRequired }, ref) => (
		<FormControl isInvalid={!!meta.error} isRequired={isRequired}>
			<FormLabel>{label}</FormLabel>
			<Input
				ref={ref}
				aria-label={label}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					onChange(event.target.value.split(',').map((str) => str.trim()))
				}
				onBlur={onBlur}
				value={value.join(', ')}
			/>
			<FormErrorMessage>{meta.error?.message}</FormErrorMessage>
		</FormControl>
	),
)

export default ListInput
