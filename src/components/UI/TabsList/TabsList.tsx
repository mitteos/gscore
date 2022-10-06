import React from "react";
import styled from "styled-components";
import {APP_COLORS} from "styles";
import {TabState} from "components/UI/types";
import {TabItem} from "components/UI";

interface TabsListProps {
	tabs: TabState[]
	activeTab: number;
	setActiveTab: (e: number) => void;
}

export const TabsList: React.FC<TabsListProps> = ({tabs, setActiveTab, activeTab}) => {
	return (
		<TabsContainer>
			<TabsRow>
				{tabs.map(tab =>
					<TabItem
						key={tab.id}
						tabInfo={tab}
						isActive={activeTab === tab.id}
						setIsActive={setActiveTab}
					/>
				)}
			</TabsRow>
			<TabsLine />
		</TabsContainer>
	);
};

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  margin: 0 0 48px;
`
const TabsRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const TabsLine = styled.div`
  width: 100%;
  height: 2px;
  background: ${APP_COLORS.neutral600};
`