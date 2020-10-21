<template>
    <v-app>
        <v-container class="lighten-5">
            <v-row id="radius">
                <v-col cols="" id="padding">

                    <v-row>
                        <v-col cols="0" sm=1 md=1 lg=1 xl=1>
                        </v-col>
                        <v-col cols="12" sm=10 md=10 lg=10 xl=10 id="center">
                            <img width="100%" src="../../assets/ca_challenge2020/HighRigahtRoad.png"/>
                        </v-col>
                        <v-col cols="0" sm=1 md=1 lg=1 xl=1>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <p>
                                サイバーエージェントのインターンシップ「
                                <router-link to="/CA_Tech_Challenge_2020" id="green">
                                    3days ゲームクライアント向け 開発型インターン ONLINE
                                </router-link>
                                」で「
                                <a id="green" href="https://unityroom.com/games/high_right_road">
                                    High Right Road
                                </a>
                                」作成しました。<br>


                                <a id="green"
                                   href="https://drive.google.com/file/d/1KYJ0eX7hSIDny2yD88xWAzvmMEPl17yT/view?usp=sharing">当日利用した発表資料(一部修正済み)</a>
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2>どんなゲーム?</h2>
                            <p>
                                光(ライト)を動かしスイッチに照射しゴールを目指す「パズル×ローグライクゲーム」です。<br>
                                実際のゲーム->
                                <a id="green" href="https://unityroom.com/games/high_right_road">High Right
                                    Road　(WebGLDemo版)</a>
                            </p>

                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm=4 md=4 lg=4 xl=4>
                            <img width="100%" src="../../assets/HRR/rule1.jpg"/>
                        </v-col>
                        <v-col cols="12" sm=4 md=4 lg=4 xl=4 id="center">
                            <img width="100%" src="../../assets/HRR/rule2.jpg"/>
                        </v-col>
                        <v-col cols="12" sm=4 md=4 lg=4 xl=4>
                            <img width="100%" src="../../assets/HRR/rule3.jpg"/>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2>ゲームの世界観</h2>
                            <p>
                                光や影、おばけをゲーム内に取り入れたかったため、「暗い屋敷に迷い込んだ」という設定にしました。
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2>アピールポイント</h2>
                            <h3>レベルデザイン</h3>
                            <p>
                                レベルデザインを設計するためにパズルの楽しさを「解けないときのイライラ」と「解けたときの達成感」のバランスと、定義しました。<br>
                                そこで、チュートリアル&ステージ1は新規ユーザを獲得のため、我々がプレイヤーの動きを想定し「解けたときの達成感」を得られやすいように作りました。<br>
                                ステージ2、3は「解けないときのイライラ」の要素を追加し、考えれば解ける充実感も提供するステージを作成しました。<br>
                                全てに共通して、ハイスコアを出せるような誘導はしていないので、おばけを倒すほうが高スコアになるのか、最短でゴールすればいいのか考え、トライアンドエラーを繰り返しながら楽しんでもらえるようにしました。<br>
                            </p>
                            <h3>ユーザ体験</h3>
                            <p>
                                パズルゲームの性質上「解けないイライラ」が発生するので、ゲームの操作性のイライラを減少させるためにいくつかの工夫をしました。<br>
                            </p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="0" sm=2 md=2 lg=2 xl=2>
                        </v-col>
                        <v-col cols="12" sm=8 md=8 lg=8 xl=8 id="center">
                            <img width="100%" src="../../assets/HRR/user.jpg"/>
                        </v-col>
                        <v-col cols="0" sm=2 md=2 lg=2 xl=2>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2>もりの作業内容</h2>
                            <p>
                                散々ゲームの中のことを書きましたが、バックエンドを担当したのでクリーンな立場から進行をしたり意見を出したりしました。<br>
                                バックエンドの作業としては、
                                <router-link to="/CA_Tech_Challenge_2020" id="green">
                                    インターンシップ
                                </router-link>
                                の説明に書いてあるので、そちらを見てください。<br>
                                実装はGitHubで管理していました。<br>
                                <a id="green"
                                   href="https://github.com/MoriKeigoYUZU/CyberAgent-Internship-TechChallenge">
                                    MoriKeigoYUZU / CyberAgent-Internship-TechChallenge
                                </a>
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2>使用技術</h2>
                            <h4>クライアント側</h4>
                            <li>Unity(c#)</li>
                            <h4>バックエンド側</h4>
                            <li>APIサーバ(Golnag)</li>
                            <li>MySQL</li>
                            <li>Ubuntu</li>
                        </v-col>
                    </v-row>

                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "HRR_production"
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

    #green {
        color: #228B22;
    }


    @media only screen and (min-width: 651px) {
        　 /* 中画面用 */
        　 /* 大画面用 */
        #radius {
            background-color: rgba(204, 204, 204, 0.3);
            border-radius: 10px 10px 10px 10px;
        }

        #padding {
            padding-left: 120px;
            padding-right: 120px;
        }
    }
</style>