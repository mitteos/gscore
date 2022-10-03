import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { HeaderNavigation } from "layouts/MainLayout"
import { LogoIcon, MobileMenuIcon } from "assets/svg"

export const Header = () => {
	
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false)
	
	return (
		<HeaderContainer>
			<HeaderInner>
				<Link href="/">
					<a>
						<Image src={LogoIcon} width={170} height={42}/>
					</a>
				</Link>
				<HeaderNavigation
					mobileMenuIsOpen={mobileMenuIsOpen}
					setMobileMenuIsOpen={setMobileMenuIsOpen}
				/>
				<MenuButton onClick={() => setMobileMenuIsOpen(true)}>
					<Image
						src={MobileMenuIcon}
						width={24}
						height={24}
					/>
				</MenuButton>
			</HeaderInner>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	padding: 32px 0;
	width: 100%;
	margin-bottom: 16px;
`
const HeaderInner = styled.div`
	width: 85%;
	max-width: 1226px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
`
const MenuButton = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 600px) {
    display: block;
  }
`