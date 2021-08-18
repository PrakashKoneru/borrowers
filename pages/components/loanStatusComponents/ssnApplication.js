import React, { useState } from 'react';
import axios from 'axios';
import { ThemeContext } from '../../_app';
import { Box, Flex, Container, Input, Button } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

const SsnApplication = ({ setLoans, ...props }) => {
	const [intRate, setIntRate] = useState(null);
	const [ssnCopy, setSsnCopy] = useState(null);
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const postSsnData = ({ssn, firstName, lastName, phnNumber, address}) => {
		const envUrl =  '/borrowers/loanApplication/getRate';
		setSsnCopy(ssn);
		axios.post(envUrl, { ssn, firstName, lastName, phnNumber, address }, 
			{
				headers: {
					bToken: Cookies.get('bToken')
				}
			}
		)
		.then(({ data: { intRate } }) => {
			setIntRate(intRate)
		});
	}
	const applyForLoan = () => {
		const envUrl =  '/borrowers/loanApplication/apply';
		axios.post(envUrl, { intRate, ssnCopy },
			{
				headers: {
					bToken: Cookies.get('bToken')
				}
			}
		)
		.then(({ data: { loan } }) => {
			setLoans(loan)
		});
	}
	return (
		<ThemeContext.Consumer>
			{(theme) => {
				return (
					<Container
						padding={{
							md: "0px 50px",
							sm: "0px 30px"
						}}
						bg={theme.colors.bgBlue}
					>
						{intRate ? (
							<form onSubmit={handleSubmit(applyForLoan)}>
								<Flex
									id="loanFlex"
									key={Math.random()}
									bg={theme.colors.bgBlue}
									h="calc(100vh - 75px)"
									w="100%"
									alignItems="center"
									justifyContent="center"
								>
									<Box
										id="box"
										bg="white"
										border={`0.3px solid ${theme.colors.secondary}`}
										borderRadius="3px"
										minWidth={{ sm: "325px", md: "600px"}}
										maxW="600px"
										minHeight={{ sm: "400px", md: "350px", lg: "400px" }}
										w={{ sm: "100%", md: "auto" }}
										py="30px"
										px="20px"
										my="15px"
										display="flex"
										flexDirection="column"
										justifyContent="center"
									>
										<Box
											fontSize="30px"
											px="10px"
										>
											Based on your credit profile your intRate for a loan will be {intRate}.
										</Box>
										<Flex
											mt="30px"
											justifyContent="center"
										>
											<Button
												fontSize="18px"
												py="25px"
												px="20px"
												type="submit"
											>
												Apply Now
											</Button>
										</Flex>
									</Box>
								</Flex>
							</form>
						) : (
							<form onSubmit={handleSubmit(postSsnData)}>
								<Flex
									id="loanFlex"
									key={Math.random()}
									bg={theme.colors.bgBlue}
									h="calc(100vh - 75px)"
									w="100%"
									alignItems="center"
									justifyContent="center"
								>
									<Box
										id="box"
										bg="white"
										border={`0.3px solid ${theme.colors.secondary}`}
										borderRadius="3px"
										minWidth={{ sm: "325px", md: "600px"}}
										maxW="600px"
										minHeight={{ sm: "400px", md: "350px", lg: "400px" }}
										w={{ sm: "100%", md: "auto" }}
										py="30px"
										px="20px"
										my="15px"
										display="flex"
										flexDirection="column"
										justifyContent="center"
									>
										<Box fontSize="40px">
											Get a Decision On your Loan
										</Box>
										<Box mt="15px">
											<Input
												type="number"
												mt="5px"
												placeholder="SSN"
												{...register("ssn", { 
													required: true,
													validate: value => value.toString().length === 9
												})}
											/>
											{errors.ssn && (
												<Box color={theme.colors.red}>
													Please enter a valid 9 digit SSN.
												</Box>
											)}
										</Box>
										<Box mt="10px">
											<Input
												type="text"
												mt="5px"
												placeholder="First Name"
												{...register("firstName", { 
													required: true
												})}
											/>
											{errors.firstName && (
												<Box color={theme.colors.red}>
													Please enter a valid First Name.
												</Box>
											)}
										</Box>
										<Box mt="10px">
											<Input
												type="text"
												mt="5px"
												placeholder="Last Name"
												{...register("lastName", { 
													required: true
												})}
											/>
											{errors.lastName && (
												<Box color={theme.colors.red}>
													Please enter a valid Last Name.
												</Box>
											)}
										</Box>
										<Box mt="10px">
											<Input
												type="number"
												mt="5px"
												placeholder="Phone"
												{...register("phnNumber", { 
													required: true,
													validate: value => value.toString().length === 10
												})}
											/>
											{errors.phnNumber && (
												<Box color={theme.colors.red}>
													Please enter a valid 10 digit Phone Number.
												</Box>
											)}
										</Box>
										<Box mt="10px">
											<Input
												type="text"
												mt="5px"
												placeholder="Address"
												{...register("address", {
													required: true
												})}
											/>
											{errors.address && (
												<Box color={theme.colors.red}>
													Please enter a valid Address.
												</Box>
											)}
										</Box>
										<Flex
											mt="25px"
											justifyContent="flex-end"
										>
											<Button
												w="150px"
												type="submit"
											>
												Get Interest Rate
											</Button>
										</Flex>
									</Box>
								</Flex>
							</form>
						)}
					</Container>
				)
			}}
		</ThemeContext.Consumer>
	)
}

export default SsnApplication;