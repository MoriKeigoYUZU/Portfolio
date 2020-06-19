<template>
    <v-app>
        <v-container class="lighten-5">

            <v-row>
                <v-col id="radius">
                    <v-carousel
                            cycle
                            height="400"
                            wide="30"
                            hide-delimiter-background
                            show-arrows-on-hover
                    >
                        <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="item.src"
                                reverse-transition="fade-transition"
                        ></v-carousel-item>
                    </v-carousel>
                    <div id="right">
                        <v-icon class="title">mdi-camera</v-icon>
                        <span class="font-italic font-weight-light font-weight-bold" style="color: #6E6E6E">Memorial photo</span>
                    </div>
                </v-col>
            </v-row>
            <v-col></v-col>
            <v-row>
                <v-col id="radius">
                    <div class="title" id="center">- Profile -</div>
                    <v-col>

                        <img src="../assets/Nics.jpg" id="resizeimage"/>

                        <div id="center">森 慶悟</div>
                        <div class="overline" id="center">Mori Keigo 1999.12.13</div>
                        <div class="overline" id="center">愛知工業大学</div>
                        <hr width="100%" noshade id="center">
                        <div class="">web学生エンジニア</div>
                        <div class>Vue GO AWS勉強中</div>
                        <div>
                            <div>Favorite</div>
                            <span>sneakers , UVERworld</span></div>
                    </v-col>
                </v-col>
            </v-row>

            <v-row>
                <v-col></v-col>
            </v-row>


            <v-row id="radius">

                <v-col>
                    <div class="title">awards received</div>
                </v-col>

                <v-col
                        v-for="(awards, i) in awards"
                        :key="i"
                        cols="12"
                >
                    <v-card
                            class="mx-auto"
                            max-width="mx-auto"
                            outlined
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>

                                <v-card-subtitle>
                                    {{ awards.day }}
                                </v-card-subtitle>


                                <v-card-text
                                        id="text_vw"
                                >
                                        <span class="font-weight-bold">{{ awards.name }}
                                        </span><br>
                                    {{ awards.description }}
                                </v-card-text>

                                <!--<v-card-subtitle-->
                                <!--id="text_vw"-->
                                <!--&gt;-->
                                <!--</v-card-subtitle>-->

                            </div>

                            <v-avatar
                                    class="ma-3"
                                    size="111"
                                    tile
                            >
                                <v-img :src="awards.src"></v-img>
                            </v-avatar>
                        </div>
                    </v-card>

                </v-col>
            </v-row>

        </v-container>
    </v-app>
</template>

<script>
  export default {

    data() {
      return {

        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],

        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],

        awards: [
          {
            name: 'othlohack2019',
            day: '2019-11-03',
            src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            description: 'ベストエモーショナル賞',
            img: '',
          },
          {
            name: 'ええじゃないかハッカソン',
            day: '2019-12-27',
            src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            description: 'ウェブインパクト賞',
            img: '',
          },
        ],

      }
    },
  }
</script>

<style scoped>


    /*スマホ*/
    #radius {
        background-color: rgba(204, 204, 204, 0.3);
        border-radius: 10px 10px 10px 10px;
    }

    #center {
        text-align: center;
    }

    #right {
        text-align: right;
    }

    #resizeimage {
        text-align: center;
        width: 100%;
    }

    #text_vw {
        font-size: 4vw;
        line-height: 20px;
    }


    @media only screen and (min-width: 651px) {
        　 /* 中画面用 */
        　 /* 大画面用 */
        #radius {
            background-color: rgba(204, 204, 204, 0.3);
            border-radius: 10px 10px 10px 10px;
        }

        #center {
            text-align: center;
        }

        #right {
            text-align: right;
        }

        #resizeimage {
            text-align: center;
            width: 100%;
        }

        #text_vw {
            font-size: 3vw;
            line-height: 45px;
        }

    }


</style>