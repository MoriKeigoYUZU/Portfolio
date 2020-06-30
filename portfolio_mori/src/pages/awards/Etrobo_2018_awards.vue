<template>
    <v-app>
        <v-container class="lighten-5">

            <v-row id="radius">
                <v-col>
                    <h1 id="center">ETロボコン2018年</h1>
                </v-col>
                <v-row>
                    <v-col cols=12 sm=12 md=5 lg=4 xl=4>

                        <img id="resizeimage" class="" src="../../assets/etrobo/2018/awards/ETrobo_machine.jpg"/>
                    </v-col>
                    <v-col>
                        <h3 style="text-indent:1em">ETロボコンとは...</h3>

                        <div>5年後、10年後に世界をリードするエンジニアの育成を目指し、初心者からベテランまで幅広い層が相互に刺激し合える場を提供する。</div>
                        <div>世界的にも珍しいソフトウエア重視の教育ロボコン（使用するロボットは同じ規格）である。</div>
                        <div>地区大会を行い優秀チームがチャンピオンシップ大会に出場できる。</div>
                        <div>他のロボコンと違う点として、 「競技」と「設計書(モデリング)」で勝負することになる。</div>
                        <div>なぜ、設計書が必要かというと、設計技術を学び開発工程に生かすという目的がある。</div>
                        <div>そのため、 設計図(モデル図)+競技(走行)=総合得点となる。</div>
                        <div>
                            <a href="https://docs.etrobo.jp/information/ET2020_0613_outline.pdf">ETロボコン2020開催概要より抜粋</a>
                        </div>

                    </v-col>
                </v-row>

                <v-row>

                    <v-col cols="12" sm="6" md="6" lg="6" >
                        <div id="radius">
                        <h3 style="text-indent:1em">経緯</h3>
                        <p >
                            高校時代は工業高校で、「僕は進学するし、就活なんて知らんわ」と思って大学に入学しました。<br>
                            しかし、入学してから途端に「なにかしなくては...」と思い、入学式で募集されていてプログラミングができるETロボコンをに参加しました。<br>
                            高校時代には近隣の大学に通わせていただきC#でUnityをやっていたので、組み込み技術については全くの素人でした。<br>
                            体験入部的なものでは、3人同期がいましたが、自分以外全滅したため先輩を独り占めしながら組み込み技術、モデルの書き方を教わりました。<br>
                        </p>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6">
                        <h3 style="text-indent:1em">地区大会</h3>
                        <p>
                            私の大学は東海地区のあるため、東海地区のプライマー部門に出場しました。<br>
                            東海地区は、非常に激戦区でありその代わり決勝進出の枠は多いという特徴的な地区でした。<br>
                            2018年プライマリー部門の競技は"走行タイム点-難所攻略点"で点数が付けられます。<br>
                            我々チーム八草は、難所を攻略できず決勝進出できないと思っていました。<br>
                            しかし、モデル図の点数が高く、走行タイムは地区最速で地区大会3位で決勝進出できました。<br>
                        </p>
                    </v-col>

                </v-row>
                <v-row>
                    <v-col cols="12" sm="5" md="5" lg="5">
                        <!--<h3 style="text-indent:1em">経緯</h3>-->


                        <img id="resizeimage1" src="../../assets/etrobo/2018/awards/ETrobo_award.jpg">
                    </v-col>
                    <v-col cols="12" sm="7" md="7" lg="7">
                        <h3 style="text-indent:1em">全国(決勝)大会</h3>
                        <p>
                            私の大学は東海地区のあるため、東海地区のプライマー部門に出場しました。<br>
                            東海地区は、非常に激戦区でありその代わり決勝進出の枠は多いという特徴的な地区でした。<br>
                            2018年プライマリー部門の競技は"走行タイム点-難所攻略点"で点数が付けられます。<br>
                            我々チーム八草は、難所を攻略できず決勝進出できないと思っていました。<br>
                            しかし、モデル図の点数が高く、走行タイムは地区最速で地区大会3位で決勝進出できました。<br>
                        </p>
                    </v-col>
                </v-row>


            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "Etrobo_2018_awards"
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