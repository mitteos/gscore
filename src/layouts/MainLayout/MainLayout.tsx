import React from "react"
import styled from "styled-components"
import { Header, Footer } from "layouts/MainLayout/components"

interface LayoutWrapperProps {
	children: React.ReactNode | React.ReactNode[]
}

export const MainLayout: React.FC<LayoutWrapperProps> = ({children}) => {
	return (
		<LayoutContainer>
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