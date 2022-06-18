import React, { Component } from 'react'



export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>過去的幾年時間學習了國外文化，眼界擴大的同時也觀察世界的變化</p>
                                            <p>學習科技新技術一直在我腦海裡，此刻我投入前端網頁技術領域，結合我對視覺影像的技術，
                                                期望創作出更精采的網頁視覺體驗
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">學習歷程</span>
                                <h2 className="colorlib-heading">技能表</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Development網頁開發 </h3>
                                        <p>作品官網專案使用 React
                                            ，Vue，HTML，CSS，Bootstrap5</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Back End資料庫</h3>
                                        <p>⚫MySQL</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>UI</h3>
                                        <p>⚫Figma
                                            ⚫Photoshop
                                            ⚫ADOBE Premiere</p>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>


                            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
                        </div>
                    </div >
                </section >
            </div >
        )
    }
}
