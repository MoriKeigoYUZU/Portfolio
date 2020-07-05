<template>
    <v-app>
        <v-container class="lighten-5">

            <v-row id="radius">


                <v-row>
                    <v-col id="center" cols="12" sm="12" md="12" lg="12">
                        <img width="90%" src="../../assets/othlohack2019/スライド01.png"/>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">

                        <p>
                            OtholHackで「地域・観客・アーティストが一体に 路上ライブで盛り上がれる空間を」というテーマで「CheerFul」作成しました。<br>
                        </p>
                        <p>
                            各地で地域活性化を目的として路上アーティストを集めるイベントが各地で開催されています。<br>
                            実際にヒアリングした結果、アーティストは「なかなか多くの観客が集まらない。盛り上がりを伝えられない。」という問題。<br>
                            観客は、「どんなバンドがどこでライブするかよく分からない。参加しにくい雰囲気がある。」という問題が浮かび上がりました。<br>
                        </p>
                        <p>
                            そこで僕たちは、「観客はアーティストを見つけやすく、実際のLIVEのような雰囲気にする」を掲げ、路上ライブを盛り上げるアプリケーション「CheerFul」を作成しました。<br>
                        </p>

                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">
                        <v-row>
                            <v-col cols="12" sm="5" md="5" lg="5">
                                <img width="100%" src="../../assets/othlohack2019/スライド09.png"/>
                            </v-col>
                            <v-col cols="12" sm="7" md="7" lg="7">
                                <h3 style="text-indent:1em">機能</h3>
                                <p>
                                    観客の機能は、<br>
                                    ・近くにいるアーティストのランキング表示<br>
                                    ・アーティストとの距離表示<br>
                                    ・応援(ペンライト)<br>
                                    ・投げ銭システム<br>
                                </p>
                                <p>
                                    アーティストの機能は、<br>
                                    ・ライブしている位置情報を公開<br>
                                    ・リアルタイム情報発信<br>
                                    ・応援の色を変化させる<br>
                                </p>
                            </v-col>
                        </v-row>
                        <p>
                            が実装されています。
                        </p>
                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>


                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">

                        <h3 style="text-indent:1em">実際の動作</h3>

                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>

                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">
                        <p id="center">
                            1.アーティストはライブを開始する。
                        </p>
                        <p id="center">
                            <video width="100%" src="../../assets/othlohack2019/1.アーティストがライブを開始する映像(1画面).mp4" controls/>
                        </p>
                        <hr width="100%" noshade id="center">

                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>

                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">

                        <p id="center">
                            <br>2.観客は近くの路上ライブを選択する。
                        </p>
                        <p id="center">
                            <video width="100%" src="../../assets/othlohack2019/2.ランキングや通知からアーティストを見つける映像(1画面).mp4"
                                   controls/>
                        </p>
                        <hr width="100%" noshade id="center">

                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>


                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">

                        <p id="center">
                            <br>3.観客は雲のようなモワモワを頼りにして位置を探す。<br>
                            観客は、ライブに行く間も楽しくできるように工夫してある。<br>
                        </p>
                        <p id="center">
                            <video width="100%" src="../../assets/othlohack2019/3.ユーザーは近くのライブを探して、歩く映像 2.mp4" controls/>
                        </p>
                        <hr width="100%" noshade id="center">

                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>

                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">

                        <p id="center">
                            <br>4.観客は路上ライブ会場に到着したら、応援を始める。<br>
                        </p>
                        <p id="center">
                            <video width="100%" src="../../assets/othlohack2019/4.ライブ会場に着いたら、応援するをスワイプする映像(1画面).mp4"
                                   controls/>
                        </p>
                        <hr width="100%" noshade id="center">

                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>


                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">

                        <p id="center">
                            <br>5.観客は、スマートフォンをペンライトとしてライブを盛り上げます。<br>
                            さらに、投げ銭システムを導入しており投げ銭を行えます。<br>
                            アーティストは、曲や盛り上がり具合に合わせて色を変更します。<br>
                            ※大きな音が出ます。<br>
                        </p>
                        <p id="center">
                            <video width="100%" src="../../assets/othlohack2019/5.応援している映像、ボタンで色を変えている映像(2画面).mp4"
                                   controls/>
                        </p>
                        <hr width="100%" noshade id="center">

                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>


                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">


                        <p id="center">
                            <br>6.アーティストは、観客がどれくらい盛り上がったか(スマートフォンを振った回数)と、投げ銭額を確認できる。<br>
                        </p>
                        <p id="center">
                            <video width="100%" src="../../assets/othlohack2019/6.アーティストがライブ終了.mp4" controls/>
                        </p>
                        <hr width="100%" noshade id="center">
                        <hr width="100%" noshade id="center">
                        <p>
                            <br>という動作になっている。<br>
                        </p>

                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>

                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">

                        <h3 style="text-indent:1em">使用技術</h3>
                        <p>
                            HTML、CSS、JavaScriptをPWA化して、Firebaseに載せています。<br>
                            位置情報は、スマートフォンのGPS機能を利用しています。
                        </p>
                        <p id="center">

                            <img width="100%" src="../../assets/othlohack2019/スライド20.png"/>
                        </p>

                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
            </v-row>

        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "Othlohack2019_production"
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