import React, { PureComponent, Fragment } from 'react'


import { connect } from 'react-redux';
import { getAuth } from '../../actions'
import logo from '../../assets/icons/metamask.svg'
import discord from '../../assets/icons/discord.svg'
import github from '../../assets/icons/github.svg'
import twitter from '../../assets/icons/icon.svg'
import telegram from '../../assets/icons/telegram.svg'
import rocketLogo from '../../assets/svg/rocketLogo.svg'
import metamaskIcon from '../../assets/metamask.svg'
import uniswap from '../../assets/icons/uniswap.svg'
import './style.scss'

class Header extends PureComponent {
    constructor() {
        super();
        this.state = {
            auth: false,
            isProfileOpen: false,
            globalTime: 0,
        }

        this.toLogin = this.toLogin.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
        this.renderModalBody = this.renderModalBody.bind(this)
    }

    componentDidMount() {
        this.checkAuth()
        this.setState({ globalTime: 1612463200 - (new Date().getTime() / 1000) })
        this.interval = setInterval(() => {
            let { globalTime } = this.state;
            globalTime--;
            this.setState({ globalTime })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getExpiredTime(time) {
        let { globalTime } = this.state;
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        if (time / 86400 >= 1) {
            days = (time / 86400);
            days = Math.trunc(days)
        }
        if (days) {
            time -= days * 86400;
        }
        if (time / 3600 >= 1) {
            hours = time / 3600;
            hours = Math.trunc(hours)
        }
        if (hours) {
            time -= hours * 3600;
        }
        if (time / 60 >= 1) {
            minutes = time / 60;
            minutes = Math.trunc(minutes)
        }
        if (minutes) {
            time -= minutes * 60;
        }
        seconds = Math.round(time);
        if ((!days && !hours && !minutes && !seconds) || globalTime <= 0) {
            return [0, 0, 0, 0]
        }

        return [days, hours, minutes, seconds]

    }

    checkAuth() {
        const ethereum = window.ethereum
        if (ethereum) {
            if (ethereum.selectedAddress !== null) {
                this.setState({ auth: ethereum.selectedAddress })
                localStorage.auth = ethereum.selectedAddress;
            } else {
                this.setState({ auth: localStorage.auth })
                this.timeout = setTimeout(() => {
                    const ethereum = window.ethereum;
                    if (ethereum.selectedAddress !== null) {
                        this.setState({ auth: ethereum.selectedAddress })
                        localStorage.auth = ethereum.selectedAddress;
                    } else {
                        localStorage.auth = '';
                        this.setState({ auth: false })
                    }
                }, 400)
            }
        }
    }

    openModal() {
        this.setState({ isProfileOpen: true })
    }

    renderModalBody() {
        const { auth } = this.state;
        return (
            <Fragment>
                <div className='modal-title'>Profile</div>
                <div className='center'>Metamask id:</div>
                <div className='info'>{auth}</div>
            </Fragment>
        )
    }

    toLogin() {
        this.props.getAuth();
    }

    closeModal() {
        this.setState({ isProfileOpen: false })
    }

    render() {
        const { globalTime } = this.state;
        const [days, hours, minutes, seconds] = this.getExpiredTime(globalTime);
        return (
            <div className='header-wrap'>
                <header className='header'>
                    <div><img alt='' src={rocketLogo} /></div>
                    <div className='alphadrop-notification'>Tip: set slippage tolerance on  <a rel="noopener noreferrer" target="_blank" href='https://app.uniswap.org/#/swap?inputCurrency=0x8c7424c3000942e5a93de4a01ce2ec86c06333cb'>
                        Uniswap
                        </a>to 5%</div>
                    <div className='wrap-navigation'>
                        <a rel="noopener noreferrer" target="_blank" href='https://app.uniswap.org/#/swap?inputCurrency=0x8c7424c3000942e5a93de4a01ce2ec86c06333cb'>
                            <img alt='' src={uniswap} className='uniswap' />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href='https://twitter.com/rock3tfinance'>
                            <img alt='' src={twitter} />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href='https://discord.gg/3HMJ7caFhj'>
                            <img alt='' src={discord} />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href='https://t.me/Rock3Tfinance'>
                            <img alt='' src={telegram} />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href='https://github.com/degen-vc'>
                            <img alt='' src={github} />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href='https://medium.com/rock3t'>
                            <img src={logo} alt="" />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href='https://metamask.io/'>
                            <img className='metamask-icon' src={metamaskIcon} alt="" />
                        </a>
                    </div>


                </header>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authorized: state.auth.authorization
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAuth: () => {
            dispatch(getAuth());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);