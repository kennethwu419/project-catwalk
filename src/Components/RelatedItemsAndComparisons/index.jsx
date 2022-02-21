import React from 'react';
import styled from 'styled-components';
import { colors, styles } from '../../styles.js';
import OutfitList from './OutfitList.jsx';
import RelatedProductsList from './RelatedProductsList.jsx';

const RelatedStyle = styled.div`
  ${styles.Standard};
  height: fit-content;
  width: 100%;
`;

const Title = styled.h3`
  font-family: inherit;
`;

function RelatedItemsAndComparisons() {
  return (
    <RelatedStyle className="relatedAndComparisons">
      <Title>
        Related Products
      </Title>
      <RelatedProductsList />
      <Title>
        Outfits
      </Title>
      <OutfitList />
    </RelatedStyle>
  );
}

export default RelatedItemsAndComparisons;
