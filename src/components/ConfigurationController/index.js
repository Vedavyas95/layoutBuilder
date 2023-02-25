import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {values => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = values
      const changeContentFunc = event => {
        console.log(event.target.checked)
        onToggleShowContent(event.target.checked)
      }
      const changeLeftNavbarFunc = event => {
        console.log(event.target.checked)
        onToggleShowLeftNavbar(event.target.checked)
      }
      const changeRightNavbarFunc = event => {
        console.log(event.target.checked)
        onToggleShowRightNavbar(event.target.checked)
      }
      return (
        <div className="configuration-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="input-container">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={changeContentFunc}
            />
            <label htmlFor="content" className="label-el">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={changeLeftNavbarFunc}
            />
            <label htmlFor="leftNavbar" className="label-el">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={changeRightNavbarFunc}
            />
            <label htmlFor="rightNavbar" className="label-el">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
