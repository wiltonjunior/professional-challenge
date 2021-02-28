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
	const [loading, setLoading] = useState(false)

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

	const onInitLoad = () => {
		setLoading(true)
	}
	const onFinishLoad = () => {
		setLoading(false)
	}

	const close = () => {
		setItem({
			name: '',
			email: '',
			phone: '',
			password: '',
			situation: false,
			typeProfessionalId: '',
		})
	}

	const tabs = [
		{
			icon: "List",
			title: "PROFESSIONAL_TABS_LIST",
			content: <List
				list={list}
				loading={loading}
				setItem={setItem}
				onInitLoad={onInitLoad}
				onFinishLoad={onFinishLoad}
				updateList={updateList} />
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
			<Axios loading={false} run api="type-professional" onSuccess={onSuccessType} onInitLoad={onInitLoad} onFinishLoad={onFinishLoad}>
				<Axios loading={false} run={run} api="professional" onSuccess={onSuccess} onInitLoad={onInitLoad} onFinishLoad={onFinishLoad}>
					<Tabs tabs={tabs} />
				</Axios>
			</Axios>
		</section>
	);
}

export default Professional;
