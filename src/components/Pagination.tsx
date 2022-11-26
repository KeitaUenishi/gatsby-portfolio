// 参考 https://www.akashixi-tech.com/react/pagination

import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { pageState } from "../globalStates/atoms/page";

const Container = styled.nav`
  margin: 12px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Arrow = styled.span`
  height: 32px;
  font-size: 20px;
  cursor: pointer;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 45px;
  height: 45px;
  background: #fff;
  font-size: 20px;
  color: #4169e1;
  font-weight: bold;
  transition: all 0.15s linear;
  cursor: pointer;
`

type Props = {
  sum: number;
  per: number;
  onChange: (e: { page: number }) => void;
}

export const Pagination: React.FC<Props> = ({ sum, per, onChange }) => {
  const isFirstRender = React.useRef(true);
  const selectPage = useRecoilValue(pageState);
  const [currentPage, setCurrentPage] = React.useState(selectPage);

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

  const handleMove = (page: number) => {
    setCurrentPage(page);
  }

  return (
    <>
      <Container>
        {totalPage !== 0 && (
          <>
            <Arrow onClick={() => handleBack()}>{"<"}</Arrow>
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
            <Arrow onClick={() => handleForward()}>{">"}</Arrow>
          </>
        )}
      </Container> 
    </>
  )
}