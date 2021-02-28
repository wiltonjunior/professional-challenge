import React, { useState } from 'react'

import Tabs from '@UI/Tabs'
import Axios from '@UI/Axios'

import List from './components/List'
import AddEdit from './components/AddEdit'

import useStyles from './styles';

function Professional() {

	const classes = useStyles()

	const [run, setRun] = useState(1)
	const [list, setList] = useState([])
	const [item, setItem] = useState({})
	const [listType, setListType] = useState([])

	const onSuccess = ({ data }) => {
		setItem({})
		setList([...data])
	}

	const updateList = () => {
		setRun(run + 1)
	}

	const onSuccessType = ({ data }) => {
		setListType([...data])
	}

	const close = () => {
		setItem({
			name: '',
			email: '',
			phone: '',
			password: '',
			typeProfessionalId: '',
		})
	}

	const tabs = [
			{
				icon: "List",
				title: "PROFESSIONAL_TABS_LIST",
				content: <List list={list} setItem={setItem} updateList={updateList} />
			},
			{
				icon: "AddIcon",
				title: "PROFESSIONAL_TABS_ADD",
				content: <AddEdit
					item={item}
					close={close}
					setItem={setItem}
					listType={listType}
					updateList={updateList}
				/>
			}
		]



		return (
			<section className={classes.root}>
				<Axios run api="type-professional" onSuccess={onSuccessType}>
					<Axios run={run} api="professional" onSuccess={onSuccess}>
						<Tabs tabs={tabs} />
					</Axios>
				</Axios>
			</section>
		);
	}

	export default Professional;
