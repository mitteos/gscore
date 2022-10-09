import React, {useState} from "react"
import styled, {css} from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import { Checkbox, Button } from "components/UI"
import { CodeState } from "components/Code/types"
import Image from "next/image"
import { CopyIcon } from "assets/svg"
import {SubmitHandler, useForm} from "react-hook-form";

interface CodeItemProps {
	codeInfo: CodeState
}

interface CodeInputs {
	domain: string;
}

export const CodeItem: React.FC<CodeItemProps> = ({codeInfo}) => {

	const [isLoading, setIsLoading] = useState<boolean>(false)
	const {register, handleSubmit} = useForm<CodeInputs>({
		defaultValues: {
			domain: codeInfo.domain
		}
	})

	const activateCode: SubmitHandler<CodeInputs> = (data) => {
		setIsLoading(true)
		setTimeout(() => {
			alert(JSON.stringify(data))
			setIsLoading(false)
		}, 3000)
	}
	const copyCodeToClipboard = () => {
		navigator.clipboard.writeText(codeInfo.code)
	}

	return (
		<Container
			$isActivated={codeInfo.status !== "Inactive"}
			onSubmit={handleSubmit(activateCode)}
		>
			<CheckContainer>
				<Checkbox isDisabled={false} />
			</CheckContainer>
			<CodeColumn>
				<ColumnTitle>License code</ColumnTitle>
				<CodeInputContainer>
					<CodeInputInner value={codeInfo.code} disabled={true}/>
					<CodeInputCopy onClick={copyCodeToClipboard}>
						<CopyImage src={CopyIcon} />
					</CodeInputCopy>
				</CodeInputContainer>
			</CodeColumn>
			<DomainColumn>
				<ColumnTitle>Domain</ColumnTitle>
				<CodeInputContainer>
					<CodeInputInner
						disabled={codeInfo.status !== "Inactive"}
						{...register("domain", {required: true})}
					/>
				</CodeInputContainer>
			</DomainColumn>
			{codeInfo.status === "Inactive" &&
          <ActivateButtonContainer>
              <ActivateButtonInner
									variant="secondary"
									isLoading={isLoading}
							>Activate</ActivateButtonInner>
          </ActivateButtonContainer>
			}
			<StatusColumn>
				<StatusTitle>Status</StatusTitle>
				<StatusWrapper>
					<StatusValue $status={codeInfo.status}>{codeInfo.status}</StatusValue>
				</StatusWrapper>
			</StatusColumn>
		</Container>
	);
};

const Container = styled.form<{$isActivated: boolean}>`
	position: relative;
	width: 100%;
	display: grid;
	${({$isActivated}) => $isActivated 
					? css`
            grid-template-columns: 76px 27% auto 81px;
          `
					: css`
            grid-template-columns: 76px 27% auto 167px 81px;
            @media (max-width: 1000px) {
              grid-template-columns: 76px 27% auto 141px 81px;
            }
					`
	};
	padding: 24px 96px 31px 32px;
	background: ${APP_COLORS.neutral700};
  border-radius: 12px;
	@media (max-width: 1150px) {
    padding: 24px 70px 31px 32px;
  }
  @media (max-width: 1000px) {
    padding: 24px 40px 31px 32px;
  }
  @media (max-width: 900px) {
    padding: 24px 32px 31px 32px;
  }
  @media (max-width: 800px) {
    padding: 34px 20px 32px 20px;
    grid-template-columns: 48px auto;
    row-gap: 24px;
  }
`
const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	align-self: stretch;
	width: 100%;
`
const CodeColumn = styled(Column)`
	padding-right: 28px;
  @media (max-width: 800px) {
		grid-column: 1/3;
		padding: 0;
  }
`
const DomainColumn = styled(Column)`
	padding-right: 56px;
  @media (max-width: 1000px) {
    padding-right: 30px;
  }
  @media (max-width: 800px) {
    grid-column: 1/3;
    padding: 0;
  }
`
const CheckContainer = styled.div`
	flex-shrink: 0;
	align-self: flex-end;
	display: flex;
	align-items: center;
	padding-right: 48px;
	margin-bottom: 20px;
  @media (max-width: 800px) {
		padding: 0;
		margin: 0;
  }
`
const ColumnTitle = styled.h1`
	${TYPOGRAPHY.single100Bold};
  color: #969696;
`
const CodeInputContainer = styled.div`
	position: relative;
	width: 100%;
  box-shadow: 0 2px 12px rgba(20, 20, 43, 0.06);
`
const CodeInputInner = styled.input`
  background: #393939;
  border-radius: 6px;
	padding: 25px 70px 25px 24px;
	outline: none;
	border: none;
	width: 100%;
  color: #969696;
`
const CodeInputCopy = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
const CopyImage = styled(Image)`
	width: 100%;
	height: 100%;
`
const StatusColumn = styled(Column)`
  @media (max-width: 800px) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`
const StatusWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`
const StatusTitle = styled(ColumnTitle)`
	@media (max-width: 800px) {
		display: none;
	}
`
const StatusValue = styled.h1<{$status: "Active" | "Inactive" | "Hold"}>`
	${TYPOGRAPHY.headings4};
	color: ${({$status}) => $status === "Active" 
					? APP_COLORS.green 
					: $status === "Inactive" 
									? APP_COLORS.red300 
									: APP_COLORS.orange300};
`
const ActivateButtonContainer = styled(Column)`
	justify-content: flex-end;
	padding-right: 56px;
  @media (max-width: 1000px) {
    padding-right: 30px;
  }
  @media (max-width: 800px) {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 111px;
		padding: 0;
  }
`
const ActivateButtonInner = styled(Button)`
	width: 100%;
	margin-bottom: 5px;
  @media (max-width: 800px) {
		margin: 0;
  }
`