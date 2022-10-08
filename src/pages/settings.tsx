import React, {useEffect, useState} from "react"
import { MainLayout } from "layouts"
import { HeadComponent } from "components/HeadComponent"
import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { ChangePassword, ChangePersonalInfo } from "components/User"
import { NextPage } from "next";
import {TabsList} from "components/UI";
import {TabState} from "components/UI/types";
import {useRouter} from "next/router";

const Settings: NextPage = () => {

	const router = useRouter()

	const tabs: TabState[] =[
		{id: 1, title: "Personal info", query: "personal-info"},
		{id: 2, title: "Change password", query: "password"}
	]

	useEffect(() => {
		if(!router.query.tab) {
			router.push({
				pathname: "/settings",
				query: { tab: "personal-info" }
			})
		}
	}, [])
	
	return (
		<MainLayout>
			<HeadComponent title="Gscore | Settings" />
			<Container>
				<Title>Settings</Title>
				<TabsList
					tabs={tabs}
				/>
				{router.query.tab === "personal-info" && <ChangePersonalInfo />}
				{router.query.tab === "password" && <ChangePassword />}
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
