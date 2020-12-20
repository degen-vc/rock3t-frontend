
import React, { PureComponent, Fragment } from 'react'
import { purchaseLP, claim } from '../../actions';
import { connect } from 'react-redux';
import ETH from '../../assets/svg/eth.svg'
import './styles.scss'
class Layout extends PureComponent {
    constructor() {
        super()
        this.state = {
            ethValue: ''
        }
    }
    changeEthValue(e) {
        const { value } = e.target;
        this.setState({ ethValue: value })
    }
    render() {
        const { ethValue } = this.state;
        const { purchaseLP, claim } = this.props;
        return (
            <Fragment>
                <div className="base-background" >
                    <div className="rocket-container" />
                    <div>
                        <div className="eth-border actions">
                            <div className='amount'>
                                <input className='title' placeholder='AMOUNT' value={ethValue} onChange={(e) => this.changeEthValue(e)}></input>
                                <div className='image-wrap'>ETH<img src={ETH} alt=''></img></div>
                            </div>
                            <div className='border-wrap'>
                                <div className='title'>LOCKED LP</div>
                                <div className='number'>0.000000</div>
                            </div>
                            <div className='send-eth button eth' onClick={() => { purchaseLP(ethValue) }}>
                                <div className='title'>SEND ETH</div>
                            </div>
                            <div className='claim-lp button claim' onClick={() => { claim() }}>
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
                </div>
            </Fragment>

        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        purchaseLP: (value) => {
            dispatch(purchaseLP(value));
        },
        claim: () => {
            dispatch(claim());
        },
    };
};
export default connect(() => { }, mapDispatchToProps)(Layout);