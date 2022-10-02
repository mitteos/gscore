import React, { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"
import { appColors, typography } from "styles"
import ArrowIcon from "assets/svg/lowArrow.svg"
import SettingsIcon from "assets/svg/settings.svg"
import LogoutIcon from "assets/svg/logout.svg"
import CloseIcon from "assets/svg/close.svg"
import LogoIcon from "assets/svg/logo.svg"

interface HeaderNavigationProps {
	mobileMenuIsOpen: boolean;
	setMobileMenuIsOpen: (e: boolean) => void
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({mobileMenuIsOpen, setMobileMenuIsOpen}) => {
	
	const [profileIsOpen, setProfileIsOpen] = useState<boolean>(false)
	
	return (
		<NavigationContainer
			isopen={mobileMenuIsOpen}
			onClick={() => setMobileMenuIsOpen(false)}
		>
			<NavigationInner
				isopen={mobileMenuIsOpen}
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
				<Link href="/">
					<HeaderLink>My subscriptions</HeaderLink>
				</Link>
				<HeaderLine />
				<ProfileContainer onClick={() => setProfileIsOpen(!profileIsOpen)}>
					<HeaderText>Alex</HeaderText>
					<ProfileIcon
						src={ArrowIcon}
						width={14}
						height={7}
						isopen={profileIsOpen}
					/>
				</ProfileContainer>
				<ProfileNavigation isopen={profileIsOpen}>
					<Link href="/">
						<NavigationLink>
							<Image src={SettingsIcon} width={24} height={24} />
							<HeaderText>Settings</HeaderText>
						</NavigationLink>
					</Link>
					<Link href="/">
						<NavigationLink>
							<Image src={LogoutIcon} width={24} height={24} />
							<HeaderText>Logout</HeaderText>
						</NavigationLink>
					</Link>
				</ProfileNavigation>
				<HeaderLine />
			</NavigationInner>
		</NavigationContainer>
)
}
const NavigationContainer = styled.div<{isopen: boolean}>`
  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
		background: rgba(0,0,0,0.6);
		visibility: ${({isopen}) => isopen ? "visible" : "hidden"};
		opacity: ${({isopen}) => isopen ? "1" : "0"};
		transition: all .3s ease;
  }
`
const NavigationInner = styled.div<{isopen: boolean}>`
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
		background: ${appColors.neutral700};
		align-items: flex-start;
    gap: 0;
		padding: 28px 24px;
		transition: all .3s ease;
    transform: translateX(${({isopen}) => isopen ? "0px" : "100%"});
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
	border: 1px solid ${appColors.neutral600};
	margin: 20px 0;
  @media (max-width: 600px) {
		display: block;
  }
`
const HeaderLink = styled.a`
	${typography.single300Regular}
	text-decoration: none;
	cursor: pointer;
	z-index: 1;
  @media (max-width: 600px) {
    ${typography.single100Regular}
  }
`
const HeaderText = styled.div`
  ${typography.single300Regular};
  @media (max-width: 600px) {
  	${typography.single100Regular}
	}
`
const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
	z-index: 1;
  @media (max-width: 600px) {
    //margin: 0 0 31px;
  }
`
const ProfileIcon = styled(Image)<{isopen: boolean}>`
	width: 14px;
	height: 7px;
	transition: all .3s ease;
	transform: rotate(${({isopen}) => isopen ? "180" : "0"}deg);
`
const ProfileNavigation = styled.div<{isopen: boolean}>`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 34px;
	bottom: -29px;
	right: 0;
	padding: 30px 26px;
	background: ${appColors.neutral700};
	border-radius: 12px;
	transition: all .3s ease;
	z-index: 0;
	transform: translateY(${({isopen}) => isopen ? "100%" : "50%"});
	visibility: ${({isopen}) => isopen ? "visible" : "hidden"};
	opacity: ${({isopen}) => isopen ? "1" : "0"};
  @media (max-width: 600px) {
		position: relative;
		visibility: visible;
		opacity: 1;
		transform: translateY(0px);
		bottom: 0;
		padding: 0;
		gap: 27px;
		overflow: hidden;
		height: ${({isopen}) => isopen ? "101px" : "0"};
    margin: ${({isopen}) => isopen ? "31px 0 0 0" : "0"};
  }
`
const NavigationLink = styled.a`
	display: flex;
	gap: 12px;
	align-items: center;
	cursor: pointer;
`