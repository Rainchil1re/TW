import React from 'react';
import bind from 'bind-decorator';
import style from './style.less'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropMenu: false
    }
  }
  @bind
  handleMouseOver() {
    this.setState({
      showDropMenu: true
    })
  }
  @bind
  handleMouseOut() {
    this.setState({
      showDropMenu: false
    })
  }
  render() {
    const { showDropMenu } = this.state;
    return (
      <div className={style.head}>
        <img className={style.logo} src={require('../../assets/imgs/logo.svg')} alt="logo"/>
        <div
          className={style['Drop-menu-wrap']}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <img
            className={style.user}
            src={require('../../assets/imgs/user.jpg')}
            alt="user"/>
          <span className={showDropMenu ? 'icon-angle-down rotate' : 'icon-angle-down rotateRecover'} />
         <ul>
           <li>
             <i className='icon-id-card'></i>
             <span>Profile</span>
           </li>
           <li>
             <i className='icon-sign-in'></i>
             <span>Sign Out</span>
           </li>
         </ul>
        </div>
      </div>
    );
  }
}

export default Header;
