// @flow

import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-vertical: ${({ theme }) => theme.metrics.extraLargeSize}px;
`;

const Wrapper = styled(View)`
  width: 60%;
  justify-content: center;
  align-items: center;
`;

const AuthorText = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-family: CircularStd-Bold;
  color: ${({ theme }) => theme.colors.primaryColor};
  padding-bottom: ${({ theme }) => theme.metrics.smallSize}px;
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
  text-align: center;
`;

const TitleText = styled(Text).attrs({
  numberOfLines: 3,
})`
  font-family: CircularStd-Black;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.metrics.extraLargeSize}px;
  text-align: center;
`;

type Props = {
  author: string,
  title: string,
};

const CurrentPodcastPlaying = ({ author, title }: Props): Object => (
  <Container>
    <Wrapper>
      <AuthorText>{author}</AuthorText>
      <TitleText>{title}</TitleText>
    </Wrapper>
  </Container>
);

export default CurrentPodcastPlaying;