import styled, { css } from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { useContext } from "react"
import { NavContext } from "context/NavContext"
import Tooltip from "components/Tooltip"

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 5px;

  color: rgb(20, 20, 20);
  text-decoration: none;

  border-radius: 8px;
  padding: 6px 0px;
  cursor: pointer;
  align-items: center;
  justify-items: center;

  $ svg {
    color: rgb(20, 20, 20);
  }

  ${props => props.selected && css`
    background-color: #E84C3D;
    color: white;
    text-shadow: 0px 0px 0px #000000;
  `}


  ${props => !props.selected && css`
    &:hover {
      background-color: rgb(0, 0, 0, 0.1);
    }
  `}
  

  ${props => props.collapsed && css`
    max-height: 36px;

    &:hover > .tooltip {
      display: block;
    }
  `}

  & .label {
    margin: auto 0;
    font-weight: bold;
    font-size: 16px;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    width: 100%;
  }

  & .link__icon {
    height: 24px;
    width: 24px;
  }
`

export default ({ icon, to, label, header }) => {
  const { pathname } = useLocation()
  const collapsed = useContext(NavContext)

  const tooltipText = header
    ? `${header}: ${label}`
    : label
  
  return (
    <StyledLink
      className="navigation__link"
      selected={pathname === to}
      collapsed={collapsed}
      to={to}
    >
      { icon }
      <span className="label">{ label }</span>
      <Tooltip tip={tooltipText}/>
    </StyledLink>
  )
}
