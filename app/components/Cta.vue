<template>
    <div class="hero bg-accent p-2 lg:p-24">
        <div class="hero-content accent-accent-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Ready to Join the Next Game?</h1>
                <p class="py-6">
                    Connect with fellow gamers, RSVP to upcoming events, and become part of Melbourne's vibrant gaming community.
                </p>
                    <a class="btn btn-primary my-6" :href="`https://discord.com/invite/${ DISCORD_INVITE_CODE}`" target="_blank">Join One-Shot Games</a>
                <p>Free to join • Instant access • Reserve your spot</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const DISCORD_INVITE_CODE = import.meta.env.VITE_DISCORD_INVITE_CODE;
</script>