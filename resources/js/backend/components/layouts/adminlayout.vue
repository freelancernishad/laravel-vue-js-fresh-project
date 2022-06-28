<template>
    <div id="wrapper" class="wrapper bg-ash"
        :class="{ 'sidebar-collapsed': sidebarstatus, 'sidebar-collapsed-mobile': mobileSidebar }">
        <!-- Header Menu Area Start Here -->
        <div class="navbar navbar-expand-md header-menu-one bg-light">
            <div class="nav-bar-header-one">
                <div class="header-logo">
                    <a href="index.html">
                        <img :src="$asseturl + 'dashboard_asset/img/logo.png'" alt="logo">
                    </a>
                </div>
                <div class="toggle-button sidebar-toggle">
                    <button type="button" class="item-link" @click="sidebarstatus = !sidebarstatus">
                        <span class="btn-icon-wrap">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>
            <div class="d-md-none mobile-nav-bar">
                <button class="navbar-toggler pulse-animation" type="button" data-toggle="collapse"
                    data-target="#mobile-navbar" aria-expanded="false">
                    <i class="far fa-arrow-alt-circle-down"></i>
                </button>
                <button type="button" class="navbar-toggler sidebar-toggle-mobile"
                    @click="mobileSidebar = !mobileSidebar">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <div class="header-main-menu collapse navbar-collapse" id="mobile-navbar">
                <ul class="navbar-nav">
                    <li class="navbar-item header-search-bar">
                        <div class="input-group stylish-input-group">
                            <span class="input-group-addon">
                                <button type="submit">
                                    <!-- <span class="flaticon-search" aria-hidden="true"></span> -->
                                </button>
                            </span>
                            <!-- <input type="text" class="form-control" placeholder="Find Something . . ."> -->
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="navbar-item dropdown header-admin">
                        <a class="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">
                            <div class="admin-title">
                                <h5 class="item-title">{{ $localStorage.getItem('user') }}</h5>
                                <span>{{ $localStorage.getItem('role') }}</span>
                            </div>
                            <div class="admin-img">
                                <img :src="$asseturl + 'dashboard_asset/img/figure/admin.jpg'" alt="Admin">
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="item-header">
                                <h6 class="item-title">{{ $localStorage.getItem('user') }}</h6>
                            </div>
                            <div class="item-content">
                                <ul class="settings-list">
                                    <li>
                                        <router-link class="dropdown-item" :to="{name:'logout'}">
                                            <i class="flaticon-turn-off"></i> Logout
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Header Menu Area End Here -->
        <!-- Page Area Start Here -->
        <div class="dashboard-page-one">
            <!-- Sidebar Area Start Here -->
            <div class="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
                <div class="mobile-sidebar-header d-md-none">
                    <div class="header-logo">
                        <a href="/"><img src="" alt="logo"></a>
                    </div>
                </div>
                <div class="sidebar-menu-content" id="dashboardheight">
                    <ul class="nav nav-sidebar-menu sidebar-toggle-view navBar">
                        <li class="nav-item" @click="submenu(0)">
                            <router-link to="/" class="nav-link"><i
                                    class="flaticon-dashboard"></i><span>Dashboard</span></router-link>
                        </li>
                        <li class="nav-item" @click="submenu(0)">
                            <router-link class="nav-link" to="/register"><i class="flaticon-dashboard"></i><span>Add
                                    Salary</span></router-link>
                        </li>
                        <li class="nav-item sidebar-nav-item" :class="{ active: selected == 1 }">
                            <a href="javascript:void(0)" class="nav-link" @click="submenu(1)" ref="Acconunt"><i
                                    class="flaticon-technological"></i><span>Acconunt</span></a>
                            <transition name="slide">
                                <ul class="nav sub-group-menu menu-open child" v-if="selected == 1"
                                    style="display:block">
                                    <li class="nav-item">
                                        <router-link to="/school/payment" class="nav-link"><i
                                                class="fas fa-angle-right"></i> Payments</router-link>
                                    </li>
                                </ul>
                            </transition>
                        </li>

                        <li class="nav-item sidebar-nav-item" :class="{ active: selected == 2 }">
                            <a href="#" class="nav-link" @click="submenu(2)" ref="Acconunt2"><i
                                    class="flaticon-technological"></i><span>Acconunt2</span></a>
                            <transition name="slide">
                                <ul class="nav sub-group-menu menu-open child" v-if="selected == 2"
                                    style="display:block">
                                    <li class="nav-item">
                                        <router-link to="/school/payment" class="nav-link"><i
                                                class="fas fa-angle-right"></i> Payments</router-link>
                                    </li>
                                </ul>
                            </transition>
                        </li>

                

                    </ul>
                </div>
            </div>
            <!-- Sidebar Area End Here -->
            <div class="dashboard-content-one">
                <slot></slot>
                <!-- Footer Area Start Here -->
                <footer class="footer-wrap-layout1">
                    <div class="copyright">© Copyrights <a href="#">akkhor</a> 2019. All rights reserved. Designed by <a
                            href="#">PsdBosS</a></div>
                </footer>
                <!-- Footer Area End Here -->
            </div>
        </div>
        <!-- Page Area End Here -->
    </div>
</template>
<script>
export default {
    created() {
        if (localStorage.getItem('selectedMenu')) {
            this.selected = localStorage.getItem('selectedMenu')
        }
        window.addEventListener("resize", this.myEventHandler);

    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    data() {
        return {
            selected: 0,
            sidebarstatus: false,
            mobileSidebar: false,
        }
    },
    methods: {
        myEventHandler() {
            if (window.innerWidth > 768) {
                this.sidebarstatus = false
            } else {
                this.mobileSidebar = false
            }


            // var index = 1
            // if(localStorage.getItem('role')=='admin' || localStorage.getItem('role')=='teacher'){
            //     index= 0
            // }
                var clientHeight = document.getElementsByClassName('navBar')[0].clientHeight;
                        // console.log('menu height:',clientHeight)
                        // console.log('window height:',window.innerHeight )
            var menuheight = 0
            if(clientHeight<window.innerHeight){
                menuheight= window.innerHeight
            }else{
                menuheight= '100%'
            }
            document.getElementById('wrapper').style.height = menuheight +'px';
            document.getElementById('dashboardheight').style.height = menuheight +'px';










        },
        submenu(ref) {
            console.log(ref)
            if (this.selected > 0) {
                if (ref == this.selected) {
                    this.selected = 0
                    localStorage.setItem('selectedMenu', 0)
                } else {
                    this.selected = ref
                    localStorage.setItem('selectedMenu', ref)
                }
            } else {
                this.selected = ref
                localStorage.setItem('selectedMenu', ref)
            }
        }
    },
    mounted() {
        this.myEventHandler();
    }
}
</script>
<style>
ul.nav.sub-group-menu.menu-open.child {
    padding: 0 !important;
}
ul.nav.sub-group-menu.menu-open.child li {
    padding: 10px 0;
}
.slide-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}
.slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
.slide-enter-to,
.slide-leave {
    max-height: 100px;
    overflow: hidden;
}
.slide-enter,
.slide-leave-to {
    overflow: hidden;
    max-height: 0;
}
</style>
