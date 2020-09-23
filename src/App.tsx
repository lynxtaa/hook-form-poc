import React from 'react'
import { Box, Button, Heading, Icon, Stack } from '@chakra-ui/core'
import { useForm } from 'react-hook-form'
import HookForm from './HookForm'
import ListInputField from './fields/ListInputField'

type FormValues = {
	docIds: string[]
}

function App() {
	const methods = useForm<FormValues>()

	async function onSubmit(values: FormValues) {
		await new Promise((resolve) => setTimeout(resolve, 500))
		alert(JSON.stringify(values, null, '  '))
		methods.reset()
	}

	return (
		<Box
			className="App"
			maxWidth="500px"
			minHeight="100vh"
			height="100%"
			margin="0 auto"
			px={4}
			py={10}
		>
			<Heading as="h1" fontSize="3xl" fontWeight="normal" mb={4}>
				React Hook Form Proof of Concept
			</Heading>

			<HookForm methods={methods} onSubmit={onSubmit}>
				<Stack spacing={4} mb={4}>
					<ListInputField
						control={methods.control}
						name="docIds"
						label="ID документов"
						rules={{
							validate: {
								required: (value: FormValues['docIds']) =>
									value.length === 0 ? 'обязательное поле' : undefined,
								isDocIds: (value: FormValues['docIds']) =>
									value.some((val) => val === '' || isNaN(Number(val)))
										? 'введите числа через запятую'
										: undefined,
							},
						}}
					/>
				</Stack>
				<Button
					type="submit"
					marginLeft="auto"
					isLoading={methods.formState.isSubmitting}
				>
					{methods.formState.isSubmitSuccessful && (
						<Icon name="check" mr={3} color="green.500" />
					)}
					Save
				</Button>
			</HookForm>
		</Box>
	)
}

export default App
