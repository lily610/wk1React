import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
        <div id="char-section-header" className="char-section" />

        <div className="top-bar">
              <nav className="navbar navbar-expand-lg text-primary navbar-primary">
                  <div className="nav-link1">
                      <a className="nl nl1" href="https://hub.line.me/?utm_source=tv&utm_medium=hub_gnb" >主頁</a>
                      <a className="nl nl2" href="https://today.line.me/tw/v2/tab" >新聞</a>
                      <a className="nl nl3" href="#" >TV</a>
                      <a className="nl nl4" href="https://buy.line.me/?utm_source=tv&utm_medium=hub_gnb" >購物 </a>
                  </div>
                  <div className="navbar-brand ml-auto">
                          <a className="iconB" href="https://www.facebook.com/LINETV.taiwan/"><img src="img/ic_top_fb.png" alt="" ></img></a>
                          <a className="iconB" href="https://www.instagram.com/linetv.tw/"><img src="img/ic_top_ig.png" alt="" ></img></a>
                          <a className="iconB" href="https://www.youtube.com/channel/UCouTB9QM76no5cUdqmFZCOQ"><img src="img/ic_top_yt.png" alt="" /></a>
                  </div>
              </nav>
        </div>

        <div className="bottom-bar">
            <nav className="navbar navbar-expand-lg navbar-light" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item2 dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          分類</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">VIP</a>
                            <a className="dropdown-item" href="#">主題訂閱</a>
                            <a className="dropdown-item" href="#">連續劇</a>
                            <a className="dropdown-item" href="#">動漫</a>
                            <a className="dropdown-item" href="#">電影</a>
                            <a className="dropdown-item" href="#">綜藝</a>
                            <a className="dropdown-item" href="#">育樂</a>
                        </div>
                    </li>
                    <li className="nav-item2">
                      <a className="nav-link" href="https://www.linetv.tw/purchase?entrance=PC_NAVBAR&source=NAVBAR">升級</a>
                    </li>
                    <li className="nav-item2">
                      <a className="nav-link" href="https://www.linetv.tw/feed/campaign?source=NAVBAR">活動</a>
                    </li>
                    <li className="nav-item2 nlLogin">
                        <a className="nav-link" href="https://www.linetv.tw/feed/campaign?source=NAVBAR">登入/註冊</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a className="login" href="#">登入/註冊</a>
                </div>
            </nav>
        </div>


        <div className="banner">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="banner_1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item">
                  <a href="https://wetv.vip/zh-tw/play/gnwjazjgmg997xg"><img src="img/img_banner_1.jpg" className="d-block w-100" alt="..." ></img></a>
                </div>
                <div className="carousel-item active">
                  <img src="img/img_banner_2.jpg" className="d-block w-100" alt="..." ></img>
                </div>
                <div className="carousel-item">
                  <img src="img/img_banner_3.jpg" className="d-block w-100" alt="..." ></img>
                </div>
                <div className="carousel-item">
                  <img src="img/img_banner_4.jpg" className="d-block w-100" alt="..." ></img>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </div>


        <binge-watch>
        <div className="binge-watch" id="section1">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                        <p className="title">你正在追的</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-3 col-md-6">
                        <div className="bw bw1">
                            <div className="hover">
                                <img src="img/img_binge-watch_1.jpg" ></img>
                            </div>
                            <p className="bw_name text-left">法政先鋒III</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="bw bw2">
                            <div className="hover">
                                <img src="img/img_binge-watch_2.jpg" ></img>
                            </div>
                            <p className="bw_name text-left">陳情令</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="bw bw3">
                            <div className="hover">
                                <img src="img/img_binge-watch_3.png" ></img>
                            </div>
                            <p className="bw_name text-left">我的婆婆怎麼那麼可愛</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="bw bw4">
                            <div className="hover">
                                <img src="img/img_binge-watch_4.jpg" ></img>
                            </div>
                            <p className="bw_name text-left">GIVEN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </binge-watch>


        <ranks>
        <div className="ranks" id="section2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="title ">熱播排行榜</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-3 col-md-6">
                        <div className="card" >
                            <h5 className="card-header text-center" >1</h5>
                            <img className="card-img-top" src="img/img_rank_1.png" alt="Card image cap" ></img>
                            <div className="card-body" >
                              <p className="card-text text-center">我的婆婆怎麼那麼可愛</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card" >
                            <h5 className="card-header text-center" >2</h5>
                            <img className="card-img-top" src="img/img_rank_2.jpg" alt="Card image cap" ></img>
                            <div className="card-body" >
                              <p className="card-text text-center">我最漂亮的時候</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card" >
                            <h5 className="card-header text-center" >3</h5>
                            <img className="card-img-top" src="img/img_rank_3.jpg" alt="Card image cap" ></img>
                            <div className="card-body" >
                              <p className="card-text text-center">以家人之名</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card" >
                            <h5 className="card-header text-center" >4</h5>
                            <img className="card-img-top" src="img/img_rank_4.jpg" alt="Card image cap" ></img>
                            <div className="card-body" >
                              <p className="card-text text-center">三十而已</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ranks>


        <news>
            <div className="news" id="section3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="title ">娛樂快點報</p>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="card" >
                                <img className="card-img-top" src="img/img_news_1.jpg" alt="Card image cap" ></img>
                                <div className="card-body" >
                                  <div className="card-text text-left">人氣男女演員首度合作！！</div>
                                  <div className="ctTime text-left">2020年10月22日 14:00</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card" >
                                <img className="card-img-top" src="img/img_news_2.jpg" alt="Card image cap" ></img>
                                <div className="card-body" >
                                  <div className="card-text text-left">新番報到你必須知道</div>
                                  <div className="ctTime text-left">2020年10月22日 10:00</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card " >
                                <img className="card-img-top" src="img/img_news_3.jpg" alt="Card image cap" ></img>
                                <div className="card-body" >
                                    <div className="card-text text-left">今晚，想來點什麼劇？</div>
                                    <div className="ctTime text-left">2020年10月21日 20:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </news>


        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-3 col-6 text-left">
                        <p>關於我們</p>
                        <div className="fc"><a href="#" >加入我們<br/></a><a href="#" >聯絡我們</a></div>
                    </div>
                    <div className="col-xl-3 col-md-3 col-6 text-left">
                        <p>異業合作</p>
                        <div className="fc"><a href="#" >廣告業務<br/></a><a href="#" >平台合作</a></div>
                    </div>
                    <div className="col-xl-3 col-md-3 col-6 text-left">
                        <p className="esM">服務條款</p>
                        <div className="fc"><a href="#" >用戶服務<br/></a><a href="#" >服務隱私權政策<br/></a><a href="#" >付費服務<br/></a><a href="#">內容訂閱方案</a></div> 
                    </div>
                    <div className="col-xl-3 col-md-3 col-6 text-left">
                        <p className="esM">用戶幫助</p>
                        <div className="fc"><a href="#" >問題中心<br/></a><a href="#" >內容訂閱<br/></a><a href="#">訊息公告<br/></a><a href="#">聯絡客服</a></div>
                    </div>
                </div>
                    <hr className="lineF" ></hr>
                <div className="cr768 text-center">
                    Copyright©2020 PEIFAN Media Co. Ltd. ALL RIGHTS RESERVED.
                </div>
                <div className="cr360 text-center">
                    Copyright©2020 PEIFAN Media Inc.
                </div>
            </div>
        </footer>
        
    </div>
  );
}

export default App;
