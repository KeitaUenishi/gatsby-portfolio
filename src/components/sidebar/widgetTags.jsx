import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px 0;
  ul {
    padding: 0px;
  }
  ul li {
    margin: 5px;
    padding: 5px;
    display: inline-block;
    text-decoration: none;
    border: 1px;
    border-radius: 25px;
    color: #fff;
    box-shadow: rgb(0 0 0 / 16%) 0px 0px 6px
  }
`

const WidgetTags = () => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 100) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const group = query.allMarkdownRemark.group.sort(
    (a, b) => b.totalCount - a.totalCount
  );
  return (
    <Wrapper>
      <h2>タグ一覧</h2>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>
              #{tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
};

WidgetTags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
};

export default WidgetTags;