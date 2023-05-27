import { ReactSVG } from "react-svg"

import { useState } from "react"
import classNames from "classnames"

import { NavContext } from "context/NavContext"
import navigationData from "constants/navigationData"
import Link from "./Link"

import "./index.css"
import Section from "./Section"

const Icon = (filename) => {
  return <ReactSVG className="link__icon" src={`assets/${filename}.svg`}/>
}

const Navigation = () => {
  const [ isCollapsed, setCollapsed ] = useState(false)

  const toggleCollapse = () => {
    setCollapsed(state => !state)
  }

  const navigationClasses = classNames(
    "navigation",
    { "collapsed": isCollapsed },
  )

  const NavigationCollapseToggleIcon = isCollapsed ? Icon("menu-line") : Icon("menu-fold-line") 
  
  return (
    <NavContext.Provider value={isCollapsed}>

      <nav className={navigationClasses}>
        <button className="navigation__collapse-toggle" onClick={toggleCollapse}>
          { NavigationCollapseToggleIcon }
        </button>

        <h1 className="navigation__header">statwatch</h1>

        {
          navigationData.map(({ header, isFooter, links }) => {
            return (
              <Section header={header} isFooter={isFooter}>
                { links.map(props => <Link header={header} { ...props }/> ) }
              </Section>
            )
          })
        }
      </nav>

    </NavContext.Provider>
  )
}

export default Navigation