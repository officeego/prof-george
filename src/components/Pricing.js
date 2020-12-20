import React from 'react'
import { Link } from "react-router-dom"
import { FaFire } from 'react-icons/fa'
import { Button } from './Button'
import { BsXDiamondFill } from 'react-icons/bs'
import { FaFileContract, FaBusinessTime} from 'react-icons/fa'
import { SiMarketo } from 'react-icons/si'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import './Pricing.css'

function Pricing() {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Negociation</h1>
                    <div className="pricing__container">
                        <Link to="/contacts" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFileContract />
                                </div>
                                <h3>Contract Negotiaton</h3>
                                <h4>Agreement</h4>
                                <p>Legal binding</p>
                                <ul className="pricing__container-features">
                                    <li>Steps</li>
                                    <li>Rules</li>
                                    <li>Objectives</li>
                                </ul>
                                <Button buttonSize="btn--wide" buttonColor="primary">
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link to="/contacts" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaBusinessTime />
                                </div>
                                <h3>S PartnerShips</h3>
                                <h4>Arangement</h4>
                                <p>Partnerhips</p>
                                <ul className="pricing__container-features">
                                    <li>Temporal Brand</li>
                                    <li>Marketng Campaign</li>
                                    <li>Foundation</li>
                                </ul>
                                <Button buttonSize="btn--wide" buttonColor="blue">
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link to="/contacts" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <SiMarketo />
                                </div>
                                <h3>Management</h3>
                                <h4>Organisation</h4>
                                <p>Motivation</p>
                                <ul className="pricing__container-features">
                                    <li>Decision</li>
                                    <li>Leading</li>
                                    <li>Resources</li>
                                </ul>
                                <Button buttonSize="btn--wide" buttonColor="primary">
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
