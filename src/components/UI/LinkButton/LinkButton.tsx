import React from "react"
import styled from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import Link from "next/link"

interface Href {
	pathname: string;
	query: { [name: string]: string }
}

interface LinkButtonProps {
	className?: string;
	variant: "primary" | "secondary";
	children: React.ReactNode | React.ReactNode[];
	href: Href | string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({href, variant, children, className}) => {
	return (
		<Link href={href}>
			<LinkInner 
				$variant={variant}
				className={className}
			>
				{children}
			</LinkInner>
		</Link>
	)
}

const LinkInner = styled.a<{$variant: "primary" | "secondary"}>`
	text-align: center;
	cursor: pointer;
	background: ${({$variant}) => $variant === "primary" ? APP_COLORS.accent : APP_COLORS.neutral100};
  box-shadow: 0 10px 28px rgba(252, 88, 66, 0.2);
  border-radius: 4px;
	padding: 20px 24px;
	${TYPOGRAPHY.single100Bold};
	color: ${({$variant}) => $variant === "primary" ? APP_COLORS.neutral100 : APP_COLORS.accent};
	border: none;
	transition: color, background-color .3s ease;
	&:hover {
		background: ${({$variant}) => $variant === "primary" ? APP_COLORS.red400 : APP_COLORS.neutral200};
		color: ${({$variant}) => $variant === "secondary" && APP_COLORS.red400};
	}
`