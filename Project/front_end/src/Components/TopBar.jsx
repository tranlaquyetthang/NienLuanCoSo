import React from 'react';

function TopBar(props) {
    return (
        <div class="top-bar">
                <div class="container">
                    <nav>
                        <ul id="menu-top-bar-left" class="nav nav-inline pull-left animate-dropdown flip">
                            <li class="menu-item animate-dropdown"><a title="Welcome to Worldwide Electronics Store" href="#">Welcome to Worldwide Electronics Store</a></li>
                        </ul>
                    </nav>

                    <nav>
                        <ul id="menu-top-bar-right" class="nav nav-inline pull-right animate-dropdown flip">
                            <li class="menu-item animate-dropdown"><a title="Store Locator" href="#"><i class="ec ec-map-pointer"></i>Store Locator</a></li>
                            <li class="menu-item animate-dropdown"><a title="Track Your Order" href="track-your-order.html"><i class="ec ec-transport"></i>Track Your Order</a></li>
                            <li class="menu-item animate-dropdown"><a title="Shop" href="shop.html"><i class="ec ec-shopping-bag"></i>Shop</a></li>
                            <li class="menu-item animate-dropdown"><a title="My Account" href="my-account.html"><i class="ec ec-user"></i>My Account</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    );
}

export default TopBar;