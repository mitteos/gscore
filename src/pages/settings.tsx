import React, { useState } from "react"
import { MainLayout } from "layouts"
import { HeadComponent } from "components/HeadComponent"
import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { ChangePassword, ChangePersonalInfo } from "components/User"
import { NextPage } from "next";
import {TabsList} from "components/UI";
import {TabState} from "components/UI/types";

const Settings: NextPage = () => {
	
	const [activeTab, setActiveTab] = useState<number>(1)
	const [tabs, setTabs] = useState<TabState[]>([
		{id: 1, title: "Personal info"},
		{id: 2, title: "Change password"}
	])
	
	return (
		<MainLayout>
			<HeadComponent title="Gscore | Settings" />
			<Container>
				<Title>Settings</Title>
				<TabsList
					tabs={tabs}
					setActiveTab={setActiveTab}
					activeTab={activeTab}
				/>
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
  @media (max-width: 1000px) {
    ${TYPOGRAPHY.specialHeading3};
  }
	@media (max-width: 700px) {
		${TYPOGRAPHY.specialHeading4};
	}
`
