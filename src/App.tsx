import React from 'react'
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Stack,
} from '@chakra-ui/core'
import { useForm } from 'react-hook-form'

function App() {
	const methods = useForm()

	function onSubmit() {
		console.log('ok')
	}

	return (
		<Box
			className="App"
			maxWidth="500px"
			minHeight="100vh"
			height="100%"
			margin="0 auto"
			padding={4}
		>
			<Heading as="h1" fontSize="3xl" fontWeight="normal" mb={4}>
				React Hook Form Proof of Concept
			</Heading>

			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Stack spacing={4} mb={4}>
					<FormControl isInvalid={Boolean(methods.errors.weight)}>
						<FormLabel htmlFor="weight">Rider's Weight</FormLabel>
						<Input
							name="weight"
							id="weight"
							ref={methods.register({ required: 'required!' })}
						/>
						<FormErrorMessage>{methods.errors.weight?.message}</FormErrorMessage>
					</FormControl>
				</Stack>

				<Button
					type="submit"
					marginLeft="auto"
					isLoading={methods.formState.isSubmitting}
				>
					Save
				</Button>
			</form>
		</Box>
	)
}

export default App
