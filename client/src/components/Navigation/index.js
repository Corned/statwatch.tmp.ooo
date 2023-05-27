import { useState } from "react"
import classNames from "classnames"

import { NavContext } from "context/NavContext"
import navigationData from "constants/navigationData"
import Link from "./Link"

import MenuOpenIcon from "remixicon-react/MenuLineIcon"
import MenuCloseIcon from "remixicon-react/MenuFoldFillIcon"
import "./index.css"
import Section from "./Section"

const Navigation = () => {
  const [ isCollapsed, setCollapsed ] = useState(false)

  const toggleCollapse = () => {
    setCollapsed(state => !state)
  }

  const navigationClasses = classNames(
    "navigation",
    { "collapsed": isCollapsed },
  )

  const NavigationCollapseToggleIcon = isCollapsed ? MenuOpenIcon : MenuCloseIcon
  
  return (
    <NavContext.Provider value={isCollapsed}>

      <nav className={navigationClasses}>
        <button className="navigation__collapse-toggle" onClick={toggleCollapse}>
          <NavigationCollapseToggleIcon/>
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