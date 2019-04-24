import React from 'react';
import styles from './style.less'
class Dialog extends React.Component{
  render(){
    return(
      <div>
        <div className={styles["dialog"]}>
          <div className={styles["test_triangle_border"]}>
            <div className= {styles["popup"]}>

              <span><em></em></span>
              <i className={`icon-close ${styles['closeBtn']}`}></i>
              <h1>Separate multiple resource name with commas</h1>
              <div className="dialog-input">
                <input type="text"/>
              </div>

              <div className={styles["dialog-footer"]}>
                <button className={styles['leftBtn']}>Add Resources</button>
                <button className={styles['cancelBtn']}>Cancel</button>

              </div>
            </div>

          </div>



        </div>
      </div>
    )
  }
}
export default Dialog;
