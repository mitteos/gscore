import React from "react"
import styled from "styled-components"
import {CodeState} from "components/Code/types"
import {CodeItem} from "components/Code"
import {TYPOGRAPHY} from "../../../styles";
import {Button} from "components/UI";

export const CodeList: React.FC = () => {

	const codes: CodeState[] = [
		{id: 1, code: "asdasdasgasgwa41241gwagawgawfawfawfawfawfwa", domain: "https://vk.com", status: "Active"},
		{id: 2, code: "gwag33s4y4sgs46", domain: "https://vk.com", status: "Inactive"},
		{id: 3, code: "6gs36gs3g6s3g6s3b6s363s", domain: "https://vk.com", status: "Hold"},
		{id: 4, code: "aseghsehsehsehsehsehseh", domain: "", status: "Inactive"},
	]

	return (
		<Container>
			<CodeWrapper>
				{codes.map(code =>
					<CodeItem key={code.id} codeInfo={code} />
				)}
			</CodeWrapper>
			<SelectTitle>Select the domains you want to keep</SelectTitle>
			<SelectButton variant="primary">Confirm</SelectButton>
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
