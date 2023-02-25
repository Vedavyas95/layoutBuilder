import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const contentValue = showContent ? 'content-container' : 'display-content'
      const leftNavbarValue = showLeftNavbar
        ? 'left-navbar-container'
        : 'display-left-navbar'
      const rightNavbarValue = showRightNavbar
        ? 'right-navbar-container'
        : 'display-right-navbar'
      return (
        <div className="body-bg-container">
          <div className={leftNavbarValue}>
            <h1 className="left-navbar-heading">Left Navbar Menu</h1>
            <ul className="unordered-list-container">
              <li className="list-item">Item 1</li>
              <li className="list-item">Item 2</li>
              <li className="list-item">Item 3</li>
              <li className="list-item">Item 4</li>
            </ul>
          </div>
          <div className={contentValue}>
            <h1 className="content-heading">Content</h1>
            <p className="content-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              elusmod temper incididunt ut labore et dolore magna aliqa.Ut enim
              ad minim veniam.
            </p>
          </div>
          <div className={rightNavbarValue}>
            <h1 className="right-navbar-heading">Right Navbar</h1>
            <div className="ads-container">
              <div className="ad-container">Ad 1</div>
              <div className="ad-container">Ad 2</div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
