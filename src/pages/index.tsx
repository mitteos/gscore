import React, {useEffect} from "react"
import styled from "styled-components"
import Link from "next/link"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import { MainLayout } from "layouts"
import { CardList } from "components/Card"
import { HeadComponent } from "components/HeadComponent"
import {GetStaticProps, InferGetStaticPropsType, NextPage} from "next"
import { ProductState } from "store/features/subscription/types"
import { $query } from "utils/api"
import { useAppDispatch } from "hooks/redux"
import { subscriptionActions } from "store/features/subscription"
import {useRouter} from "next/router";

interface HomeProps {
	allProducts: ProductState[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	try {
		const {data} = await $query.get<ProductState[]>("products")
		return {
			props: {
				allProducts: data
			},
		}
	} catch (e) {
		console.log(e);
		return {
			props: {
				allProducts: []
			},
		}
	}
}

const Home: NextPage<HomeProps> = ({allProducts}: InferGetStaticPropsType<typeof getStaticProps>) => {

	const dispatch = useAppDispatch()
	const router = useRouter()

	useEffect(() => {
		dispatch(subscriptionActions.setProducts(allProducts))
	}, [])

	return (
		<MainLayout>
			<HeadComponent title="Gscore" />
			<Title>{router.query.changeProductId ? "Change product" : "Get started with Gscore today!"}</Title>
			<Container>
				<CardList products={
					router.query.changeProductId
						? allProducts.filter(product => product.id !== Number(router.query.changeProductId))
						: allProducts
				}/>
				<AdditionTitle>Have more than 10 sites?</AdditionTitle>
				<AdditionLink>
					<Link href="/">
						<AdditionLinkInner>Contact us</AdditionLinkInner>
					</Link>
				</AdditionLink>
			</Container>
		</MainLayout>
	)
}
export default Home

const Container = styled.div`
  width: 85%;
  max-width: 1226px;
	margin: 0 auto;
`
const Title = styled.h1`
	${TYPOGRAPHY.specialHeading3}
	text-align: center;
	margin: 0 0 98px;
  @media (max-width: 1200px) {
    ${TYPOGRAPHY.specialHeading4}
  }
  @media (max-width: 900px) {
    margin: 0 0 40px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
  @media (max-width: 420px) {
    font-size: 20px;
  }
`
const AdditionTitle = styled.h1`
	text-align: center;
  ${TYPOGRAPHY.paragraphDefault}
	margin: 0 0 1px;
`
const AdditionLink = styled.div`
	display: flex;
	justify-content: center;
`
const AdditionLinkInner = styled.a`
	text-align: center;
  ${TYPOGRAPHY.paragraphDefault}
  cursor: pointer;
	text-decoration: underline;
	color: ${APP_COLORS.accent};
`