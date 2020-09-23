import { Box, BoxProps } from '@chakra-ui/core'
import React from 'react'
import {
	FormProvider,
	UseFormMethods,
	SubmitHandler,
	SubmitErrorHandler,
} from 'react-hook-form'

type Props<TFormValues extends Record<string, unknown>> = {
	children?: React.ReactNode
	methods: UseFormMethods<TFormValues>
	onSubmit: SubmitHandler<TFormValues>
	onSubmitFail?: SubmitErrorHandler<TFormValues>
} & Omit<BoxProps, 'onSubmit'>

export default function HookForm<TFormValues extends Record<string, unknown>>({
	children,
	methods,
	onSubmit,
	onSubmitFail,
	...rest
}: Props<TFormValues>) {
	return (
		<FormProvider {...methods}>
			<Box {...rest} as="form" onSubmit={methods.handleSubmit(onSubmit, onSubmitFail)}>
				{children}
			</Box>
		</FormProvider>
	)
}
