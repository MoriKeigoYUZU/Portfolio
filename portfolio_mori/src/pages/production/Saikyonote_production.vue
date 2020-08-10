<template>
    <v-app>
        <v-container class="lighten-5">
            <v-row id="radius">
                <v-col cols="" id="padding">
                    <v-row>
                        <v-col>

                            <v-row>
                                <v-col cols="4"></v-col>
                                <v-col id="center" cols="12" sm="4" md="4" lg="4">
                                    <img width="100%" src="../../assets/saikyonote/俺の最強対策ノート.png"/>
                                </v-col>
                                <v-col cols="4"></v-col>
                            </v-row>
                            <p>
                                phpのテンプレートエンジンである「Smarty」を利用して「俺の最強の対策メモ」作成しました。<br>
                            </p>
                            <p>
                                2020年8月現在”大乱闘スマッシュブラザーズSPECIAL”は発売して1年以上が経過しました。
                                参戦キャラクター数は81体です。<br>
                                論理的にプレイしたり、多くのキャラを使用したりしなければ勝てなくなってきました。<br>
                                そのため、「キャラ対策ノートまとめねば」という思いから制作しました。
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2 style="text-indent:1em">機能</h2>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h3 style="text-indent:1em">フレーム表</h3>
                            <v-row>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <img width="100%" src="../../assets/saikyonote/f.jpg"/>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    各キャラの持続フレームと全体フレームを閲覧できる。<br>
                                </v-col>
                            </v-row>

                            <hr width="100%" noshade id="center">
                            <h3 style="text-indent:1em">各キャラ対策ノート</h3>

                            <v-row>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <img width="100%" src="../../assets/saikyonote/taisaku.jpg"/>
                                </v-col>

                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <p>
                                        各キャラの対策メモを入力できる。<br>
                                        書いたメモを見ることができる。
                                    </p>
                                </v-col>
                            </v-row>
                            <hr width="100%" noshade id="center">
                            <h3 style="text-indent:1em">各キャラ開拓ノート</h3>
                            <v-row>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <img width="100%" src="../../assets/saikyonote/kaitaku.jpg"/>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <p>
                                        各キャラの開拓メモを入力できる。<br>
                                        書いたメモを見ることができる。
                                    </p>
                                </v-col>
                            </v-row>
                            <hr width="100%" noshade id="center">
                            <h3 style="text-indent:1em">その他ページ(ログイン / サインイン / トップページ)</h3>

                            <v-row>
                                <v-col cols="12" sm="4" md="4" lg="4">
                                    <img width="100%" src="../../assets/saikyonote/login.jpg"/>
                                </v-col>

                                <v-col cols="12" sm="4" md="4" lg="4">
                                    <img width="100%" src="../../assets/saikyonote/signin.jpg"/>
                                </v-col>

                                <v-col cols="12" sm="4" md="4" lg="4">
                                    <img width="100%" src="../../assets/saikyonote/top.jpg"/>
                                </v-col>
                            </v-row>


                            <hr width="100%" noshade id="center">
                            <v-row>
                                <v-col>
                                    <h3 style="text-indent:1em">利用技術</h3>
                                    <p>
                                        PHPテンプレートエンジン : Smarty<br>
                                        CSSフレームワーク : Bootstrap<br>
                                        Web サーバ : apache<br>
                                        データベース : MySQL<br>
                                    </p>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "saikyonote_production"
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