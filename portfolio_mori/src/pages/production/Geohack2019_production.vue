<template>
    <v-app>
        <v-container class="lighten-5">

            <v-row id="radius">

                <v-row>
                    <v-col cols="12">
                        <h1 id="center">ETロボコン2019</h1>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" sm="4" md="4" lg="4">


                        <div id="center">
                            <img width="100%" src="../../assets/etrobo/2019/etrobo_2019_carousel.jpg"/>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="8" md="8" lg="8">

                        <h3 style="text-indent:1em">制作物</h3>

                        <p>
                            2019年のプライマリー部門に参加しました。<br>
                            ETロボコンは、モデル図の完成度とロボットの走行タイムで競われるため、モデル図と走行用のプログラムを制作しました。<br>
                            <router-link to="/Etrobo_2018_awards">詳しくは「ETロボコン2018」へ</router-link>

                        </p>

                    </v-col>


                </v-row>

                <v-row>
                    <v-col cols="12">
                        <h3 style="text-indent:1em">モデル図</h3>
                        <p>
                            審査方針である、「プライマリークラスのゴールである「技術の基礎を学ぶ」の達成度合いを確認するために、モデル開発の基礎となる「ソフトウェアの内容をモデルで正しく表現する」」を、機能モデル・構想モデル・振る舞いモデル・工夫点をそれぞれ検討して作成しました。<br>
                        </p>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" sm="4" md="4" lg="4">
                        <img width="100%" src="../../assets/etrobo/2019/model/スライド1.png"/>
                    </v-col>
                    <v-col cols="12" sm="4" md="4" lg="4">
                        <img width="100%" src="../../assets/etrobo/2019/model/スライド2.png"/>
                    </v-col>
                    <v-col cols="12" sm="4" md="4" lg="4">
                        <img width="100%" src="../../assets/etrobo/2019/model/スライド3.png"/>
                    </v-col>
                    <v-col cols="12" sm="4" md="4" lg="4">
                        <img width="100%" src="../../assets/etrobo/2019/model/スライド4.png"/>
                    </v-col>
                    <v-col cols="12" sm="4" md="4" lg="4">
                        <img width="100%" src="../../assets/etrobo/2019/model/スライド5.png"/>
                    </v-col>
                    <v-col cols="12" sm="4" md="4" lg="4">
                        <img width="100%" src="../../assets/etrobo/2019/model/スライド6.png"/>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <p>
                            誰が見てもわかるように、設計方式に乗っ取り作成しました。<br>
                        </p>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" sm="3" md="3" lg="3">
                    </v-col>
                    <v-col cols="12" sm="9" md="9" lg="9">
                        <h3 style="text-indent:1em">走行プログラム</h3>
                        <p>
                            ライントレースには様々な方式があるのですが、一番安定してトレースが行うことができる「PID制御」を採用しました。<br>
                            簡単に説明をすると、エアコンの温度調節に活用されている制御法であり、目標温度と室温の差分が多いときはハイパワーで制御し、目標温度との差分が小さくなれば、ローパワーで制御する制御法です。<br>
                            この制御には、計算式を立てて制御値を導くのですが、実機での走行は摩擦や誤差が生じるためチューニングが不可欠であり、４日間くらい調整しました。<br><br>
                            前年度では、２回の走行の合計点で順位が付けれられましたが、2019年から2回のうち速度が早い方のみで順位が付けられるため、難易度が高いシーソールートを捨てルックアップゲートルートのみに絞って作成しました。<br>
                            ルックアップゲートはロボットが倒立している状態ではくぐることができず、お尻についているテールを下ろし三点倒立で走行をしなければなりません。<br>
                            ロボットが斜めの姿勢となるため、ライントレースしているセンサが働かなくなってしまう問題に直面しました。<br>
                            そこで、テールを下ろす角度、センサのしきい値、ラインから外れてしまったときの復帰を調整し解決しました。<br><br>
                            ルックアップゲートルートのみですが、満足のいくプログラムを書くことができました。<br>
                        </p>
                    </v-col>
                </v-row>
                <v-row>

                    <v-col cols="12">
                        <h3 style="text-indent:1em">感想</h3>
                        <p>
                            2019年のETロボコンは予選敗退に終わりました。<br>
                            会場のライトが均一に照らされず、暗いところと明るいところがあり、ルックアップゲートをくぐる際にラインを完全に見失ってしまいました。<br>
                            会場の証明の明暗に左右されないように、走行前のキャリブレーションで調整できるように組んであり、練習でも部屋を暗くして走行して確認をしたのですが、詰めが甘かったです。<br>
                            完璧なパフォーマンスができず、とても悔しい思いをしました。<br><br>
                            しかし、多くの学びも有りました。<br>
                            ETロボコンに参加したことにより、組み込みシステムのなんたるかを知ることができました。<br>
                            また、自分には組み込みシステム業界には向いていないことがわかりました。<br>
                            僕が感じただけで実際には違うかも知れませんが、組み込みシステムを行っているメーカー企業は学歴重視、年功序列が強く有りました。<br>
                            懇親会で有名SI企業の新入社員に直接聞いたのですが、新入社員は上司に逆らうと昇進が遅くなるとおっしゃっていました。<br>
                            そのことを先輩に相談し、Web業界を知り勉強をはじめました。<br>
                            そのため、ETロボコン2019は、僕の人生の転換点になったと思います。<br>
                        </p>
                    </v-col>
                </v-row>


            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "Geohack2019_production"
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