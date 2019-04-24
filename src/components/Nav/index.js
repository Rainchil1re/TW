import React from 'react';
import style from './style.less'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pathName } = this.props;
    return (
      <div className={style['nav-wrap']}>
        <ul className={style['nav-list']}>
          <li>
            <a className={pathName === '/dashbord' ? style.current : ''} href="#/dashbord">
              <i className="icon-dashboard" />
              <span>DASHBOARD</span>
            </a>
          </li>
          <li>
            <a className={pathName === '/agents' ? style.current : ''} href="#/agents">
              <i className="icon-sitemap" />
              <span>AGENT</span>
            </a>
          </li>
          <li>
            <a className={pathName === '/myCurise' ? style.current : ''} href="#/myCurise">
              <i className="icon-boat" />
              <span>MY CRUISE</span>
            </a>
          </li>
          <li>
            <a className={pathName === '/help' ? style.current : ''} href="#/help">
              <i className="icon-life-bouy" />
              <span>HELP</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default Nav;


