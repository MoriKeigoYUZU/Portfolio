<template>
    <v-app>
        <v-container class="lighten-5">

            <v-row id="radius">

                <v-col cols="1"></v-col>
                <v-col cols="10">

                    <v-row>
                        <v-col cols="12">
                            <h1 id="center">OthloHack2019 ベストエモーショナル賞</h1>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols=12>


                            <div id="center">
                                <img width="100%" src="../../assets/othlohack2019/othlohack2019_carousel.jpg"/>

                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h3 style="text-indent:1em">OthloHackとは...</h3>

                            IT系の学生を集めて名古屋をもっと盛り上げようと立ち上がったOthloTechが、東海最大規模の学生限定ハッカソンを開催します！<br>
                            アイディアを形にしたい気持ちと、まだ見ぬ仲間と1つの事に熱中したい思いがあればどなたでも参加いただけます。<br>
                            「チーム開発とかしたことないし...」「モノづくりは好きだけど、いつも1人でやってるし...」そんな方でも安心して参加いただけます。<br><br>
                            私たちはクリエイティブな学生を探しています。<br>
                            チームで一丸となって、熱い夏に圧倒的成長を成し遂げましょう！<br>
                            当日発表されるテーマをもとにチームで2日間開発をします。<br>
                            作るものはWEBサービス・アプリ・ゲーム・IoTなど、特に限定はしませんので自由に発想して開発してもらえればと思います。<br>
                            <div>
                                <a href="https://hack.othlo.tech/">OthloHackより引用</a>
                            </div>

                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <h3 style="text-indent:1em">初めてのハッカソン(ロボコンからweb系へ)</h3>
                            <p>
                                大学学部2年の夏休みで、ETロボコンを引退しました。<br>
                                原因は幾つかあるのですが、自分に向いていないとわかったからです。<br>
                                大学の先輩に相談して、web系の勉強を始めハッカソンにも参加しました。<br>
                                当時のwebスキルはVue.jsが少しだけ書ける程度でした。<br>
                                ロボコン界隈と違い、全員が意欲的に学んでおり心地の良い空間だと思いました。<br>
                                また、個人的に参加人数が多く運営がしっかりしているOthloHackが最初のハッカソンだったことは運が良かったと思います。<br>


                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="5" md="5" lg="5">
                            <img width="100%" src="../../assets/othlohack2019/CheerFul.png"/>
                        </v-col>

                        <v-col cols="12" sm="7" md="7" lg="7">
                            <h3 style="text-indent:1em">作ったもの</h3>
                            <p>
                                今年のテーマは「◯◯を身近にする」でした。<br>
                                僕たちのチームは、「路上ライブを身近にする」というテーマで、路上ライブアーティストと盛り上がりたい人をマッチさせるアプリを作りました。<br>
                                アーティストは自分のいる位置を発信します。盛り上がりたい人はスマホをペンライトと見立ててアーティストを応援します。<br>
                                詳しくは-><br>

                                このアプリケーションで、ベストエモーショナル賞を受賞させていただきました。
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols=12 sm=12 md=4 lg=4 xl=4>
                            <img id="resizeimage" src="../../assets/othlohack2019/othlohack2019_awards.jpg"/>
                        </v-col>
                        <v-col cols="12" sm="8" md="8" lg="8">
                            <h3 style="text-indent:1em">感想</h3>
                            <p>
                                初ハッカソンで賞をいただき、チームメンバーにも恵まれ最高のハッカソンになりました。<br>
                                ロボコンでの横のつながりはあったのですが、名古屋IT界隈の横のつながりができてよかったです。<br>
                                2020年には "スーパープログラマー" になって、自分みたいに初参加の学生をサポートできるようになりたいと思いました。<br>
                            </p>
                        </v-col>
                    </v-row>

                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "Othlohack2019_awards"
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

    }


</style>