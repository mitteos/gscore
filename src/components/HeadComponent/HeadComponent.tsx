import Head from "next/head"
import React from "react"

interface HeadComponentsProps {
	title: string;
	children?: React.ReactNode | React.ReactNode[];
}

export const HeadComponent: React.FC<HeadComponentsProps> = ({title, children}) => {
	return (
		<Head>
			<title>{title}</title>
			{children}
		</Head>
	)
}