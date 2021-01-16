<template>
    <div id="header">
        <b-navbar type = "dark" variant = "dark">
            <a href="/" class="navbar-brand">DRF Sample Test</a>
            <b-navbar-nav class="mi-auto" v-if="$route.meta.requiresAuth">
                <b-nav-item-dropdown right v-if="isLoggedIn">
                    <template slot="button-content">{{ username }}</template>
                    <b-dropdown-item href = "#" @click="clickLogout">ログアウト</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href = "#" @click="clickLogin">ログイン</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>