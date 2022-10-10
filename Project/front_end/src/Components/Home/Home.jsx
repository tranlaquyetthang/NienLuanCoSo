function Home(props) {
  return (
          <div>
            <div id="content" className="site-content" tabIndex={-1}>
              <div className="container">
                <div id="primary" className="content-area">
                  <main id="main" className="site-main">
                    <div className="home-v1-slider">
                      {/* ========================================== SECTION – HERO : END========================================= */}
                      <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
                        <div className="item" style={{backgroundImage: 'url(assets/images/slider/banner-2.jpg)'}}>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-offset-3 col-md-5">
                                <div className="caption vertical-center text-left">
                                  <div className="hero-1 fadeInDown-1">
                                    The New <br /> Standard
                                  </div>
                                  <div className="hero-subtitle fadeInDown-2">
                                    under favorable smartwatches
                                  </div>
                                  <div className="hero-v2-price fadeInDown-3">
                                    from <br /><span>$749</span>
                                  </div>
                                  <div className="hero-action-btn fadeInDown-4">
                                    <a href="single-product.html" className="big le-button ">Start Buying</a>
                                  </div>
                                </div>{/* /.caption */}
                              </div>
                            </div>
                          </div>{/* /.container */}
                        </div>{/* /.item */}
                        <div className="item" style={{backgroundImage: 'url(assets/images/slider/banner-1.jpg)'}}>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-offset-3 col-md-5">
                                <div className="caption vertical-center text-left">
                                  <div className="hero-subtitle-v2 fadeInDown-1">
                                    shop to get what you loves
                                  </div>
                                  <div className="hero-2 fadeInDown-2">
                                    Timepieces that make a statement up to <strong>40% Off</strong>
                                  </div>
                                  <div className="hero-action-btn fadeInDown-3">
                                    <a href="single-product.html" className="big le-button ">Start Buying</a>
                                  </div>
                                </div>{/* /.caption */}
                              </div>
                            </div>
                          </div>{/* /.container */}
                        </div>{/* /.item */}
                        <div className="item" style={{backgroundImage: 'url(assets/images/slider/banner-3.jpg)'}}>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-offset-3 col-md-5">
                                <div className="caption vertical-center text-left">
                                  <div className="hero-subtitle-v2 fadeInLeft-1">
                                    shop to get what you loves
                                  </div>
                                  <div className="hero-2 fadeInRight-1">
                                    Timepieces that make a statement up to <strong>40% Off</strong>
                                  </div>
                                  <div className="hero-action-btn fadeInLeft-2">
                                    <a href="single-product.html" className="big le-button ">Start Buying</a>
                                  </div>
                                </div>{/* /.caption */}
                              </div>
                            </div>
                          </div>{/* /.container */}
                        </div>{/* /.item */}
                      </div>{/* /.owl-carousel */}
                      {/* ========================================= SECTION – HERO : END ========================================= */}
                    </div>{/* /.home-v1-slider */}
                    <div className="home-v1-ads-block animate-in-view fadeIn animated" data-animation="fadeIn">
                      <div className="ads-block row">
                        <div className="ad col-xs-12 col-sm-4">
                          <div className="media">
                            <div className="media-left media-middle">
                              <img data-echo="assets/images/banner/cameras.jpg" src="assets/images/blank.gif" alt="" />
                            </div>
                            <div className="media-body media-middle">
                              <div className="ad-text">
                                Catch Big <br /><strong>Deals</strong> on the <br />Cameras
                              </div>
                              <div className="ad-action">
                                <a href="#">Shop now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ad col-xs-12 col-sm-4">
                          <div className="media">
                            <div className="media-left media-middle">
                              <img data-echo="assets/images/banner/MobileDevicesv2-2.jpg" src="assets/images/blank.gif" alt="" />
                            </div>
                            <div className="media-body media-middle">
                              <div className="ad-text">
                                Tablets,<br /> Smartphones<br /> <strong>and more</strong>
                              </div>
                              <div className="ad-action">
                                <a href="#"><span className="upto"><span className="prefix">Upto</span><span className="value">70</span><span className="suffix" /></span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ad col-xs-12 col-sm-4">
                          <div className="media">
                            <div className="media-left media-middle">
                              <img data-echo="assets/images/banner/DesktopPC.jpg" src="assets/images/blank.gif" alt="" />
                            </div>
                            <div className="media-body media-middle">
                              <div className="ad-text">
                                Shop the <br /><strong>Hottest</strong><br /> Products
                              </div>
                              <div className="ad-action">
                                <a href="#">Shop now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-v1-deals-and-tabs deals-and-tabs row animate-in-view fadeIn animated" data-animation="fadeIn">
                      <div className="deals-block col-lg-4">
                        <section className="section-onsale-product">
                          <header>
                            <h2 className="h1">Special Offer</h2>
                            <div className="savings">
                              <span className="savings-text">Save <span className="amount">$20.00</span></span>
                            </div>
                          </header>{/* /header */}
                          <div className="onsale-products">
                            <div className="onsale-product">
                              <a href="shop.html">
                                <div className="product-thumbnail">
                                  <img className="wp-post-image" data-echo="assets/images/onsale-product.jpg" src="assets/images/blank.gif" alt="" /></div>
                                <h3>Game Console Controller <br />+ USB 3.0 Cable</h3>
                              </a>
                              <span className="price">
                                <span className="electro-price">
                                  <ins><span className="amount">$79.00</span></ins>
                                  <del><span className="amount">$99.00</span></del>
                                </span>
                              </span>{/* /.price */}
                              <div className="deal-progress">
                                <div className="deal-stock">
                                  <span className="stock-sold">Already Sold: <strong>2</strong></span>
                                  <span className="stock-available">Available: <strong>26</strong></span>
                                </div>
                                <div className="progress">
                                  <span className="progress-bar" style={{width: '8%'}}>8</span>
                                </div>
                              </div>{/* /.deal-progress */}
                              <div className="deal-countdown-timer">
                                <div className="marketing-text text-xs-center">Hurry Up! Offer ends in:	</div>
                                <div id="deal-countdown" className="countdown">
                                  <span data-value={0} className="days"><span className="value">0</span><b>Days</b></span>
                                  <span className="hours"><span className="value">7</span><b>Hours</b></span>
                                  <span className="minutes"><span className="value">29</span><b>Mins</b></span>
                                  <span className="seconds"><span className="value">13</span><b>Secs</b></span>
                                </div>
                                <span className="deal-end-date" style={{display: 'none'}}>2016-12-31</span>
                              </div>{/* /.deal-countdown-timer */}
                            </div>{/* /.onsale-product */}
                          </div>{/* /.onsale-products */}
                        </section>{/* /.section-onsale-product */}
                      </div>{/* /.col */}
                      <div className="tabs-block col-lg-8">
                        <div className="products-carousel-tabs">
                          <ul className="nav nav-inline">
                            <li className="nav-item"><a className="nav-link active" href="#tab-products-1" data-toggle="tab">Featured</a></li>
                            <li className="nav-item"><a className="nav-link" href="#tab-products-2" data-toggle="tab">On Sale</a></li>
                            <li className="nav-item"><a className="nav-link" href="#tab-products-3" data-toggle="tab">Top Rated</a></li>
                          </ul>
                          <div className="tab-content">
                            <div className="tab-pane active" id="tab-products-1" role="tabpanel">
                              <div className="woocommerce columns-3">
                                <ul className="products columns-3">
                                  <li className="product first">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Audio Speakers</a></span>
                                        <a href="single-product.html">
                                          <h3>Wireless Audio System Multiroom 360</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/1.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> $1,999.00</span></ins>
                                              <del><span className="amount">$2,299.00</span></del>
                                              <span className="amount"> </span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                  <li className="product ">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Laptops</a></span>
                                        <a href="single-product.html">
                                          <h3>Tablet Red EliteBook  Revolve 810 G2</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/2.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> $1,999.00</span></ins>
                                              <del><span className="amount">$2,299.00</span></del>
                                              <span className="amount"> </span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                  <li className="product last">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Headphones</a></span>
                                        <a href="single-product.html">
                                          <h3>White Solo 2 Wireless</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/3.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> </span></ins>
                                              <span className="amount"> $1,999.00</span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                  <li className="product first">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                        <a href="single-product.html">
                                          <h3>Smartphone 6S 32GB LTE</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/4.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> $1,215.00</span></ins>
                                              <del><span className="amount">$2,215.00</span></del>
                                              <span className="amount"> </span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                  <li className="product ">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Cameras</a></span>
                                        <a href="single-product.html">
                                          <h3>Purple NX Mini F1 aparat  SMART NX</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/5.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> </span></ins>
                                              <span className="amount"> $1,999.00</span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                  <li className="product last">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Printers</a></span>
                                        <a href="single-product.html">
                                          <h3>Full Color LaserJet Pro  M452dn</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/6.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> </span></ins>
                                              <span className="amount"> $1,999.00</span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                </ul>
                              </div>
                            </div>
                            <div className="tab-pane" id="tab-products-2" role="tabpanel">
                              <div className="woocommerce columns-3">
                                <ul className="products columns-3">
                                  <li className="product first">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                        <a href="single-product.html">
                                          <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                          <div className="product-thumbnail">
                                            <img data-echo="assets/images/products/3.jpg" src="assets/images/blank.gif" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount">$1,999.00</span></ins>
                                              <del><span className="amount">$2,299.00</span></del>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist">
                                              Wishlist</a>
                                            <a href="#" className="add-to-compare-link">Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>
                                  <li className="product ">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                        <a href="single-product.html">
                                          <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                          <div className="product-thumbnail">
                                            <img data-echo="assets/images/products/5.jpg" src="assets/images/blank.gif" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount">$1,999.00</span></ins>
                                              <del><span className="amount">$2,299.00</span></del>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist">
                                              Wishlist</a>
                                            <a href="#" className="add-to-compare-link">Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>
                                  <li className="product last">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                        <a href="single-product.html">
                                          <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                          <div className="product-thumbnail">
                                            <img data-echo="assets/images/products/4.jpg" src="assets/images/blank.gif" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount">$1,999.00</span></ins>
                                              <del><span className="amount">$2,299.00</span></del>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist">
                                              Wishlist</a>
                                            <a href="#" className="add-to-compare-link">Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>
                                  <li className="product first">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                        <a href="single-product.html">
                                          <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                          <div className="product-thumbnail">
                                            <img data-echo="assets/images/products/1.jpg" src="assets/images/blank.gif" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount">$1,999.00</span></ins>
                                              <del><span className="amount">$2,299.00</span></del>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist">
                                              Wishlist</a>
                                            <a href="#" className="add-to-compare-link">Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>
                                  <li className="product ">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                        <a href="single-product.html">
                                          <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                          <div className="product-thumbnail">
                                            <img data-echo="assets/images/products/6.jpg" src="assets/images/blank.gif" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount">$1,999.00</span></ins>
                                              <del><span className="amount">$2,299.00</span></del>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist">
                                              Wishlist</a>
                                            <a href="#" className="add-to-compare-link">Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>
                                  <li className="product last">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                        <a href="single-product.html">
                                          <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                          <div className="product-thumbnail">
                                            <img data-echo="assets/images/products/2.jpg" src="assets/images/blank.gif" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount">$1,999.00</span></ins>
                                              <del><span className="amount">$2,299.00</span></del>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist">
                                              Wishlist</a>
                                            <a href="#" className="add-to-compare-link">Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="tab-pane" id="tab-products-3" role="tabpanel">
                              <div className="woocommerce columns-3">
                                <ul className="products columns-3">
                                  <li className="product first">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Audio Speakers</a></span>
                                        <a href="single-product.html">
                                          <h3>Wireless Audio System Multiroom 360</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/1.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> $1,999.00</span></ins>
                                              <del><span className="amount">$2,299.00</span></del>
                                              <span className="amount"> </span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                  <li className="product ">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Laptops</a></span>
                                        <a href="single-product.html">
                                          <h3>Tablet Red EliteBook  Revolve 810 G2</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/2.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> $1,999.00</span></ins>
                                              <del><span className="amount">$2,299.00</span></del>
                                              <span className="amount"> </span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                  <li className="product last">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Headphones</a></span>
                                        <a href="single-product.html">
                                          <h3>White Solo 2 Wireless</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/3.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> </span></ins>
                                              <span className="amount"> $1,999.00</span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                  <li className="product first">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                        <a href="single-product.html">
                                          <h3>Smartphone 6S 32GB LTE</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/4.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> $1,215.00</span></ins>
                                              <del><span className="amount">$2,215.00</span></del>
                                              <span className="amount"> </span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                  <li className="product ">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Cameras</a></span>
                                        <a href="single-product.html">
                                          <h3>Purple NX Mini F1 aparat  SMART NX</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/5.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> </span></ins>
                                              <span className="amount"> $1,999.00</span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                  <li className="product last">
                                    <div className="product-outer">
                                      <div className="product-inner">
                                        <span className="loop-product-categories"><a href="product-category.html" rel="tag">Printers</a></span>
                                        <a href="single-product.html">
                                          <h3>Full Color LaserJet Pro  M452dn</h3>
                                          <div className="product-thumbnail">
                                            <img src="assets/images/blank.gif" data-echo="assets/images/products/6.jpg" className="img-responsive" alt="" />
                                          </div>
                                        </a>
                                        <div className="price-add-to-cart">
                                          <span className="price">
                                            <span className="electro-price">
                                              <ins><span className="amount"> </span></ins>
                                              <span className="amount"> $1,999.00</span>
                                            </span>
                                          </span>
                                          <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                        </div>{/* /.price-add-to-cart */}
                                        <div className="hover-area">
                                          <div className="action-buttons">
                                            <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                            <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                          </div>
                                        </div>
                                      </div>{/* /.product-inner */}
                                    </div>{/* /.product-outer */}
                                  </li>{/* /.products */}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{/* /.tabs-block */}
                    </div>{/* /.deals-and-tabs */}
                    {/* ============================================================= 2-1-2 Product Grid ============================================================= */}
                    <section className="products-2-1-2 animate-in-view fadeIn animated" data-animation="fadeIn">
                      <h2 className="sr-only">Products Grid</h2>
                      <div className="container">
                        <ul className="nav nav-inline nav-justified">
                          <li className="nav-item"><a href="shop.html" className="active nav-link">Best Deals</a></li>
                          <li className="nav-item"><a className="nav-link" href="shop.html">TV &amp; Audio</a></li>
                          <li className="nav-item"><a className="nav-link" href="shop.html">Cameras</a></li>
                          <li className="nav-item"><a className="nav-link" href="shop.html">Audio</a></li>
                          <li className="nav-item"><a className="nav-link" href="shop.html">Smartphones</a></li>
                          <li className="nav-item"><a className="nav-link" href="shop.html">GPS &amp; Navi</a></li>
                          <li className="nav-item"><a className="nav-link" href="shop.html">Computers</a></li>
                          <li className="nav-item"><a className="nav-link" href="shop.html">Portable Audio</a></li>
                          <li className="nav-item"><a className="nav-link" href="shop.html">Accessories</a></li>
                        </ul>
                        <div className="columns-2-1-2">
                          <ul className="products exclude-auto-height">
                            <li className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                    <div className="product-thumbnail">
                                      <img data-echo="assets/images/product-2-1-2/1.jpg" src="assets/images/blank.gif" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount">$1,999.00</span></ins>
                                        <del><span className="amount">$2,299.00</span></del>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist">
                                        Wishlist</a>
                                      <a href="#" className="add-to-compare-link">Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>
                            <li className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                    <div className="product-thumbnail">
                                      <img data-echo="assets/images/product-2-1-2/4.jpg" src="assets/images/blank.gif" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount">$1,999.00</span></ins>
                                        <del><span className="amount">$2,299.00</span></del>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist">
                                        Wishlist</a>
                                      <a href="#" className="add-to-compare-link">Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>
                          </ul>
                          <ul className="products exclude-auto-height product-main-2-1-2">
                            <li className="last product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                    <div className="product-thumbnail">
                                      <img className="wp-post-image" data-echo="assets/images/product-2-1-2/main.jpg" src="assets/images/blank.gif" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount">$1,999.00</span></ins>
                                        <del><span className="amount">$2,299.00</span></del>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist">
                                        Wishlist</a>
                                      <a href="#" className="add-to-compare-link">Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>
                          </ul>
                          <ul className="products exclude-auto-height">
                            <li className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                    <div className="product-thumbnail">
                                      <img className="wp-post-image" data-echo="assets/images/product-2-1-2/1.jpg" src="assets/images/blank.gif" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount">$1,999.00</span></ins>
                                        <del><span className="amount">$2,299.00</span></del>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist">
                                        Wishlist</a>
                                      <a href="#" className="add-to-compare-link">Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>
                            <li className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                    <div className="product-thumbnail">
                                      <img className="wp-post-image" data-echo="assets/images/product-2-1-2/4.jpg" src="assets/images/blank.gif" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount">$1,999.00</span></ins>
                                        <del><span className="amount">$2,299.00</span></del>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist">
                                        Wishlist</a>
                                      <a href="#" className="add-to-compare-link">Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    {/* ============================================================= 2-1-2 Product Grid : End============================================================= */}
                    <section className="section-product-cards-carousel animate-in-view fadeIn animated" data-animation="fadeIn">
                      <header>
                        <h2 className="h1">Best Sellers</h2>
                        <ul className="nav nav-inline">
                          <li className="nav-item active"><span className="nav-link">Top 20</span></li>
                          <li className="nav-item"><a className="nav-link" href="product-category.html">Smart Phones &amp; Tablets</a></li>
                          <li className="nav-item"><a className="nav-link" href="product-category.html">Laptops &amp; Computers</a></li>
                          <li className="nav-item"><a className="nav-link" href="product-category.html">Video Cameras</a></li>
                        </ul>
                      </header>
                      <div id="home-v1-product-cards-careousel">
                        <div className="woocommerce columns-3 home-v1-product-cards-carousel product-cards-carousel owl-carousel">
                          <ul className="products columns-3">
                            <li className="product product-card first">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="media-object wp-post-image img-responsive" src="assets/images/blank.gif" data-echo="assets/images/product-cards/4.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">TVs</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>Widescreen 4K SUHD TV</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> </span></ins>
                                          <span className="amount"> $800</span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                            <li className="product product-card ">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="media-object wp-post-image img-responsive" src="assets/images/blank.gif" data-echo="assets/images/product-cards/6.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">Peripherals</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>External SSD USB 3.1  750 GB</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> </span></ins>
                                          <span className="amount"> $600</span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                            <li className="product product-card last">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="media-object wp-post-image img-responsive" src="assets/images/blank.gif" data-echo="assets/images/product-cards/5.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">Printers</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>Full Color LaserJet Pro  M452dn</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> $3,788.00</span></ins>
                                          <del><span className="amount">$4,780.00</span></del>
                                          <span className="amount"> </span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                            <li className="product product-card first">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="img-responsive media-object wp-post-image" src="assets/images/blank.gif" data-echo="assets/images/product-cards/1.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">Smartphones</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>Notebook Purple G752VT-T7008T</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> $3,788.00</span></ins>
                                          <del><span className="amount">$4,780.00</span></del>
                                          <span className="amount"> </span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                            <li className="product product-card ">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="img-responsive media-object wp-post-image" src="assets/images/blank.gif" data-echo="assets/images/product-cards/3.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">Headphone Cases</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>Universal Headphones Case in Black</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> $3,788.00</span></ins>
                                          <del><span className="amount">$4,780.00</span></del>
                                          <span className="amount"> </span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                            <li className="product product-card last">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="img-responsive media-object wp-post-image" src="assets/images/blank.gif" data-echo="assets/images/product-cards/2.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">Smartphones</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>Tablet Thin EliteBook  Revolve 810 G6</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> </span></ins>
                                          <span className="amount"> $500</span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                          </ul>
                          <ul className="products columns-3">
                            <li className="product product-card first">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="img-responsive media-object wp-post-image" src="assets/images/blank.gif" data-echo="assets/images/product-cards/2.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">Headphone Cases</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>Universal Headphones Case in Black</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> </span></ins>
                                          <span className="amount"> $1500</span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                            <li className="product product-card ">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="img-responsive media-object wp-post-image" src="assets/images/blank.gif" data-echo="assets/images/product-cards/5.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">Printers</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>Full Color LaserJet Pro  M452dn</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> </span></ins>
                                          <span className="amount"> $500</span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                            <li className="product product-card last">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="img-responsive media-object wp-post-image" src="assets/images/blank.gif" data-echo="assets/images/product-cards/4.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">TVs</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>Widescreen 4K SUHD TV</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> </span></ins>
                                          <span className="amount"> $400</span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                            <li className="product product-card first">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="img-responsive media-object wp-post-image" src="assets/images/blank.gif" data-echo="assets/images/product-cards/3.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">Smartphones</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>Notebook Purple G752VT-T7008T</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> $3,788.00</span></ins>
                                          <del><span className="amount">$4,780.00</span></del>
                                          <span className="amount"> </span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                            <li className="product product-card ">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="img-responsive media-object wp-post-image" src="assets/images/blank.gif" data-echo="assets/images/product-cards/6.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">Peripherals</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>External SSD USB 3.1  750 GB</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> $3,788.00</span></ins>
                                          <del><span className="amount">$4,780.00</span></del>
                                          <span className="amount"> </span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                            <li className="product product-card last">
                              <div className="product-outer">
                                <div className="media product-inner">
                                  <a className="media-left" href="single-product.html" title="Pendrive USB 3.0 Flash 64 GB">
                                    <img className="img-responsive media-object wp-post-image" src="assets/images/blank.gif" data-echo="assets/images/product-cards/1.jpg" alt="" />
                                  </a>
                                  <div className="media-body">
                                    <span className="loop-product-categories">
                                      <a href="product-category.html" rel="tag">Smartphones</a>
                                    </span>
                                    <a href="single-product.html">
                                      <h3>Tablet Thin EliteBook  Revolve 810 G6</h3>
                                    </a>
                                    <div className="price-add-to-cart">
                                      <span className="price">
                                        <span className="electro-price">
                                          <ins><span className="amount"> $3,788.00</span></ins>
                                          <del><span className="amount">$4,780.00</span></del>
                                          <span className="amount"> </span>
                                        </span>
                                      </span>
                                      <a href="cart.html" className="button add_to_cart_button">Add to cart</a>
                                    </div>{/* /.price-add-to-cart */}
                                    <div className="hover-area">
                                      <div className="action-buttons">
                                        <a href="#" className="add_to_wishlist">Wishlist</a>
                                        <a href="#" className="add-to-compare-link">Compare</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </li>{/* /.products */}
                          </ul>
                        </div>
                      </div>{/* #home-v1-product-cards-careousel */}
                    </section>
                    <div className="home-v1-banner-block animate-in-view fadeIn animated" data-animation="fadeIn">
                      <div className="home-v1-fullbanner-ad fullbanner-ad" style={{marginBottom: '70px'}}>
                        <a href="#"><img src="assets/images/blank.gif" data-echo="assets/images/banner/home-v1-banner.png" className="img-responsive" alt="" /></a>
                      </div>
                    </div>{/* /.home-v1-banner-block */}
                    <section className="home-v1-recently-viewed-products-carousel section-products-carousel animate-in-view fadeIn animated" data-animation="fadeIn">
                      <header>
                        <h2 className="h1">Recently Added</h2>
                        <div className="owl-nav">
                          <a href="#products-carousel-prev" data-target="#recently-added-products-carousel" className="slider-prev"><i className="fa fa-angle-left" /></a>
                          <a href="#products-carousel-next" data-target="#recently-added-products-carousel" className="slider-next"><i className="fa fa-angle-right" /></a>
                        </div>
                      </header>
                      <div id="recently-added-products-carousel">
                        <div className="woocommerce columns-6">
                          <div className="products owl-carousel recently-added-products products-carousel columns-6">
                            <div className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Tablet Thin EliteBook  Revolve 810 G6</h3>
                                    <div className="product-thumbnail">
                                      <img src="assets/images/blank.gif" data-echo="assets/images/product-category/2.jpg" className="img-responsive" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount"> $1,999.00</span></ins>
                                        <del><span className="amount">$2,299.00</span></del>
                                        <span className="amount"> </span>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                      <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </div>{/* /.products */}
                            <div className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Notebook Purple G952VX-T7008T</h3>
                                    <div className="product-thumbnail">
                                      <img src="assets/images/blank.gif" data-echo="assets/images/product-category/3.jpg" className="img-responsive" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount"> </span></ins>
                                        <span className="amount"> $1,999.00</span>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                      <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </div>{/* /.products */}
                            <div className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                    <div className="product-thumbnail">
                                      <img src="assets/images/blank.gif" data-echo="assets/images/product-category/1.jpg" className="img-responsive" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount"> </span></ins>
                                        <span className="amount"> $1,999.00</span>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                      <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </div>{/* /.products */}
                            <div className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Tablet Thin EliteBook  Revolve 810 G6</h3>
                                    <div className="product-thumbnail">
                                      <img src="assets/images/blank.gif" data-echo="assets/images/product-category/2.jpg" className="img-responsive" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount"> </span></ins>
                                        <span className="amount"> $1,999.00</span>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                      <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </div>{/* /.products */}
                            <div className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Laptop Yoga 21 80JH0035GE  W8.1 (Copy)</h3>
                                    <div className="product-thumbnail">
                                      <img src="assets/images/blank.gif" data-echo="assets/images/product-category/5.jpg" className="img-responsive" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount"> </span></ins>
                                        <span className="amount"> $1,999.00</span>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                      <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </div>{/* /.products */}
                            <div className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Notebook Purple G952VX-T7008T</h3>
                                    <div className="product-thumbnail">
                                      <img src="assets/images/blank.gif" data-echo="assets/images/product-category/4.jpg" className="img-responsive" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount"> </span></ins>
                                        <span className="amount"> $1,999.00</span>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                      <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </div>{/* /.products */}
                            <div className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Smartphone 6S 128GB LTE</h3>
                                    <div className="product-thumbnail">
                                      <img src="assets/images/blank.gif" data-echo="assets/images/product-category/6.jpg" className="img-responsive" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount"> </span></ins>
                                        <span className="amount"> $200.00</span>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                      <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </div>{/* /.products */}
                            <div className="product">
                              <div className="product-outer">
                                <div className="product-inner">
                                  <span className="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                  <a href="single-product.html">
                                    <h3>Notebook Widescreen Z51-70  40K6013UPB</h3>
                                    <div className="product-thumbnail">
                                      <img src="assets/images/blank.gif" data-echo="assets/images/product-category/3.jpg" className="img-responsive" alt="" />
                                    </div>
                                  </a>
                                  <div className="price-add-to-cart">
                                    <span className="price">
                                      <span className="electro-price">
                                        <ins><span className="amount"> $1,999.00</span></ins>
                                        <del><span className="amount">$2,299.00</span></del>
                                        <span className="amount"> </span>
                                      </span>
                                    </span>
                                    <a rel="nofollow" href="single-product.html" className="button add_to_cart_button">Add to cart</a>
                                  </div>{/* /.price-add-to-cart */}
                                  <div className="hover-area">
                                    <div className="action-buttons">
                                      <a href="#" rel="nofollow" className="add_to_wishlist"> Wishlist</a>
                                      <a href="compare.html" className="add-to-compare-link"> Compare</a>
                                    </div>
                                  </div>
                                </div>{/* /.product-inner */}
                              </div>{/* /.product-outer */}
                            </div>{/* /.products */}
                          </div>
                        </div>
                      </div>
                    </section>
                  </main>{/* #main */}
                </div>{/* #primary */}
              </div>{/* .container */}
            </div>{/* #content */}
            <section className="brands-carousel">
              <h2 className="sr-only">Brands Carousel</h2>
              <div className="container">
                <div id="owl-brands" className="owl-brands owl-carousel unicase-owl-carousel owl-outer-nav">
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>Acer</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/1.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>Apple</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/2.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>Asus</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/3.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>Dell</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/4.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>Gionee</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/5.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>HP</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/6.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>HTC</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/3.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>IBM</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/5.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>Lenova</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/2.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>LG</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/1.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>Micromax</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/6.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                  <div className="item">
                    <a href="#">
                      <figure>
                        <figcaption className="text-overlay">
                          <div className="info">
                            <h4>Microsoft</h4>
                          </div>{/* /.info */}
                        </figcaption>
                        <img src="assets/images/blank.gif" data-echo="assets/images/brands/4.png" className="img-responsive" alt="" />
                      </figure>
                    </a>
                  </div>{/* /.item */}
                </div>{/* /.owl-carousel */}
              </div>
            </section>
          </div>
  );
}

export default Home;
