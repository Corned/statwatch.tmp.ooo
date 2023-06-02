import classNames from "classnames"
import styled from "styled-components"


const SectionHeader = styled.p`
  margin: 0 0 3px 5px;
  font-weight: bold;
  font-size: 20px;
  gap: 2px;
`


const Section = ({ header, isFooter, children }) => {

  const sectionClasses = classNames(
    "navigation__section",
    { footer: isFooter }
  )

  return (
    <div className={sectionClasses}>
      <SectionHeader className="navigation__section-header">{ header }</SectionHeader>
      { children }
    </div>
  )
}

export default Section