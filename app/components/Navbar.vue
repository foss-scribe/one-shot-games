<template>
    <div class="navbar bg-base-100 shadow-sm px-2">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href="#events">Events</a></li>
                    <li><a href="#discord">Discord</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a :href="`https://discord.com/invite/${ DISCORD_INVITE_CODE}`" target="_blank">Join One-Shot Wonders</a></li>
                </ul>
            </div>
             <img src="/assets/images/osg-logo.png" alt="One-Shot Wonders Logo" class="h-10 w-10 rounded-full mr-2">
        </div>

        <div class="navbar-end hidden lg:flex">
            <ul tabindex="0" class="menu menu-horizontal bg-base-100 rounded-box z-1 mt">
                <li><a href="#events">Events</a></li>
                <li><a href="#discord">Discord</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <a class="btn btn-primary" :href="`https://discord.com/invite/${ DISCORD_INVITE_CODE}`" target="_blank">Join One-Shot Wonders</a>
            <ThemeSwitcher />
        </div>
    </div>
</template>
<script setup>
const DISCORD_INVITE_CODE = import.meta.env.VITE_DISCORD_INVITE_CODE;
</script>