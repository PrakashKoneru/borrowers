import React from 'react';
import { ThemeContext } from '../_app';
import { Box, Input, Select, Flex } from '@chakra-ui/react';

const One = ({ register, errors }) => {
	if(!register) return null;
	return (
		<ThemeContext.Consumer>
			{(theme) => {
				return (
					<Box
						w="100%"
					>
						<Box
							fontSize="35px"
						>
							Loan Details
						</Box>
						<Box
							mt="20px"
						>
							<Flex
								alignItems="center"
								justifyContent="center"
								flexWrap="wrap"
								flexDirection="column"
							>
								<Box
									w="100%"
								>
									<Box
										fontWeight="500"
									>
										How much would you like to borrow?
									</Box>
									<Input
										type="number"
										mt="5px"
										placeholder="Loan Amount ($)"
										{...register("loan_amount", { 
											required: true,
											validate: value => value >= 1000 && value <= 15000
										})}
									/>
									<Box
										mt="5px"
										color={theme.colors.gray}
									>
										$1000 - $15000
									</Box>
									{errors.loan_amount && (
										<Box color={theme.colors.red}>
										 Please enter a valid Loan Amount.
										</Box>
									)}
								</Box>
								<Box
									w="100%"
									mt="25px"
								>
									<Box
										fontWeight="500"
									>
										What’s your loan purpose?
									</Box>
									<Select
										mt="5px"
										{...register("loan_purpose", { required: true })}
									>
										<option value="Credit Cards">Credit Cards</option>
										<option value="Debt Consolidation">Debt Consolidation</option>
										<option value="Student Loans">Student Loans</option>
										<option value="Other Large Purchase">Other Large Purchase</option>
									</Select>
								</Box>
							</Flex>
						</Box>
					</Box>
				)
			}}
		</ThemeContext.Consumer>
	);
}

export default One;

// return (
// 	<ThemeContext.Consumer>
// 		{() => {
// 			return (
// 				<Box></Box>
// 			)
// 		}}
// 	</ThemeContext.Consumer>
// );