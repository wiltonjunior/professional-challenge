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

	const onSuccess = ({ data }) => {
		setItem({})
		setList([...data])
	}

	const updateList = () => {
		setRun(run + 1)
	}

	const tabs = [
		{
			icon: "List",
			title: "PROFESSIONAL_TABS_LIST",
			component: () => <List list={list} setItem={setItem} updateList={updateList} />
		},
		{
			icon: "AddIcon",
			title: "PROFESSIONAL_TABS_ADD",
			component: () => <AddEdit
				item={item}
				updateList={updateList}
				close={() => setItem({})}
			/>
		}
	]

	return (
		<section className={classes.root}>
			<Axios run={run} api="professional" onSuccess={onSuccess}>
				<Tabs tabs={tabs} />
			</Axios>
		</section>
	);
}

export default Professional;
