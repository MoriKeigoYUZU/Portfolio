<template>
    <v-app>
        <v-container class="lighten-5">

            <v-row id="radius">
                <v-col cols="" id="padding">
                    <v-row>
                        <v-col cols="12">
                            <h1 id="center">Arepos</h1>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-row>
                            <v-col>
                                <div id="center">
                                    <img id="rogosize"  src="../../assets/geohack2019/rogo.jpg"/>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>

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

                                        <img width="99%" src="../../assets/geohack2019/1.png"/>
                                    </v-col>
                                    <v-col cols="12" sm="3" md="3" lg="3">

                                        <img width="99%" src="../../assets/geohack2019/1-1.jpg"/>
                                    </v-col>


                                    <v-col cols="12" sm="6" md="6" lg="6">
                                        自分たちの地域を活性化させたいユーザーは、おすすめスポットの画像・スポットの名前・コメントをつけて投稿できる。<br>
                                        投稿されたスポットは、投稿順で閲覧することができる。<br>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" sm="3" md="3" lg="3">
                                        <img width="99%" src="../../assets/geohack2019/2.png"/>
                                    </v-col>

                                    <v-col cols="12" sm="3" md="3" lg="3">
                                        <img width="99%" src="../../assets/geohack2019/2-2.png"/>
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
                                            <img id="technologysize" src="../../assets/geohack2019/3.jpg"/>
                                        </p>
                                        <p>
                                            全体としてAWSのサービスを使い、フロントエンドはNuxt.jsが、バックエンドはGinを使って作られています。<br>
                                            具体的には端末からNuxt.jsまではウェブページを取得するHTTP通信、Nuxt.jsからGinに対してはコンテンツを扱うためのAPI通信、GinからRDBにたいしてはデータを取得するためのDB通信が行われ、同じ向きを辿って端末にウェブページが表示されるという流れです。</br>
                                        </p>
                                    </v-col>
                                </v-row>

                            </v-col>
                        </v-row>
                    </v-row>
                </v-col>
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

    /*スマホ*/
    #radius {
        background-color: rgba(204, 204, 204, 0.3);
        border-radius: 10px 10px 10px 10px;
    }


    #center {
        text-align: center;
    }


    #padding {
    }

    #rogosize{
        width: 99%;
    }

    #technologysize{
        width: 99%;
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

        #padding {
            padding-left: 60px;
            padding-right: 60px;
        }

        #rogosize{
            width: 100%;
        }

        #technologysize{
            width: 80%;
        }

    }
</style>