import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Timeline</h2>
                <p >Experience工作經歷</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>想見科技股份有限公司 <span>2021/12-2022/06</span></h2>
                        <div className="table-responsive-md">
                          <table class="table">
                            <p>實習前端工程師</p>
                            <li>專案經理人 PM</li>
                            <li>UI設計+網頁切版 </li>
                            <li>React，Vue，Mysql，Node.js</li>
                            <li>專案製作</li>
                          </table>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>加群有限公司(USA) <span>2020/10-2021/10</span></h2>
                        <div className="table-responsive-md">
                          <table class="table">
                            <p>跨境電子商務PM<br></br>
                              操作美國AMAZOM，EBAY平台商品行銷，投放廣告，關鍵字搜尋及數據分析<br></br>
                              台灣蝦皮，PCHOME及官網平台商品行銷，投放廣告，關鍵字搜尋及數據分析</p>
                            <li>關注市場價格變化</li>
                            <li>廣告費用評估及投放 </li>
                            <li>與營銷團隊協調，發現問題並解決問題</li>
                            <li>網路平台維運</li>
                          </table>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>MOMO富邦媒體科技 <span>2020/04-2020/09</span></h2>
                        <div className="table-responsive-md">
                          <table class="table">
                            <p>物流維運幹部<br></br>
                            </p>
                            <li>現場人員調度 </li>
                            <li>商品時效追蹤 </li>
                            <li>績效報表製作</li>
                          </table>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>海外工作(澳洲) <span>2012/04-2019/12</span></h2>
                        <div className="table-responsive-md">
                          <table class="table">
                            <p>特殊機械操作
                            </p>
                            <li>現場人員調度 </li>
                            <li>運輸安排</li>
                            <li>績效報表製作</li>
                          </table>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>欣亞數位股份有限公司 <span>2008/04-2012/04</span></h2>
                        <div className="table-responsive-md">
                          <table class="table">
                            <p>門市店長
                            </p>
                            <li>制定行銷企劃及數據統計 </li>
                            <li>人員教育訓練</li>
                            <li>KPI制定， 企業關係維護</li>
                          </table>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>最高學歷 澳洲霍姆雷斯學院<span>2016/10 - 2017/10</span></h2>
                        <p>Diploma of IT</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>次要學歷 正修科技大學<span>2004/09 - 2006/09</span></h2>
                        <p>國際企業暨管理學系</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
