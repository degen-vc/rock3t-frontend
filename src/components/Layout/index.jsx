
import React, { PureComponent, Fragment } from 'react'
import rocket from '../../assets/rocket.png'
import ETH from '../../assets/svg/eth.svg'
import './styles.scss'
class Layout extends PureComponent {

    render() {

        return (
            <Fragment>
                <div className="base-background" >
                    <div className="rocket-container">
                        <img src={rocket} alt='' />
                    </div>
                    <div className="eth-border actions">
                        <div className='amount'>
                            <div className='title'>AMOUNT</div>
                            <div className='image-wrap'>ETH<img src={ETH} alt=''></img></div>
                        </div>
                        <div className='border-wrap'>
                            <div className='title'>LOCKED LP</div>
                            <div className='number'>0.000000</div>
                        </div>
                        <div className='send-eth button eth'>
                            <div className='title'>SEND ETH</div>
                        </div>
                        <div className='claim-lp button claim'>
                            <div className='title'>CLAIM LP</div>
                        </div>
                    </div>
                    <div className="eth-border">
                        <div className="bordered-data-container">
                            <div className="bordered-data">
                                <div className='title'>MAX FUEL</div>
                                <div className='value'>999ETH</div>
                            </div>
                            <div className="bordered-data">
                                <div className='title'>LOCK PERIOD</div>
                                <div className='value'>1DAY</div>
                            </div>
                            <div className="bordered-data">
                                <div className='title'>LP BOOST</div>
                                <div className='value'>0.001%</div>
                            </div>
                            <div className="bordered-data">
                                <div className='title'>LP BURN</div>
                                <div className='value'>0.001%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}
export default Layout