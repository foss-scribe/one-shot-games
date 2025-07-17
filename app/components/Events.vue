<template>
    <div class="flex gap-12 p-12">
        <div>
            <div>
                <div class="flex">
                    <img src="/assets/images/aftergame-light.png" alt="AfterGame Logo" class="w-24 mb-4" />
                    <div>
                        <a name="events" />
                        <h2 class="text-2xl font-bold">Upcoming Events</h2>
                        <div>Don't miss out on the action - RSVP on AfterGame and join fellow One-Shot Wonders members!</div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="flex gap-6">
                    <div class="p-2 text-4xl">📍</div>
                    <div>
                        <div class="text-xl font-bold">Reserve Your Spot</div>
                        <div>RSVP to One-Shot events and secure your place at the table. No more wondering if there's room!</div>
                    </div>
                </div>
                <div class="flex gap-6">
                    <div class="p-2 text-4xl">🤝</div>
                    <div>
                        <div class="text-xl font-bold">Connect with Fellow Gamers</div>
                        <div>See who's attending and discover new gaming buddies who share your interests.</div>
                    </div>
                </div>
                <div class="flex gap-6">
                    <div class="p-2 text-4xl">📊</div>
                    <div>
                        <div class="text-xl font-bold">Stay Informed</div>
                        <div>Get notified of upcoming events and member posts.</div>
                    </div>
                </div>
                <div class="flex gap-6">
                    <div class="p-2 text-4xl">🚀</div>
                    <div>
                        <div class="text-xl font-bold">Built for Gaming Communities</div>
                        <div>Unlike generic platforms, AfterGame understands gaming culture and tabletop enthusiasts.</div>
                    </div>
                </div>
            </div>
            <a class="btn btn-primary">RSVP to One Shot Events</a>
            <p>Free to join • RSVP to reserve your spot • Connect with fellow gamers</p>
        </div>
        <div>
            <div class="aftergame-widget min-w-96">
                <div class="aftergame-continer">
                    <iframe src="https://aftergame.app/groups/one-shot-wonders-2656/events?mode=embed" title="Aftergame events"
                        width="100%" height="100%" frameborder="0" style="border:1px solid #c6c5d0; border-radius: 8px;"
                        allowtransparency="true">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.aftergame-widget {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
}

.aftergame-continer {
    position: relative;
    background: #2f3136;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border: 1px solid #40444b;
    max-width: 100%;
    min-height: 500px;
    height: 100%;
}
</style>