<template>
    <div class="flex flex-col items-center md:items-start  md:flex-row gap-4 md:gap-20 p-6 lg:p-24 max-w-[1600px]">
        <div>
            <a name="about" />
            <h2 class="text-4xl mb-12">About One-Shot Wonders</h2>
            <div>We're a casual tabletop gaming group based in Melbourne's inner north. Every Thursday night from
                7-11pm, we run one-shot adventures - perfect for players who love roleplaying but can't commit to a
                long-term campaign.</div>

            <div class="flex flex-col gap-4 mt-6">
                <div class="flex gap-6">
                    <div class="p-2 text-4xl">
                        <svg width="40" height="40" viewBox="0 0 32 32" fill="currentColor">
                            <g>
                                <path
                                    d="M28.2,30h-4.3c-1,0-1.8-.8-1.8-1.8V5.8c0-1,.8-1.8,1.8-1.8h4.3c1,0,1.8.8,1.8,1.8v22.3c0,1-.8,1.8-1.8,1.8ZM24,28h4V6h-4v22ZM18.2,30h-4.3c-1,0-1.8-.8-1.8-1.8v-14.3c0-1,.8-1.8,1.8-1.8h4.3c1,0,1.8.8,1.8,1.8v14.3c0,1-.8,1.8-1.8,1.8ZM14,28h4v-14h-4v14ZM8.2,30H3.8c-1,0-1.8-.8-1.8-1.8v-8.3c0-1,.8-1.8,1.8-1.8h4.3c1,0,1.8.8,1.8,1.8v8.3c0,1-.8,1.8-1.8,1.8ZM4,28h4v-8h-4v8Z" />
                            </g>
                        </svg>
                    </div>
                    <div>
                        <div class="text-xl font-bold">All Skill Levels Welcome</div>
                        <div>From beginners to veterans, everyone finds their place in One-Shot Wonders.</div>
                    </div>
                </div>
                <div class="flex gap-6">
                    <div class="p-2 text-4xl">
                        <Icon name="fluent-emoji-high-contrast:palms-up-together" />
                    </div>
                    <div>
                        <div class="text-xl font-bold">Inclusive Community</div>
                        <div>A safe, welcoming
                            space for gamers of all backgrounds.</div>
                    </div>
                </div>
                <div class="flex gap-6">
                    <div class="p-2 text-4xl">
                        <Icon name="material-symbols:event-repeat-outline-rounded" />
                    </div>
                    <div>
                        <div class="text-xl font-bold">Regular Events</div>
                        <div>We run weekly events with actual games planned based on interest.</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="card bg-base-100 w-96 shadow-sm">
                <figure class="">
                    <img src="https://images.unsplash.com/photo-1651677584025-6c844f0bd65c?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <p><a href="https://discord.com/invite/y5PEWaAb" target="_blank">Join
                            {{ stats.approximate_member_count }}+ active members</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchData } from '@/utils/discord_stats.js';

const stats = await fetchData('https://discord.com/api/invites/y5PEWaAb?with_counts=true');
</script>