<template>
    <v-app>
        <v-container class="lighten-5">
            <v-row id="radius">
                <v-col cols="" id="padding">
                    <v-row>
                        <v-col id="center">
                            <img width="100%" src="../../assets/musiclinker/rogol.png"/>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-col>
                                <p>
                                    大学の5人メンバーで、全てのアーティストがフォーカスされる可能性を提供できるwebアプリ「MusicLinker」作成しました。<br>
                                </p>
                            </v-col>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="">
                            <h3 style="text-indent:1em">背景</h3>
                            <v-col>
                                <p>
                                    大手レーベル・弱小レーベルに所属するアーティスト間で活躍の場に格差が生じています。<br>
                                    人気が出なければ儲からず、若手のアーティスト育成にも影響がでてきます。<br>
                                    それは、アーティストが業界を去る原因の一つになっていると考えました。<br>
                                    SNSの発達により、各アーティストが情報発信ができるようになりました。<br>
                                    しかし、アーティストが発信した情報を受け取るのは既存のフォロワーで、新規ファンの獲得には繋がりません。<br>
                                    そのため、新規ファンを増やしたいアーティストと音楽好きのためのマッチングアプリを作成しました。<br>
                                </p>
                            </v-col>

                            <h3 style="text-indent:1em">機能</h3>
                            <v-col>
                                アーティスト側は、<br>
                                ・アーティスト情報の登録<br>
                                サポーター側は、<br>
                                ・アカウント登録<br>
                                ・自分に合ったアーティストの条件検索<br>
                                を行うことができます。<br>
                            </v-col>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h3 style="text-indent:1em">アーティスト</h3>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="6" md="6" lg="6">
                            <img width="100%" src="../../assets/musiclinker/a-1.jpg"/>
                        </v-col>

                        <v-col cols="12" sm="6" md="6" lg="6">
                            アーティストは、会員登録の際に自分たちの情報を登録する。
                        </v-col>
                    </v-row>

                    <hr width="100%" noshade id="center">

                    <v-row>
                        <v-col></v-col>
                    </v-row>

                    <h3 style="text-indent:1em">サポーター</h3>

                    <v-row>
                        <v-col cols="12" sm="4" md="4" lg="4">
                            <img width="100%" src="../../assets/musiclinker/s1.jpg"/>
                        </v-col>
                        <v-col cols="12" sm="4" md="4" lg="4">
                            <img width="100%" src="../../assets/musiclinker/s1-1.jpg"/>
                        </v-col>
                        <v-col cols="12" sm="4" md="4" lg="4">
                            1.サポーターは、会員登録した後に、自分の好みのアーティストを検索できる。<br>
                            全て「選択しない」を選択した場合、全件検索になる。
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="7" md="7" lg="7">
                            <img width="100%" src="../../assets/musiclinker/s2.jpg"/>

                        </v-col>
                        <v-col cols="12" sm="5" md="5" lg="5">
                            2.アーティストに登録してもらった情報で検索し、自分にマッチしたアーティストをお気に入り登録できる。
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h3 style="text-indent:1em">使用技術</h3>
                            <p>
                                WEBフレームワーク : tornado<br>
                                CSSフレームワーク : Bootstrap<br>
                            </p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "MusicLinker_production"
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


    }
</style>