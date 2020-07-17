<template>
    <v-app>
        <v-container class="lighten-5">

            <v-row id="radius">
                <v-row>
                    <v-col cols="12">
                        <h1 id="center">Arepos</h1>
                    </v-col>
                </v-row>

                <v-row>
                    <v-row>
                        <v-col cols="2">
                        </v-col>
                        <v-col cols="8">
                            <div id="center">
                                <img width="100%" src="../../assets/geohack2019/rogo.jpg"/>
                            </div>
                        </v-col>
                        <v-col cols="2"></v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="1"></v-col>
                        <v-col cols="10">

                            <v-row>
                                <v-col>
                                    <p>
                                        普段開発を共にしている、大学の5人メンバーで「<a href="https://ghp.connpass.com/event/157260/">Geospatial
                                        Hackers
                                        Program</a>」を参加し、地域同士を活性化し合うSNSアプリ「Arepos」作成しました。<br>
                                    </p>
                                    <h3 style="text-indent:1em">機能</h3>
                                    <p>
                                        ・おすすめスポットをコメントと共に共有<br>
                                        ・投稿へのいいねはスポットの地域にも反映<br>
                                        ・地域別で様々なデータが参照<br>
                                        の、機能を実装しました。<br>
                                    </p>
                                </v-col>
                            </v-row>


                            <v-row>
                                <v-col></v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <h3 style="text-indent:1em">Arepos</h3>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" sm="3" md="3" lg="3">

                                    <img width="100%" src="../../assets/geohack2019/1.png"/>
                                </v-col>
                                <v-col cols="12" sm="3" md="3" lg="3">

                                    <img width="100%" src="../../assets/geohack2019/1-1.jpg"/>
                                </v-col>


                                <v-col cols="12" sm="6" md="6" lg="6">
                                    自分たちの地域を活性化させたいユーザーは、おすすめスポットの画像・スポットの名前・コメントをつけて投稿できる。<br>
                                    投稿されたスポットは、投稿順で閲覧することができる。<br>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" sm="3" md="3" lg="3">
                                    <img width="100%" src="../../assets/geohack2019/2.png"/>
                                </v-col>

                                <v-col cols="12" sm="3" md="3" lg="3">
                                    <img width="100%" src="../../assets/geohack2019/2-2.png"/>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <p>
                                        投稿されたスポットにいいねすることができ、ユーザーや自治体はどの市が人気度が高いか確認することができる。<br>
                                        また、地域別で様々なデータが参照できるため、自治体は更に盛り上げるための材料にできる<br>
                                    </p>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col></v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <h3 style="text-indent:1em">使用技術</h3>

                                    <p id="center">
                                        <img width="70%" src="../../assets/geohack2019/3.jpg"/>
                                    </p>
                                    <p>
                                        全体としてAWSのサービスを使い、フロントエンドはNuxt.jsが、バックエンドはGinを使って作られています。<br>
                                        具体的には端末からNuxt.jsまではウェブページを取得するHTTP通信、Nuxt.jsからGinに対してはコンテンツを扱うためのAPI通信、GinからRDBにたいしてはデータを取得するためのDB通信が行われ、同じ向きを辿って端末にウェブページが表示されるという流れです。</br>
                                    </p>
                                </v-col>
                            </v-row>

                        </v-col>
                        <v-col cols="1"></v-col>
                    </v-row>
                </v-row>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "Geohack2019_production"
  }
</script>


<style scoped>


    #resizeimage {
        width: 100%;
    }

    #resizeimage1 {
        width: 100%;
    }


    /*スマホ*/
    #radius {
        background-color: rgba(204, 204, 204, 0.3);
        border-radius: 10px 10px 10px 10px;
    }

    #youtube {
        background-color: rgba(250, 250, 250, 0.3);
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

    #model {
        width: 20%;

    }


    @media only screen and (min-width: 651px) {
        　 /* 中画面用 */
        　 /* 大画面用 */
        #radius {
            background-color: rgba(204, 204, 204, 0.3);
            border-radius: 10px 10px 10px 10px;
        }

        #radiusw {
            background-color: rgba(250, 250, 250, 0.3);
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

        #model {
            width: 20%;
            /*height: 20%;*/
        }

    }
</style>