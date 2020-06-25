<template>
    <v-app>
        <v-container class="lighten-5">

            <v-row>
                <v-col id="radius">
                    <h1 id="center">ETロボコン2018年</h1>
                    <img id="resizeimage" src="../../assets/etrobo/2018/awards/ETrobo_machine.jpg" height="797" width="1195"/>
                    <h3>ETロボコンとは...</h3>

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