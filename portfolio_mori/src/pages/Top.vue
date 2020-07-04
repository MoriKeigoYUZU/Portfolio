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
                    <div class="title" id="center">- Profile プロフィール -</div>
                    <v-col>
                        <v-row>
                            <v-col cols=12 sm=10 md=8 lg=4 xl=3>
                                <img src="../assets/profile/mori.jpg" id="resizeimage"/>
                            </v-col>
                            <v-col>
                                <div class="" id="center">学生エンジニア</div>
                                <div id="center" class="title">森 慶悟</div>
                                <div class="overline" id="center">Mori Keigo 1999.12.13</div>
                                <div class="overline" id="center">愛知工業大学</div>
                                <div class="overline" id="center"><a href="https://pluslab.org/">内藤克浩研究室所属</a></div>
                                <div class="overline" id="center"><a
                                        href="https://set1.ie.aitech.ac.jp/">システム工学研究会所属</a></div>

                                <v-row>
                                    <v-col></v-col>
                                </v-row>
                                <hr width="100%" noshade id="center">
                                <v-row>
                                    <v-col></v-col>
                                </v-row>
                                <span id="">
                                    <div>大学入学と同時にETロボコンを始めました。</div>
                                    <div>2年間ロボコンに参加し全国にも行きましたが、やればやるほど自分にあっていないと感じました。</div>
                                    <div>そこで自分にあうモノを探そうと思い立ち、見つけたのがWEBサービスでした。</div>
                                    <div>現在では、名古屋の勉強会やハッカソンにも積極的に参加しています。</div>
                                </span>
                                <v-row>
                                    <v-col></v-col>
                                </v-row>
                                <hr width="100%" noshade id="center">
                                <v-row>
                                    <v-col></v-col>
                                </v-row>
                                <div>Favorite things 好きなこと : 靴収集,ドライブ,創作料理</div>
                                <div>Skill スキル : Vue,JavaScript,Go,C++,EV3</div>
                                <div>Studying 勉強中 : AWS,PHP</div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-col>
            </v-row>

            <v-row>
                <v-col></v-col>
            </v-row>

            <v-row id="radius">

                <v-col>
                    <div class="title" id="center">- Awards Received 受賞歴 -</div>
                </v-col>

                <v-col
                        v-for="(awards, i) in awards"
                        :key="i"
                        cols="12"
                >
                    <v-hover
                            v-slot:default="{ hover }"
                    >
                        <v-card
                                :elevation="hover ? 12 : 2"
                                class="mx-auto"
                                max-width="mx-auto"
                                outlined
                                @click=""
                                :to="awards.to"
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


                                </div>

                                <v-avatar
                                        class="ma-3"
                                        size="140"
                                        tile
                                >
                                    <v-img :src="awards.src"></v-img>
                                </v-avatar>


                            </div>
                        </v-card>
                    </v-hover>

                </v-col>
                <v-col cols="2"></v-col>
            </v-row>

            <v-row>
                <v-col></v-col>
            </v-row>

            <v-row id="radius">

                <v-col>
                    <div class="title" id="center">- Production 制作物 -</div>
                </v-col>

                <v-col
                        v-for="(production, i) in production"
                        :key="i"
                        cols="12"
                >

                    <v-hover
                            v-slot:default="{ hover }"
                    >

                        <v-card
                                :elevation="hover ? 12 : 2"
                                class="mx-auto"
                                max-width="mx-auto"
                                outlined
                                @click=""
                                :to="production.to"
                        >
                            <div class="d-flex flex-no-wrap justify-space-between">

                                <div>

                                    <v-card-subtitle>
                                        {{ production.teams }}
                                    </v-card-subtitle>


                                    <v-card-text
                                            id="text_vw"
                                    >
                                        <span class="font-weight-bold">{{ production.name }}
                                        </span><br>
                                        {{ production.explanation }}
                                    </v-card-text>


                                </div>

                                <v-avatar
                                        class="ma-3"
                                        size="140"
                                        tile
                                >
                                    <v-img :src="production.src"></v-img>
                                </v-avatar>


                            </div>
                        </v-card>
                    </v-hover>
                </v-col>

                <v-col cols="2"></v-col>
            </v-row>

            <v-row>
                <v-col></v-col>
            </v-row>

            <v-row id="radius">

                <v-col>
                    <div class="title">Coming Soon..</div>
                </v-col>

            </v-row>

            <router-link to="/Etrobo2018_awards">Etrobo2018_awards</router-link>
        </v-container>
    </v-app>
</template>

<script>

  // import Etrobo2018_awards from '../pages/awards/Etrobo2018_awards'

  export default {


    data() {
      return {

        components: {
          // Etrobo2018_awards,
        },

        items: [
          {
            src: require('../assets/othlohack2019/othlohack2019_carousel.jpg'),
          },
          {
            src: require('../assets/toyohashihack2019/toyohashihack2019_carousel.jpg'),
          },
          {
            src: require('../assets/etrobo/2019/etrobo_2019_carousel.jpg'),
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
            name: 'ETロボコン2018',
            day: '2018-11-14',
            src: require("../assets/etrobo/2018/etrobo_2018_awards.jpg"),
            description: '全国1位',
            to: '/Etrobo_2018_awards',
          },
          {
            name: 'othlohack2019',
            day: '2019-11-03',
            src: require("../assets/othlohack2019/othlohack2019_awards.jpg"),
            description: 'ベストエモーショナル賞',
            to: 'Othlohack2019_awards',
          },
          {
            name: 'ええじゃないかハッカソン',
            day: '2019-12-27',
            src: require("../assets/toyohashihack2019/toyohashihack2019_awards.jpg"),
            description: 'ウェブインパクト賞',
            to: 'Toyohashihack2019_awards',
          },

        ],

        production: [
          {
            name: 'ETロボコン2019',
            teams: 'YakusaReborn',
            src: require("../assets/etrobo/2019/etrobo_2019_production.jpg"),
            explanation: 'モデル設計と組み込みプログラミング',
            to: 'Etrobo_2019_production'
          },
          {
            name: 'CheerFul',
            teams: 'タピオカ.md',
            src: require("../assets/othlohack2019/othlohack2019_production.jpg"),
            explanation: '路上ライブを身近にする',
            to: 'Othlohack2019_production'
          },
          {
            name: 'KanjiLearning',
            teams: 'Coconut',
            src: require("../assets/kanjilearning/kanjilearning_production.jpg"),
            explanation: '手書き文字を人工知能で判定',
            to: 'Kanjilearning_production'
          },
          {
            name: 'Personer',
            teams: 'UDON',
            src: require("../assets/toyohashihack2019/toyohashihack2019_production.png"),
            explanation: '地域のイベントをもっと便利にわくわく！',

            to: 'Toyohashihack2019_production'
          },
          {
            name: 'MusicLinker',
            // day: '2019-12-27',
            teams: '-',
            // src: require("../assets/toyohashihack2019_awards.jpg"),
            explanation: '全てのアーティストがフォーカスされる可能性を',

            to: 'MusicLinker_production'
          },
          {
            name: 'Arepos',
            teams: '-',
            src: require("../assets/geohack2019/geohack2019_production.png"),
            explanation: '地域の課題をG空間情報を活用し解決',

            to: 'Geohack2019_production'
          },
        ]

      }
    },
  }
</script>

<style scoped>


    /*スマホ*/
    #radius {
        background-color: rgba(204, 204, 204, 0.4);
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
            background-color: rgba(204, 204, 204, 0.4);
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
            font-size: 2vw;
            line-height: 45px;
        }

    }


</style>