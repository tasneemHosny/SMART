import React from 'react'
import styles from './SmartIntro.module.css'
export default function SmartIntro() {
  return (
    <div className={`${styles.container} `}>
        <div className={`${styles.left} lg:px-20 md:px-12 sm:px-8 px-6 py-8 mt-3`}>
            <h1>Smart technology <br/>
             company
             <span> &nbsp;helps your <br/>
             business soar <br/> with smart tech and<br/>
            custom solutions<br/>
            <p className={styles.lineSpace}>&nbsp;
            </p> 
            let’s make success <br/> 
            happen <br/>
            together!
            </span>
            </h1>
        </div>
    </div>
  )
}
