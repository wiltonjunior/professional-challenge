import React, { useState } from 'react'

import Tabs from '@UI/Tabs'
import Axios from '@UI/Axios'

import List from './components/List'
import AddEdit from './components/AddEdit'

import useStyles from './styles';

function TypeProfessional() {

	const classes = useStyles()

	const [run, setRun] = useState(1)
	const [list, setList] = useState([])
	const [item, setItem] = useState({})

	const onSuccess = ({ data }) => {
		setItem({})
		setList([...data])
	}

	const updateList = () => {
		setRun(run + 1)
	}

	const close = () => {
		setItem({
			email: '',
			description: '',
		})
	}

	const tabs = [
		{
			icon: "List",
			title: "TYPE_PROFESSIONAL_TABS_LIST",
			content: <List list={list} setItem={setItem} updateList={updateList} />
		},
		{
			icon: "AddIcon",
			title: "TYPE_PROFESSIONAL_TABS_ADD",
			content: <AddEdit
				item={item}
				close={close}
				setItem={setItem}
				updateList={updateList}
			/>
		}
	]

	return (
		<section className={classes.root}>
			<Axios run={run} api="type-professional" onSuccess={onSuccess}>
				<Tabs tabs={tabs} />
			</Axios>
		</section>
	);
}

export default TypeProfessional;
