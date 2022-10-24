import React, { useState } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import {Navigation, Pagination} from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SubscriptionItem } from "components/Subscription"
import { SliderButton } from "components/UI"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import { SubscriptionState } from "store/features/subscription/types"

interface SubscriptionsListProps {
	subscriptionsCollection: SubscriptionState[];
	setActiveSubscriptionId: (e: number) => void;
}

export const SubscriptionsList: React.FC<SubscriptionsListProps> = ({subscriptionsCollection, setActiveSubscriptionId}) => {
	return (
		<Container>
			<Slider
				onSlideChange={(slide) => {
					setActiveSubscriptionId(slide.activeIndex)
				}}
				spaceBetween={28}
				slidesPerView="auto"
				centeredSlidesBounds={true}
				centeredSlides={true}
				modules={[Pagination, Navigation]}
				pagination={{
					el: ".fractions",
					type: "fraction",
				}}
				navigation={{
					enabled: true,
					prevEl: ".slider-button-prev",
					nextEl: ".slider-button-next"
				}}
			>
				{subscriptionsCollection.map(sub =>
					<SwiperSlide key={sub.id}>
						<SubscriptionItem subscriptionInfo={sub} />
					</SwiperSlide>
				)}
				<NavigationContainer $visibility={subscriptionsCollection.length > 1}>
					<SliderButton variant="prev" className="slider-button-prev"/>
					<NavigationFraction className="fractions"/>
					<SliderButton variant="next" className="slider-button-next"/>
				</NavigationContainer>
			</Slider>
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin: 0 0 32px;
`
const Slider = styled(Swiper)`
  width: 85%;
  max-width: 1226px;
  margin: 0 auto;
	overflow: visible;
	.swiper-slide {
    opacity: 0.6;
		transition: opacity .3s ease;
		max-width: 620px;
		width: 90%;
  }
	.swiper-slide-active {
		opacity: 1;
	}
`
const NavigationContainer = styled.div<{$visibility: boolean}>`
  display: ${({$visibility}) => $visibility ? "flex" : "none"};
  align-items: center;
	gap: 12px;
	margin: 24px 0 0;
	.swiper-button-disabled {
		opacity: 0.5;
	}
  @media (max-width: 600px) {
    justify-content: center;
  }
`
const NavigationFraction = styled.div`
  width: auto;
  ${TYPOGRAPHY.headings4};
  color: rgba(255, 255, 255, 0.6);
  .swiper-pagination-current {
    color: ${APP_COLORS.neutral100};
  }
`