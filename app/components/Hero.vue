<template>
    <div class="hero min-h-screen"
        style="background-image: url(https://img1.wsimg.com/isteam/getty/1744028379);">
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
            <div class="max-w-md">
                <h1 class="text-8xl font-bold py-12">One-Shot Wonders</h1>
                <p class="italic text-3xl">Play when you can, Run when you want.</p>
                    <p class="py-6">
                        Join our Northside Melbourne community for weekly one-shot roleplaying games. Free, friendly, and open to all.
                    </p>
                <div class="flex justify-center gap-4 py-6">
                        <a class="btn btn-primary" href="https://aftergame.app/groups/one-shot-wonders-2656"
                            target="_blank">Join on AfterGame</a>
                        <a href="#events" class="btn btn-primary">View Upcoming Events</a>
                    </div>
                    <p>Free to join • All skill levels welcome • New members encouraged!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchData } from '@/utils/discord_stats.js';

const stats = await fetchData('https://discord.com/api/invites/TrFcdswX?with_counts=true');
</script>
