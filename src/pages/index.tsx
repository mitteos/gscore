import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import { MainLayout } from "layouts"
import { CardList } from "components/Card"
import { HeadComponent } from "components/HeadComponent"
import {NextPage} from "next";

const Home: NextPage = () => {
	return (
		<MainLayout>
			<HeadComponent title="Gscore" />
			<Title>Get started with Gscore today!</Title>
			<Container>
				<CardList />
				<AdditionTitle>Have more than 10 sites?</AdditionTitle>
				<AdditionLink>
					<Link href="/">
						<AdditionLinkInner>Contact us</AdditionLinkInner>
					</Link>
				</AdditionLink>
			</Container>
		</MainLayout>
	)
}
export default Home

const Container = styled.div`
  width: 85%;
  max-width: 1226px;
	margin: 0 auto;
`
const Title = styled.h1`
	${TYPOGRAPHY.specialHeading3}
	text-align: center;
	margin: 0 0 98px;
  @media (max-width: 1200px) {
    ${TYPOGRAPHY.specialHeading4}
  }
  @media (max-width: 900px) {
    margin: 0 0 40px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
  @media (max-width: 420px) {
    font-size: 20px;
  }
`
const AdditionTitle = styled.h1`
	text-align: center;
  ${TYPOGRAPHY.paragraphDefault}
	margin: 0 0 1px;
`
const AdditionLink = styled.div`
	display: flex;
	justify-content: center;
`
const AdditionLinkInner = styled.a`
	text-align: center;
  ${TYPOGRAPHY.paragraphDefault}
  cursor: pointer;
	text-decoration: underline;
	color: ${APP_COLORS.accent};
`