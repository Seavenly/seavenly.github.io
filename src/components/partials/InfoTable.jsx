import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SVG from './SVG';

const InfoTable = ({ frontmatter }) => {
  const { project: { info } } = frontmatter;
  return (
    <Wrapper>
      {(() => {
        const infoRows = [];
        if (info.tool) {
          infoRows.push(
            <Row key="cms">
              <Column>
                <SvgWrapper>
                  <SVG icon="tool" />
                </SvgWrapper>
                Built with
              </Column>
              <Column>
                <TableLink href={info.tool.link}>{info.tool.name}</TableLink>
              </Column>
            </Row>,
          );
        }
        if (info.link) {
          infoRows.push(
            <Row key="link">
              <Column>
                <SvgWrapper>
                  <SVG icon="link" />
                </SvgWrapper>
                Link
              </Column>
              <Column>
                <TableLink href={info.link}>{info.link}</TableLink>
              </Column>
            </Row>,
          );
        }
        if (info.github) {
          infoRows.push(
            <Row key="github">
              <Column>
                <SvgWrapper>
                  <SVG icon="github" />
                </SvgWrapper>
                Github
              </Column>
              <Column>
                <TableLink href={info.github}>{frontmatter.title}</TableLink>
              </Column>
            </Row>,
          );
        }
        return infoRows;
      })()}
    </Wrapper>
  );
};

InfoTable.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    project: PropTypes.obj,
  }).isRequired,
};

export default InfoTable;

const Wrapper = styled.div`
  margin: 0 auto 4rem;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  max-width: 40rem;
  border-radius: 2px;
  border: 1px solid #e5e5e5;
`;
const TableLink = styled.a`
  color: black;
`;
const Row = styled.div`
  padding: 0.5rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }
  @media screen and (min-width: 31.25rem) {
    display: flex;
    align-items: center;
  }
`;
const Column = styled.div`
  &:nth-child(1) {
    font-weight: 300;
    color: #777;
    margin-bottom: 0.5rem;
  }
  &:nth-child(2) {
    text-align: center;
  }
  @media screen and (min-width: 31.25rem) {
    &:nth-child(1) {
      flex: 1 1 30%;
      text-align: right;
      margin-bottom: 0;
    }
    &:nth-child(2) {
      flex: 1 1 70%;
      padding-left: 1rem;
      text-align: left;
    }
  }
`;
const SvgWrapper = styled.div`
  display: inline-block;
  max-width: 1rem;
  margin-right: 0.2rem;
  vertical-align: middle;
  svg {
    max-width: 100%;
    height: auto;
    fill: #777;
  }
`;
