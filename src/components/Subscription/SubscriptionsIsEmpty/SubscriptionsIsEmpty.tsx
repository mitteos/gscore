import styled from "styled-components"
import Image from "next/image"
import {CloseIcon} from "assets/svg"
import {TYPOGRAPHY} from "styles"
import {Button} from "components/UI"
import Link from "next/link"

export const SubscriptionsIsEmpty = () => {
	return (
		<Container>
			<IconContainer>
				<Image src={CloseIcon} />
			</IconContainer>
			<Title>No active subscriptions</Title>
			<Subtitle>You can subscribe right now by clicking on the button below</Subtitle>
			<Link href="/">
				<a>
					<SubButton variant="primary">Get Gscore</SubButton>
				</a>
			</Link>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`
const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 36px;
	background: #393939;
	border-radius: 50%;
	margin: 0 0 24px;
`
const Title = styled.h1`
	${TYPOGRAPHY.specialHeading4};
	margin: 0 0 8px;
`
const Subtitle = styled.h2`
	${TYPOGRAPHY.paragraphDefault};
	margin: 0 0 32px;
	text-align: center;
	width: 300px;
`
const SubButton = styled(Button)`
	width: 164px;
`