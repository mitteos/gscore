import styled from "styled-components";
import {APP_COLORS, TYPOGRAPHY} from "styles";
import React from "react";
import {TabState} from "components/UI/types";

interface TabItemProps {
    tabInfo: TabState;
    isActive: boolean;
    setIsActive: (e: number) => void;
}

export const TabItem: React.FC<TabItemProps> = ({setIsActive, isActive, tabInfo}) => {
    return (
        <TabContainer
            onClick={() => setIsActive(tabInfo.id)}
            $isActive={isActive}
        >
            {tabInfo.title}
        </TabContainer>
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
