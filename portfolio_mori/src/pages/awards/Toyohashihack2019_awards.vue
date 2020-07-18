<template>
    <v-app>
        <v-container class="lighten-5">
            <v-row id="radius">
                <v-col id="padding">

                    <v-row>
                        <v-col cols="12">
                            <h1 id="center">ええじゃないか学生ハッカソンin豊橋 WEBインパクト賞</h1>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols=12>


                            <div id="center">
                                <img width="100%" src="../../assets/toyohashihack2019/toyohashihack2019_carousel.jpg"/>

                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h3 style="text-indent:1em">ええじゃないか学生ハッカソンとは...</h3>

                            豊橋のまちが抱える課題について、学生が学生の目線でアイデアを考案し、ITとオープンデータを用いた手段で具体化することを目的としたハッカソン（製作会）イベントです。<br>
                            <div>
                                <a href="https://toyolab.connpass.com/event/151713/">connpassより引用</a>
                            </div>
                            豊橋で学生によって開催された小規模なハッカソンでした。<br><br>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="3" md="3" lg="3">
                            <img width="100%" src="../../assets/toyohashihack2019/toyohashihack2019_production.png"/>
                        </v-col>
                        <v-col cols="12" sm="9" md="9" lg="9">
                            <h3 style="text-indent:1em">作ったもの</h3>
                            <p>
                                作品主題として、"オープンデータを用いたサービスを作成する"、
                                作品副題として、"オープンデータとなり得るようなデータの収集・公開を促進する"でした。<br>
                                豊橋市が提供している<a href="https://temirin.jp">オープンデータ</a>が使いにくい形式のものやデータ数が少ないものが多かったので、副題にスポットを当てて作成しました。<br><br>

                                僕たちは、豊橋のイベントを盛り上げるために、「地域のイベントを もっと便利にわくわく！」というテーマでwebサービスを作成しました。<br>
                                内容としては、イベント主催者にイベントを登録してもらい、参加者はそのサイトを見ながら気になるイベントに行くというアプリケーションです。<br>
                                大きなイベントでは様々な場所でイベントを行っています。<br>
                                そこで、イベントまでの経路をマップにするのではなく、ダウジング形式にし、イベントに行く途中も楽しんでもらえるようにしました。<br>
                                また、ダウジングの案内終了時にイベントのアンケートを書いてもらう形式にしているため、来年以降に活用できるオープンデータ収集もできるるようにもなっています。<br>
                            </p>
                            <p>
                                詳しくは->
                                <router-link to="/Toyohashihack2019_production">制作物「Personer」</router-link>
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols=12 sm=12 md=4 lg=4 xl=4>
                            <img id="resizeimage" src="../../assets/toyohashihack2019/toyohashihack2019_awards.jpg"/>
                        </v-col>
                        <v-col cols="12" sm="8" md="8" lg="8">
                            <h3 style="text-indent:1em">感想</h3>
                            <p>
                                ええじゃないか学生ハッカソンin豊橋では、Webインパクト賞をいただきました。<br>
                                前回のOthloHackではほどんど開発に参加できず、悔しい思いをしました。そのため、2ヶ月間Vue.jsを勉強をして、このハッカソンに参加しました。<br>
                                4人メンバー中自分を含め、webを勉強している学生が2人しかいないため、残りの2人にはフロントとデザインを手伝ってもらいました。<br>
                                フロントは最小で開発したため、なんとか間に合い満足のいくアプリケーションを作成できました。<br><br>
                            </p>
                            <h3 style="text-indent:1em">成長を感じることができた</h3>
                            <p>
                                前回のハッカソンから2ヶ月後のハッカソンで満足のいくアプリケーションを作成できたことは自信に繋がりました。<br>
                                ロボコンは期限までに提出となるので受け身な勉強でしたが、web系の勉強は提出期限がなく自発的に勉強をしなければなりません。<br>
                                今まで僕は、自発的になにかに取り組む機会が少なかったです。<br>
                                しかし、Web系の勉強を始めて勉強することの楽しさに気が付き、"自分から積極的に勉強ができる自分" にも気が付くこともできました。<br>
                                このハッカソンで気が付いたこの気持ちを常に持ち続けて、更に自分を磨いていこうと決意しました。<br>
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
    name: "Toyohashihack2019_awards"
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