import React from 'react';
import { ThemeContext } from '../_app';
import { Box, Input, Checkbox, Flex } from '@chakra-ui/react';

const SignUp = ({ register, errors, calculationData }) => {
	if(!register) return null;
	return (
		<ThemeContext.Consumer>
			{(theme) => {
				return (
					<Box
						w="100%"
					>
						<Flex
							mt="15px"
							fontSize="20px"
							justifyContent="center"
						>
							Your estimated Interst Rate will be between {calculationData.intRange} APR.
						</Flex>
						<Box
							fontSize="35px"
							mt="20px"
						>
							Sign Up To Apply!
						</Box>
						<Box
							mt="20px"
						>
							{/* Row 1 */}
							<Flex
								mt="20px"
								flexDirection={{ sm: "column", md: "row" }}
								alignItems="flex-end"
							>
								<Box
									w="100%"
									mt={{sm: "15px", md: "0px" }}
								>
									<Box
										fontWeight="500"
									>
										Email
									</Box>
									<Input
										mt="5px"
										placeholder="Email"
										{...register("email", { 
											required: true
										})}
									/>
									{errors.email && (
										<Box color={theme.colors.red}>
										 Please enter a valid email.
										</Box>
									)}
								</Box>
							</Flex>
							{/* Row 2 */}
							<Flex
								mt="20px"
								flexDirection={{ sm: "column", md: "row" }}
								alignItems="flex-end"
							>
								<Box
									w="100%"
									mt={{sm: "15px", md: "0px" }}
								>
									<Box
										fontWeight="500"
									>
										Password
									</Box>
									<Input
										mt="5px"
										placeholder="Password"
										type="password"
										{...register("password", {
											required: true
										})}
									/>
									{errors.password && (
										<Box color={theme.colors.red}>
										 Please enter a valid password.
										</Box>
									)}
									<Box>
									<Box mt="15px">
										<Checkbox
											name="checked"
											borderColor="#495FBF"
											size="lg"
											outlineColor="none"
											{...register("terms", { 
												required: true
											})}
										></Checkbox>
										<label style={{marginLeft: '10px', fontSize:'14px'}}> I agree to receive future communications from Paisa. </label>
									</Box>
									{errors.terms && (
										<Box color={theme.colors.red}>
										 Please accept to continue.
										</Box>
									)}
									</Box>
								</Box>
							</Flex>
						</Box>
					</Box>
				)
			}}
		</ThemeContext.Consumer>
	);
}

export default SignUp;