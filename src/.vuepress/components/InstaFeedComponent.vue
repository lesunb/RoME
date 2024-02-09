

<script>
import VueSlickCarousel from "vue-slick-carousel";
import axios from "axios";
// optional style for arrows & dotsimport "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    name: "InstaFeedComponent",
    components: { VueSlickCarousel },

    data() {
        return {
            instafeed: null,
        };
    },

    methods: {
        getInsta() {
            axios.get(`https://graph.facebook.com/v5.0/YOUR_PAGE_ID/media    fields=media_url%2Ctimestamp%2Cthumbnail_url%2Ccaption&access_token ${process.env.VUE_APP_FB_ACCESS}`)
                .then((response) => {
                    this.instafeed = response.data.data;
                });
        },
    },
    created() {
        this.getInsta();
    },
};
</script>
<template>
    <div>
        <h1>Últimos feeds do Instagram</h1>
        <!-- <VueSlickCarousel :arrows="true" :dots="true">
            <div v-for="(feed, index) in instafeed">
                <img :src="feed.media_url" alt />
            </div>
        </VueSlickCarousel> -->
    </div>
</template>
