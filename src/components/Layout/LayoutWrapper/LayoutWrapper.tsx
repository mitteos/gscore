import React from "react"
import styled from "styled-components"
import { Header, Footer, HeadComponent } from "components/Layout"

interface LayoutWrapperProps {
	children: React.ReactNode | React.ReactNode[]
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({children}) => {
	return (
		<LayoutContainer>
			<HeadComponent />
			<Header />
			<MainContainer>
				{children}
			</MainContainer>
			<Footer />
		</LayoutContainer>
	);
};

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`
const MainContainer = styled.div`
	flex: 1 auto;
`