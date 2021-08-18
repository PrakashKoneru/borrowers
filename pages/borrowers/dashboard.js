import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../_app';
import { Box, Input, Flex, Container, Select } from '@chakra-ui/react';
import axios from 'axios';
import Cookies from "js-cookie";
import moment from 'moment';
import ApprovedLoanStatus from '../components/loanStatusComponents/approvedLoanStatus';
import RejectedLoanStatus from '../components/loanStatusComponents/rejectedLoanStatus';
import PendingLoanStatus from '../components/loanStatusComponents/pendingLoanStatus';
import SsnApplication from '../components/loanStatusComponents/ssnApplication';

const Dashboard = () => {
	const [loans, setLoans] = useState();
	useEffect(async () => {
		const envUrl = '/borrowers/dashboardApi';
		const { data } = await axios.get(envUrl,
			{
				headers: {
					bToken: Cookies.get('bToken')
				}
			}
		)
		setLoans(data.loans)
	}, [])
	
	return (
		<ThemeContext.Consumer>
			{(theme) => {
				if(loans && loans.approval_status === 'approved') return (<ApprovedLoanStatus loan={loans} />)
				if(loans && loans.approval_status === 'rejected') return <RejectedLoanStatus loan={loans} />
				if(loans && loans.approval_status === 'pending') return <PendingLoanStatus loan={loans} />
				return (<SsnApplication setLoans={setLoans} />);
			}}
		</ThemeContext.Consumer>
	)
}

export default Dashboard;