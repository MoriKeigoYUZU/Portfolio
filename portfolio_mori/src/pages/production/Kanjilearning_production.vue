<template>
    <v-app>
        <v-container class="lighten-5">
            <v-row id="radius">
                <v-col cols="" id="padding">

                    <v-row>
                        <v-col id="center" cols="12" sm="12" md="12" lg="12">
                            <img id="rogosize" src="../../assets/kanjilearning/rogo.png"/>
                        </v-col>
                    </v-row>


                    <v-row>
                        <v-col>
                            <p>
                                大学の4人メンバーで、手書き文字を人工知能で判定できるwebアプリ「KanjiLearning」作成しました。<br>
                            </p>
                            <p>
                                町中で目に入る漢字、ふとした時に見た漢字、思い出せなくなるときがあると思います。
                                また、漢字を勉強中や漢字を難しいと感じている全ての人をサポートするために、手書き文字を判定できる人工知能を作成し、webアプリケーションに落とし込みました。 <br>
                                僕は、フロントを担当しました。
                            </p>
                        </v-col>
                    </v-row>


                    <v-row>
                        <v-col cols="12" sm="5" md="5" lg="5">
                            <img width="100%" src="../../assets/kanjilearning/kinou.jpg"/>
                        </v-col>
                        <v-col cols="12" sm="7" md="7" lg="7">
                            <h3 style="text-indent:1em">機能</h3>
                            <p>手書き文字を認識できるため、２つのアプリケーションを作成しました。</p>
                            <p>
                                ・漢字検索
                            </p>
                            <p style="text-indent:1em">
                                手書き文字を認識し、漢字・読み方・画数を表示する。
                            </p>
                            <p>
                                ・漢字練習
                            </p>
                            <p style="text-indent:1em">
                                漢検の問題を使用し、テスト形式で練習できる。
                            </p>
                        </v-col>
                    </v-row>

                    <hr width="100%" noshade id="center" style="margin-bottom: 10px">

                    <v-row>
                        <v-col>
                            <h3 style="text-indent:1em">漢字検索</h3>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="4" md="4" lg="4">
                            <img width="100%" src="../../assets/kanjilearning/1.png"/>
                        </v-col>
                        <v-col cols="12" sm="7" md="7" lg="7">
                            1.四角の枠の中に手書きで漢字を書き、検索を押す。<br>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="6" md="6" lg="6">
                            <img width="100%" src="../../assets/kanjilearning/2.png"/>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" lg="6">
                            2.人工知能が漢字を判定し、どのような漢字か・音読み訓読み・画数がわかる。<br>
                            また、手書き文字が人工知能によって判定されにくい漢字だった場合でも、合致率の高い順に漢字を表示させているため、違う漢字に判定されてもカバーできる。<br>
                        </v-col>
                    </v-row>


                    <hr width="100%" noshade id="center" style="margin-bottom: 10px">


                    <h3 style="text-indent:1em">漢字練習</h3>
                    <v-row>
                        <v-col cols="12" sm="7" md="7" lg="7">
                            <img width="100%" src="../../assets/kanjilearning/3.jpg"/>
                        </v-col>
                        <v-col cols="12" sm="5" md="5" lg="5">
                            1.漢字練習トップページから、自分の勉強したい級を選択する。<br>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="4" md="4" lg="4">
                            <img width="100%" src="../../assets/kanjilearning/4.png"/>
                        </v-col>
                        <v-col cols="12" sm="8" md="8" lg="8">
                            2.問題がランダムに出題さるので、手書きで解答する。<br>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="7" md="7" lg="7">
                            <img width="100%" src="../../assets/kanjilearning/5.jpg"/>
                        </v-col>
                        <v-col cols="12" sm="5" md="5" lg="5">
                            3.全て解答したら結果が表示される。<br>
                        </v-col>
                    </v-row>

                    <hr width="100%" noshade id="center" style="margin-bottom: 10px">

                    <v-row>
                        <v-col>
                            <h3 style="text-indent:1em">漢字認識AI</h3>
                            <v-row>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <img width="100%" src="../../assets/kanjilearning/AI.jpg"/>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <p>
                                        フロントでユーザに手入力もらい64*64のバイナリデータに変換し送る。<br>
                                        送られたバイナリデータは人工知能を通し、フロントにデータベースから必要なデータを返す。<br>
                                        CNNモデルはVGG16を簡略化したもの。<br>
                                    </p>
                                </v-col>
                            </v-row>

                        </v-col>
                    </v-row>

                    <hr width="100%" noshade id="center" style="margin-bottom: 10px">

                    <v-row>
                        <v-col>
                            <h3 style="text-indent:1em">使用技術</h3>
                            <p>
                                フロント : Vue.js<br>
                                バック : Laravel<br>
                                WebAPI : TensorFlow<br>
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
    name: "kanjilearning_production"
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

    #rogosize {
        width: 100%;
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

        #rogosize {
            width: 50%;
        }


    }
</style>