
import React, { PureComponent, Fragment } from 'react'
import rocket from '../../assets/svg/rocket.svg'
import border from '../../assets/svg/dataBorder.svg'
import './styles.scss'
class Layout extends PureComponent {

    render() {

        return (
            <Fragment>
                <div className="base-background" >
                    <div className="rocket-container">
                        <div style={{flexGrow: 1}}>
                            <img alt=''/>
                        </div>
                        <div  style={{flexGrow: 1}}>
                            <img alt=''/>
                        </div>
                        <div style={{flexGrow: 2}}>
                            <img src={rocket} alt=''/>
                        </div>
                    </div>
                    <div className="eth-border">
                        WIP
                    </div>
                    <div className="eth-border" style={{marginTop: 10}}>
                        <div className="bordered-data-container">
                            <div className="bordered-data">
                                <img src={border} style={{height: 72, width: 170}} alt={''}/>
                            </div>
                            <div className="bordered-data">
                                <img src={border} style={{height: 72, width: 170}} alt={''}/>
                            </div>
                            <div className="bordered-data">
                                <img src={border} style={{height: 72, width: 170}} alt={''}/>
                            </div>
                            <div className="bordered-data">
                                <img src={border} style={{height: 72, width: 170}} alt={''}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}
export default Layout