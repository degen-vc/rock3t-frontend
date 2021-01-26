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
            isProfileOpen: false
        }

        this.toLogin = this.toLogin.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
        this.renderModalBody = this.renderModalBody.bind(this)
    }

    componentDidMount() {
        this.checkAuth()
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
        const { auth } = this.state;
        const { authorized } = this.props;
        return (
            <div className='header-wrap'>
                <header className='header'>
                    <div><img alt='' src={rocketLogo} /></div>
                    <div className='wrap-navigation'>
                        {/* <a rel="noopener noreferrer" target="_blank" href='https://twitter.com/rock3tfinance'> */}
                            <img alt='' src={uniswap} className='uniswap'/>
                        {/* </a> */}
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