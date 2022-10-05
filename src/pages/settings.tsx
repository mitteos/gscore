import React, { useState } from "react"
import { MainLayout } from "layouts"
import { HeadComponent } from "components/HeadComponent"
import styled from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import { ChangePassword, ChangePersonalInfo } from "components/User"

const Settings = () => {
	
	const [activeTab, setActiveTab] = useState<number>(1)
	
	return (
		<MainLayout>
			<HeadComponent title="Gscore | Settings" />
			<Container>
				<Title>Settings</Title>
				<TabsContainer>
					<TabsRow>
						<TabItem
							$isActive={activeTab === 1}
							onClick={() => setActiveTab(1)}
						>Personal info</TabItem>
						<TabItem
							$isActive={activeTab === 2}
							onClick={() => setActiveTab(2)}
						>Change password</TabItem>
					</TabsRow>
					<TabsLine />
				</TabsContainer>
				{activeTab === 1 && <ChangePersonalInfo />}
				{activeTab === 2 && <ChangePassword />}
			</Container>
		</MainLayout>
	)
}

export default Settings

const Container = styled.div`
  width: 85%;
  max-width: 1226px;
	margin: 0 auto;
`
const Title = styled.h1`
	${TYPOGRAPHY.specialHeading2};
	margin: 0 0 48px;
`
const TabsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 12px;
	margin: 0 0 48px;
`
const TabsRow = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`
const TabItem = styled.div<{$isActive: boolean}>`
	${TYPOGRAPHY.single200Bold};
	color: ${({$isActive}) => $isActive ? APP_COLORS.accent : APP_COLORS.neutral600};
	cursor: pointer;
	position: relative;
	padding: 0 24px;
  transition: all .3s ease;
  &::after {
		content: "";
		width: 100%;
		height: 2px;
		background: ${APP_COLORS.accent};
		position: absolute;
		bottom: -14px;
		left: 0;
		transition: all .3s ease;
		opacity: ${({$isActive}) => $isActive ? "1" : "0"};
	}
`
const TabsLine = styled.div`
	width: 100%;
	height: 2px;
	background: ${APP_COLORS.neutral600};
`
