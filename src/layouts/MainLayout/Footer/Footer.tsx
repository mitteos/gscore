import styled from "styled-components"
import { appColors, typography } from "styles"
import Image from "next/image"
import { LogoIcon, FacebookIcon, LinkedInIcon, TwitterIcon } from "assets/svg"
import Link from "next/link"

export const Footer = () => {
	return (
		<FooterContainer>
			<Container>
				<Image src={LogoIcon} width={170} height={42}/>
				<FooterText>Ut enim ad minim veniam quis nostrud exercitation  ea commodo</FooterText>
				<FooterLine />
				<FooterRow>
					<Copyright>
						Copyright © 2022 GScore | All Rights Reserved
						<span> | </span>
						<Link href="/">
							<CopyrightLink>Cookies</CopyrightLink>
						</Link>
						<span> | </span>
						<Link href="/">
							<CopyrightLink>Privacy Policy</CopyrightLink>
						</Link>
					</Copyright>
					<SocialRow>
						<SocialItem>
							<Image src={FacebookIcon} width={36} height={36} />
						</SocialItem>
						<SocialItem>
							<Image src={TwitterIcon} width={36} height={36} />
						</SocialItem>
						<SocialItem>
							<Image src={LinkedInIcon} width={36} height={36} />
						</SocialItem>
					</SocialRow>
				</FooterRow>
			</Container>
		</FooterContainer>
	);
};

const Container = styled.div`
  width: 85%;
  max-width: 1226px;
	margin: 0 auto;
`
const FooterContainer = styled.footer`
	margin: 42px 0 0 0;
	border-top: 1px solid ${appColors.neutral600};
	padding: 60px 0 42px 0;
`
const FooterText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
	margin: 24px 0 0 0;
	width: 322px;
  @media (max-width: 500px) {
    font-family: "THICCCBOI", serif;
    ${typography.paragraphDefault}
  }
`
const FooterLine = styled.div`
	width: 100%;
	border: 1px solid ${appColors.neutral600};
	margin: 60px 0 44px 0;
`
const Copyright = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
	color: ${appColors.neutral400};
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 870px) {
    text-align: center;
  }
`
const CopyrightLink = styled.a`
	text-decoration: underline;
	color: ${appColors.neutral100};
	cursor: pointer;
`
const FooterRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
  @media (max-width: 870px) {
		gap: 30px;
		flex-direction: column;
  }
`
const SocialRow = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`
const SocialItem = styled.a`
	transition: all .3s ease;
	cursor: pointer;
	&:hover {
		transform: translateY(-10px);
	}
`