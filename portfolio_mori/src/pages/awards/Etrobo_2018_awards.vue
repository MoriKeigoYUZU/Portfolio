<template>
    <v-app>
        <v-container class="lighten-5">

            <v-row id="radius">
                <v-col id="padding">

                    <v-row>
                        <v-col>
                            <h1 id="center">ETロボコン2018年 プライマリー部門優勝</h1>
                        </v-col>
                    </v-row>

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
                        <v-col cols="12" sm="6" md="6" lg="6">
                            <div id="">
                                <h3 style="text-indent:1em">経緯</h3>
                                <p>
                                    高校時代は工業高校で、「僕は進学するし、就活なんて知らない」と思いながら生活をしていました。<br>
                                    しかし、入学してから途端に「なにかしなくては...」と思い、入学式で募集されていてプログラミングができるETロボコンをに参加しました。<br>
                                    高校時代には近隣の大学に通わせていただきC#でUnityをやっていたので、組み込み技術については全くの素人でした。<br>
                                    同期が居なかったため、先輩を独り占めしながら組み込み技術、モデルの書き方を教わりました。<br>
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" lg="6">
                            <h3 style="text-indent:1em">地区大会</h3>
                            <p>
                                私たちのチームは東海地区のプライマー部門に出場しました。<br>
                                東海地区は非常に激戦区であり、その代わり決勝進出の枠は多いという特徴的な地区です。<br>
                                2018年プライマリー部門の競技は"走行タイム点-難所攻略点"で点数が付けられます。<br>
                                私たちチーム八草は、難所を攻略できず決勝進出できないと思っていました。<br>
                                しかし、モデル図の点数が高く、走行タイムは地区最速で地区大会3位で決勝進出できました。<br>
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="5" md="5" lg="5">
                            <youtube :video-id="videoId" width="100%"/>
                        </v-col>
                        <v-col cols="12" sm="7" md="7" lg="7">
                            <h3 style="text-indent:1em">全国(決勝)大会</h3>
                            <p>
                                約一ヶ月の準備期間を経て、パシフィコ横浜で開催された全国大会へ行きました。<br>
                                人生で始めての大きな大会だったのでとても緊張しました。<br>

                                プライマリー部門の決勝大会はモデルの評価はされず、競技のみで順位が付けられます。<br>

                                私たちの走行は難所をすべて攻略し、優勝しました。<br>
                                成功の鍵は、完全制覇するために走行スピードを落としたことだと思います。<br>
                                優勝するためには2回の走行両方完走することは必須になります。<br>
                                そのため、速度を上げすぎると前半に転倒する可能性が高くなります。<br>
                                私たちは、リスクを排除して完走する作戦に成功しました。<br>
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols=12 sm=12 md=4 lg=4 xl=4>
                            <img id="resizeimage" src="../../assets/etrobo/2018/awards/ETrobo_award.jpg"/>
                        </v-col>
                        <v-col cols="12" sm="8" md="8" lg="8">
                            <h3 style="text-indent:1em">感想</h3>
                            <p>
                                ETロボコンに加入した初年度に全国優勝メンバーの一員になれたことはラッキーでした。<br>
                                決勝チームで予選タイムが最遅だったため、良い意味で会場の期待を裏切ることもできてよかったです。<br>
                                加入した当時は"なにかしたい"という気持ちで入ったため、組み込みシステムやSI企業がどのようなものか知りませんでした。<br>
                                しかし、1年のうちから大手企業や同期の大学生と交流できる機会ができ、自分が何に向いているかもわかりました。<br>
                                次の年は自分がチームリーダーになるため、「来年も優勝したい」と意気込んでいました。<br>

                            </p>
                            <p>
                                来年->
                                <router-link to="/Etrobo_2019_production">Etrobo2019年ETロボコン</router-link>
                            </p>
                        </v-col>
                    </v-row>

                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>

  import Vue from 'vue'

  import VueYoutube from 'vue-youtube'

  Vue.use(VueYoutube)


  export default {
    name: "Etrobo_2018_awards",
    data() {
      return {
        videoId: '0vd_vBoP5ww?t=3855'
      }
    },
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


    #resizeimage {
        text-align: center;
        width: 100%;
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


        #resizeimage {
            text-align: center;
            width: 100%;
        }

        #padding {
            padding-left: 60px;
            padding-right: 60px;
        }

    }


</style>