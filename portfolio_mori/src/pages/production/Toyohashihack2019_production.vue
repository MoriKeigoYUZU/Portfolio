<template>
    <v-app>
        <v-container class="lighten-5">
            <v-row id="radius">
                <v-col cols="" id="padding">
                    <v-row>
                        <v-col>

                            <v-row>
                                <v-col cols="4"></v-col>
                                <v-col id="center" cols="12" sm="4" md="4" lg="4">
                                    <img width="100%" src="../../assets/toyohashihack2019/header_logo.png"/>
                                </v-col>
                                <v-col cols="4"></v-col>
                            </v-row>
                            <p>
                                ええじゃないか学生ハッカソンin豊橋で「地域のイベントをもっと便利にわくわく！」というテーマで「Personer」作成しました。<br>
                            </p>
                            <p>
                                イベント主催者にイベントを登録してもらい、参加者はそのサイトを見ながら気になるイベントに行くというアプリケーションです。<br>
                                大きなイベントでは様々な場所でイベントを行っています。<br>
                                そこで、イベントまでの経路をマップにするのではなく、ダウジング形式にし、イベントに行く途中も楽しんでもらえるようにしました。<br>
                                また、ダウジングの案内終了時にイベントのアンケートを書いてもらう形式にしているため、来年以降に活用できるオープンデータ収集もできるようにもなっています。<br>
                                僕は、フロントを担当しました。<br>
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h3 style="text-indent:1em">Personer</h3>
                            <v-row>
                                <v-col cols="12" sm="3" md="3" lg="3">
                                    <img width="100%" src="../../assets/toyohashihack2019/toyo1.png"/>
                                </v-col>
                                <v-col cols="12" sm="3" md="3" lg="3">
                                    <img width="100%" src="../../assets/toyohashihack2019/1-1.jpg"/>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    1.事前にイベント開催者にイベントを追加してもらい、参加者は参加したいイベントを選択する。<br>
                                </v-col>
                            </v-row>

                            <hr width="100%" noshade id="center">

                            <v-row>
                                <v-col cols="12" sm="3" md="3" lg="3">
                                    <img width="100%" src="../../assets/toyohashihack2019/c_lv3.gif"/>
                                </v-col>
                                <v-col cols="12" sm="3" md="3" lg="3">
                                    <img width="100%" src="../../assets/toyohashihack2019/l_lv3.gif"/>
                                </v-col>

                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <p>
                                        2.選択したイベント会場への案内が始まる。<br>
                                        向かう道中も楽しんでもらえるように、マップでルート案内をせずにダウジング形式にしている。<br>
                                    </p>
                                </v-col>
                            </v-row>
                            <hr width="100%" noshade id="center">

                            <v-row>
                                <v-col cols="12" sm="3" md="3" lg="3">
                                    <img width="100%" src="../../assets/toyohashihack2019/3.jpg"/>
                                </v-col>
                                <v-col cols="12" sm="3" md="3" lg="3">
                                    <img width="100%" src="../../assets/toyohashihack2019/3-1.jpg"/>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <p>
                                        3.会場に到着したら、アンケートを回答できるようになっている。<br>
                                        来年以降に活用してもらうためのデータを収集する。<br>
                                    </p>
                                </v-col>
                            </v-row>
                            <hr width="100%" noshade id="center">
                            <v-row>
                                <v-col>
                                    <h3 style="text-indent:1em">使用技術</h3>
                                    <p>
                                        フロント : Vue<br>
                                        バック : Rails<br>
                                    </p>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "toyohashihack2019_production"
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


        #padding {
            padding-left: 60px;
            padding-right: 60px;
        }


    }
</style>