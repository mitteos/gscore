import styled from "styled-components"
import {APP_COLORS, TYPOGRAPHY} from "styles"
import React from "react"
import {TabState} from "components/UI/types"
import {useRouter} from "next/router"
import Link from "next/link"

interface TabItemProps {
    tabInfo: TabState;
    path: string;
}

export const TabItem: React.FC<TabItemProps> = ({tabInfo, path}) => {

    const router = useRouter()

    return (
        <Link href={{
            pathname: path,
            query: { tab: tabInfo.query }
        }}>
            <TabContainer $isActive={router.query.tab === tabInfo.query}>{tabInfo.title}</TabContainer>
        </Link>
    );
};

const TabContainer = styled.div<{$isActive: boolean}>`
	${TYPOGRAPHY.single200Bold};
	color: ${({$isActive}) => $isActive ? APP_COLORS.accent : APP_COLORS.neutral600};
	cursor: pointer;
	position: relative;
	padding: 0 24px;
  transition: all .3s ease;
  &::after {
		content: "";
		width: 100%;
		height: 2px;
		background: ${APP_COLORS.accent};
		position: absolute;
		bottom: -14px;
		left: 0;
		transition: all .3s ease;
		opacity: ${({$isActive}) => $isActive ? "1" : "0"};
	}
	@media (max-width: 700px) {
    ${TYPOGRAPHY.single100Bold};
  }
`
