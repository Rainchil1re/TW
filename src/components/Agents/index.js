import React from 'react';
import bind from 'bind-decorator';
import {UtilsFun} from '../../utils'
import style from './style.less';
import Dialog from '../Dialog';

class Agents extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  onChange(key, value) {
    this.props.onChange({
      [key]: value,
    });
  }
  render() {
    const { type } = this.props;
    return (
      <div className={style['agent-wrap']}>
        <div className={style['info-wrap']}>
          <div className={style['basic-info-box']}>
            <span>Building</span>
            <i className="icon-cog" />
            <span>3</span>
          </div>
          <div className={style['basic-info-box']}>
            <span>Idle</span>
            <i className="icon-coffee" />
            <span>3</span>
          </div>
          <div className={style['total-info-box']}>
            <p>
              <span>ALL</span>
              <span>{UtilsFun.getSubStr('8')}</span>
            </p>
            <p>
              <span>PHYSICAL</span>
              <span>4</span>
            </p>
            <p>
              <span>VIRTUAL</span>
              <span>4</span>
            </p>
          </div>
        </div>
        <div className={style['query-wrap']}>
          <div className={style['type-box']}>
            <span
              onClick={() => {
                this.onChange('type', 'all')
              }}
              className={type === 'all' ? style.current : ''}
            >ALL</span>
            <span
              onClick={() => {
                this.onChange('type', 'physical')
              }}
              className={type === 'physical' ? style.current : ''}
            >Physical</span>
            <span
              onClick={() => {
                this.onChange('type', 'virtual')
              }}
              className={type === 'virtual' ? style.current : ''}
            >Virtual</span>
          </div>
          <div className={style['search-wrap']}>
            <input type="text"/>
            <i className='icon-search' />
          </div>
          <div className={style['arrange-wrap']}>
            <i className="icon-th-card" />
            <i className="icon-th-list current" />
          </div>
        </div>
        <div className={style['agents-list-wrap']}>
          <ul>
            <li>
              <img src={require('../../assets/imgs/windows.png')} alt="" />
              <div className={style['agent-list-info']}>
                <div className={style['agent-list-info-upper']}>
                  <i className="icon-desktop"/>
                  <span>bjsdmngbgr08.thoughtworks.com</span>
                  <span className={`${style['status']} ${style['idle']}`}>idle</span>
                  <i className="icon-info"/>
                  <span>192.168.1.102</span>
                  <i className="icon-folder" />
                  <span>/var/lib/cruise-agent</span>
                </div>
                <div className={style['agent-list-info-lower']}>
                  <div
                    onClick={(e) => {
                      console.log(e)
                    }}
                    className={style['plus-wrap']}>
                    <i className="icon-plus"></i>
                  </div>
                  <div className={style['os-wrap']}>
                    <span>Firefox</span>
                    <i className="icon-trash"></i>
                  </div>
                </div>
                <Dialog></Dialog>
              </div>
              <div>

              </div>
            </li>
            <li>
              <img src={require('../../assets/imgs/windows.png')} alt="" />
              <div className={style['agent-list-info']}>
                <div className={style['agent-list-info-upper']}>
                  <i className="icon-desktop"/>
                  <span>bjsdmngbgr08.thoughtworks.com</span>
                  <span className={`${style['status']} ${style['idle']}`}>idle</span>
                  <i className="icon-info"/>
                  <span>192.168.1.102</span>
                  <i className="icon-folder" />
                  <span>/var/lib/cruise-agent</span>
                </div>
                <div className={style['agent-list-info-lower']}>
                  <div className={style['plus-wrap']}>
                    <i className="icon-plus"></i>
                  </div>
                  <div className={style['os-wrap']}>
                    <span>Firefox</span>
                    <i className="icon-trash"></i>
                  </div>
                </div>
                <Dialog></Dialog>
              </div>
              <div>

              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Agents;

