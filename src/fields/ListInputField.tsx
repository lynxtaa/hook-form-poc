import React, { useRef } from 'react'
import { Control, Controller, useFormContext, ValidationRules } from 'react-hook-form'

import ListInput, { ListInputProps } from '../controls/ListInput'

export default function ListInputField<
	TName extends string,
	TFormValues extends {
		[key in TName]: ListInputProps['value']
	}
>({
	control,
	name,
	label,
	rules,
}: {
	control: Control<TFormValues>
	name: TName
	label: string
	rules?: ValidationRules
}) {
	const { errors } = useFormContext()
	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<Controller
			name={name}
			defaultValue={[]}
			control={control as any}
			onFocus={() => inputRef.current?.focus()}
			render={({ onChange, onBlur, name, value }) => (
				<ListInput
					isRequired={rules?.validate && 'required' in rules.validate}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					label={label}
					meta={{ error: errors[name] }}
					ref={inputRef}
				/>
			)}
			rules={rules}
		/>
	)
}
