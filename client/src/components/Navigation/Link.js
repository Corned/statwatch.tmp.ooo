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

  
    ${'' /* background-color: #E84C3D; */}

    background: #fe8c00;  /* fallback for old browsers */
    background: -webkit-linear-gradient(135deg, #f83600, #fe8c00);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(135deg, #f83600, #fe8c00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */




    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;

    color: white;
    text-shadow: 0px 0px 0px #000000;
  `}


  ${props => !props.selected && css`
    &:hover {
      background-color: rgb(0, 0, 0, 0.1);
    }
  `}
  

  ${props => props.collapsed === true && css`
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
      // for tooltips
      // had to do hax to remove a "non-boolean" error
      collapsed={collapsed ? 1 : 0}
      to={to}
    >
      { icon }
      <span className="label">{ label }</span>
      <Tooltip tip={tooltipText}/>
    </StyledLink>
  )
}
