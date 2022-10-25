import React, {useEffect, useState } from "react"
import styled from "styled-components"
import {CodeItem} from "components/Code"
import {TYPOGRAPHY} from "styles"
import {Button} from "components/UI"
import {useAppDispatch, useAppSelector} from "hooks/redux"
import { codeAsyncActions } from "store/features/code"

interface CodeListProps {
	subscribeId: number
}

export const CodeList: React.FC<CodeListProps> = ({subscribeId}) => {

	const {codes, isLoading} = useAppSelector(state => state.code)
	const [isEditMode, setIsEditMode] = useState<boolean>(!!codes.find(code => code.status === "HOLD"))
	const [selectedManageIds, setSelectedManageIds] = useState<number[]>([])
	const dispatch = useAppDispatch()

	const manageCodes = () => {
		dispatch(codeAsyncActions.manage({codesIds: selectedManageIds, subscribeId}))
		setSelectedManageIds([])
	}

	useEffect(() => {
		setIsEditMode(!!codes.find(code => code.status === "HOLD"))
	}, [codes])

	return (
		<Container>
			<CodeWrapper>
				{codes.map(code =>
					<CodeItem
						key={code.id}
						codeInfo={code}
						setSelectedManageIds={setSelectedManageIds}
						selectedManageIds={selectedManageIds}
					/>
				)}
			</CodeWrapper>
			{isEditMode && <SelectTitle>Select the domains you want to keep</SelectTitle>}
			{isEditMode &&
					<SelectButton
						onClick={manageCodes}
						isLoading={isLoading}
						variant="primary"
					>Confirm</SelectButton>
			}
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	display: grid;
	row-gap: 48px;
	grid-template-columns: auto 148px;
  @media (max-width: 800px) {
		row-gap: 28px;
  }
`
const CodeWrapper = styled.div`
	grid-column: 1/3;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 32px;
	@media (max-width: 800px) {
		gap: 24px;
	}
`
const SelectTitle = styled.h1`
	${TYPOGRAPHY.single300Bold};
	align-self: center;
  @media (max-width: 800px) {
		grid-row: 1/2;
		grid-column: 1/3;
  }
`
const SelectButton = styled(Button)`
	align-self: center;
	width: 148px;
	justify-self: flex-end;
  @media (max-width: 800px) {
		width: 100%;
		grid-column: 1/3;
		margin: 8px 0 0;
  }
`
