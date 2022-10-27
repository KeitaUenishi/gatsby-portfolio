// 参考 https://www.akashixi-tech.com/react/pagination

import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: center;
`

const Pages = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  & .current {
    font-size: 20px;
    color: #d81313;
  }
`

const Item = styled.li`
  margin: 0 10px;
`

export const Pagination = ({ sum, per, onChange }) => {
  const isFirstRender = React.useRef(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  useEffect(() => {
    if(isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    onChange({ page: currentPage });
  }, [currentPage]);

  const totalPage = Math.ceil(sum / per);

  const handleBack = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  }

  const handleForward = () => {
    if (currentPage === totalPage) return;
    setCurrentPage(currentPage + 1);
  }

  const handleMove = (page) => {
    setCurrentPage(page);
  }

  return (
    <Container>
      {totalPage !== 0 && (
        <>
          <span onClick={() => handleBack()}>{"<"}</span>
          <Pages>
            {[...Array(totalPage).keys()].map((page) => {
              page++;
              return page === currentPage ? (
                <Item className="current" key={page} onClick={() => handleMove(page)}>{page}</Item>
              ) : (
                <Item key={page} onClick={() => handleMove(page)}>{page}</Item>
              );
            })}
          </Pages>
          <span onClick={() => handleForward()}>{">"}</span>
        </>
      )}
    </Container>
  )
}