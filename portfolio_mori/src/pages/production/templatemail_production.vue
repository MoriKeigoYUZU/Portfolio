<template>
    <v-app>
        <v-container class="lighten-5">
            <v-row id="radius">
                <v-col cols="" id="padding">

                    <v-row>
                        <v-col>
                            <h2>作成したアプリケーション</h2>
                            <a id="green"
                               href="https://templatemail-3eed5.web.app/">
                                テンプレメール
                            </a>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2>背景</h2>
                            <p>
                                Web系初学者の同期が楽天のインターンシップ(ハッカソン型)に参加が決定したので、 僕がプレハッカソンを企画して作成しました。<br>
                            </p>
                        </v-col>
                    </v-row>

                    <h2>アイディア出し</h2>
                    <v-row>
                        <v-col>
                            <h4>
                                <li>ブレインストーミング</li>
                            </h4>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm=5 md=5 lg=5 xl=5>
                            <img width="100%" src="../../assets/templatemail/andashi_1.jpg"/>
                        </v-col>
                        <v-col cols="12" sm=7 md=7 lg=7 xl=7>
                            <p>
                                プレハッカソンということで、アイディア出しから行いました。<br>
                                今悩んでいることや困っていることを、質より量を意識して出しました。<br>
                            </p>
                        </v-col>

                    </v-row>
                    <v-row>
                        <v-col>
                            <h4>
                                <li>ブラッシュアップ</li>
                            </h4>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm=5 md=5 lg=5 xl=5>
                            <img width="100%" src="../../assets/templatemail/andashi_2.jpg"/>
                        </v-col>
                        <v-col cols="12" sm=7 md=7 lg=7 xl=7>
                            <p>

                                その中で、良いと思ったものをあげ、その案をブラッシュアップしました。
                                最終的に「メールの定型文をすぐ知りたい」に決定しました。
                            </p>
                        </v-col>
                    </v-row>

                    <h2>決定案の内容を固める</h2>
                    <v-row>
                        <v-col cols="12" sm=5 md=5 lg=5 xl=5>
                            <img width="100%" src="../../assets/templatemail/naiyou.jpg"/>
                        </v-col>
                        <v-col cols="12" sm=7 md=7 lg=7 xl=7>
                            <p>
                                決定したアプリケーションをより良いものにするためにペルソナを出し、大まかなアプリケーションの内容を決定しました。
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2>製作物</h2>
                            <p>
                                アプリケーション「テンプレメール」を作成しました。<br>
                                内容として、自分&相手の情報を入力すると、テンプレート文を返してくれるアプリケーションです。<br>
                            </p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm=4 md=4 lg=4 xl=4>
                            <img width="100%" src="../../assets/templatemail/game_1.jpg"/>
                            <p id="center">
                                1.自分の情報を入力する
                            </p>
                        </v-col>
                        <v-col cols="12" sm=4 md=4 lg=4 xl=4>
                            <img width="100%" src="../../assets/templatemail/game_2.jpg"/>
                            <p id="center">
                                2.相手の情報を入力する
                            </p>
                        </v-col>
                        <v-col cols="12" sm=4 md=4 lg=4 xl=4>
                            <img width="100%" src="../../assets/templatemail/game_3.jpg"/>
                            <p id="center">
                                3.定型文を見ることができる
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2>実装</h2>
                            <p>
                                Vue CLIのみで実装しました。<br>
                                そのため、データをクライアント側で保持しなければなりません。<br>
                                そこでVuexを導入し、store.stateにデータを保持させて実装しました。<br>
                                <a id="green"
                                   href="https://github.com/MoriKeigoYUZU/template-mail">
                                    GitHub(MoriKeigoYUZU/template-mail)
                                </a>
                            </p>

                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2>使用技術</h2>
                            <li>Vue CLI</li>
                            <li>Firebase</li>
                        </v-col>
                    </v-row>

                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "templatemail_production"
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