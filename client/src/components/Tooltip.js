import styled, { css } from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { useContext } from "react"
import { NavContext } from "context/NavContext"

// styled(Link)
const StyledLink = styled.span`
  display: none;

  position: absolute;
  top: 50%;
  left: calc(100% + 5px);
  transform: translateY(-50%);

  background-color: var(--black-color);
  padding: 4px 12px;
  border-radius: 6px;
  color: white;
  pointer-events: none;
  white-space: nowrap;
`

export default ({ show, tip }) => {
  return (
    <StyledLink
      className="tooltip"
      show={show}
    >{ tip }</StyledLink>
  )
}
