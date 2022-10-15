import React, { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import { LowArrowIcon, SettingsIcon, LogoutIcon, CloseIcon, LogoIcon } from "assets/svg"
import {useAppDispatch, useAppSelector} from "hooks/redux"
import {userActions, userSelectors} from "store/features/user"

interface HeaderNavigationProps {
	mobileMenuIsOpen: boolean;
	setMobileMenuIsOpen: (e: boolean) => void
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({mobileMenuIsOpen, setMobileMenuIsOpen}) => {
	
	const [profileIsOpen, setProfileIsOpen] = useState<boolean>(false)
	const username = useAppSelector(userSelectors.getUsername)
	const dispatch = useAppDispatch()

	const logout = () => {
		dispatch(userActions.userLogout())
	}
	
	return (
		<NavigationContainer
			$isOpen={mobileMenuIsOpen}
			onClick={() => setMobileMenuIsOpen(false)}
		>
			<NavigationInner
				$isOpen={mobileMenuIsOpen}
				onClick={(e) => e.stopPropagation()}
			>
				<MobileNavigation>
					<MobileClose
						src={CloseIcon}
						width={24}
						height={24}
						onClick={() => setMobileMenuIsOpen(false)}
					/>
					<Image src={LogoIcon} width={130} height={32}/>
				</MobileNavigation>
				<Link href="/subscriptions">
					<HeaderLink>My subscriptions</HeaderLink>
				</Link>
				<HeaderLine />
				<ProfileContainer onClick={() => setProfileIsOpen(!profileIsOpen)}>
					<HeaderText>{username}</HeaderText>
					<ProfileIcon
						src={LowArrowIcon}
						width={14}
						height={7}
						$isOpen={profileIsOpen}
					/>
				</ProfileContainer>
				<ProfileNavigation $isOpen={profileIsOpen}>
					<Link href={{
						pathname: "/settings",
						query: {tab: "personal-info"}
					}}>
						<NavigationLink>
							<Image src={SettingsIcon} width={24} height={24} />
							<HeaderText>Settings</HeaderText>
						</NavigationLink>
					</Link>
					<NavigationLink onClick={logout}>
						<Image src={LogoutIcon} width={24} height={24} />
						<HeaderText>Logout</HeaderText>
					</NavigationLink>
				</ProfileNavigation>
				<HeaderLine />
			</NavigationInner>
		</NavigationContainer>
)
}
const NavigationContainer = styled.div<{$isOpen: boolean}>`
  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
		background: rgba(0,0,0,0.6);
		visibility: ${({$isOpen}) => $isOpen ? "visible" : "hidden"};
		opacity: ${({$isOpen}) => $isOpen ? "1" : "0"};
		transition: all .3s ease;
  }
`
const NavigationInner = styled.div<{$isOpen: boolean}>`
	display: flex;
	align-items: center;
	gap: 32px;
	position: relative;
	@media (max-width: 600px) {
		position: absolute;
		top: 0;
		right: 0;
		width: 69%;
    height: 100%;
    flex-direction: column;
		background: ${APP_COLORS.neutral700};
		align-items: flex-start;
    gap: 0;
		padding: 28px 24px;
		transition: all .3s ease;
    transform: translateX(${({$isOpen}) => $isOpen ? "0px" : "100%"});
  }
`
const MobileNavigation = styled.div`
	display: none;
	align-items: center;
	gap: 35px;
	margin: 0 0 48px;
  @media (max-width: 600px) {
		display: flex;
  }
`
const MobileClose = styled(Image)`
	cursor: pointer;
`
const HeaderLine = styled.div`
	display: none;
	width: 100%;
	border: 1px solid ${APP_COLORS.neutral600};
	margin: 20px 0;
  @media (max-width: 600px) {
		display: block;
  }
`
const HeaderLink = styled.a`
	${TYPOGRAPHY.single300Regular}
	text-decoration: none;
	cursor: pointer;
	z-index: 1;
  @media (max-width: 600px) {
    ${TYPOGRAPHY.single100Regular}
  }
`
const HeaderText = styled.div`
  ${TYPOGRAPHY.single300Regular};
  @media (max-width: 600px) {
  	${TYPOGRAPHY.single100Regular}
	}
`
const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
	z-index: 1;
`
const ProfileIcon = styled(Image)<{$isOpen: boolean}>`
	width: 14px;
	height: 7px;
	transition: all .3s ease;
	transform: rotate(${({$isOpen}) => $isOpen ? "180" : "0"}deg);
`
const ProfileNavigation = styled.div<{$isOpen: boolean}>`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 34px;
	bottom: -29px;
	right: 0;
	padding: 30px 26px;
	background: ${APP_COLORS.neutral700};
	border-radius: 12px;
	transition: all .3s ease;
	z-index: 0;
	transform: translateY(${({$isOpen}) => $isOpen ? "100%" : "50%"});
	visibility: ${({$isOpen}) => $isOpen ? "visible" : "hidden"};
	opacity: ${({$isOpen}) => $isOpen ? "1" : "0"};
  @media (max-width: 600px) {
		position: relative;
		visibility: visible;
		opacity: 1;
		transform: translateY(0px);
		bottom: 0;
		padding: 0;
		gap: 27px;
		overflow: hidden;
		height: ${({$isOpen}) => $isOpen ? "101px" : "0"};
    margin: ${({$isOpen}) => $isOpen ? "31px 0 0 0" : "0"};
  }
`
const NavigationLink = styled.a`
	display: flex;
	gap: 12px;
	align-items: center;
	cursor: pointer;
`