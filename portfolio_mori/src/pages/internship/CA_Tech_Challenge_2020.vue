<template>
    <v-app>
        <v-container class="lighten-5">
            <v-row id="radius">
                <v-col id="padding">
                    <!--トップ画像-->
                    <v-row>
                        <v-col cols="0" sm=1 md=1 lg=1 xl=1>
                        </v-col>
                        <v-col cols="12" sm=10 md=10 lg=10 xl=10 id="center">
                            <img width="100%" src="../../assets/ca_challenge2020/top.png"/>
                        </v-col>
                        <v-col cols="0" sm=1 md=1 lg=1 xl=1>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col></v-col>
                    </v-row>
                    <h2 id="center">Dojoのインプットをすぐにアウトプットして成長を実感できた</h2>
                    <v-row>
                        <v-col></v-col>
                    </v-row>

                    <p>
                        2020年夏2つ目のインターンシップ、サイバーエージェントのプロトスプリントリーグに参加させていただきました。<br>
                        その体験記となります。<br>
                    </p>

                    <h3>
                        ・3days ゲームクライアント向け 開発型インターン ONLINEとは..
                    </h3>
                    <p>
                        3日間でお題に沿ったゲームをチームで開発し、ゲームとしての総合的な完成度の高さを競って頂きます。<br>
                        2019年9月に実施された「プロトスプリントリーグ」と同内容のインターンシップです。<br>
                        サイバーエージェントの現場で実際に働いているエンジニア社員のバックアップのもと、優勝を目指していただきます。<br>
                        <a id="green" href="https://www.cyberagent.co.jp/careers/students/event/detail/id=24427#:~:text=3days%20%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E5%90%91%E3%81%91%20%E9%96%8B%E7%99%BA%E5%9E%8B%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%83%E3%83%97%E3%81%A7%E3%81%AF%E3%80%813%E6%97%A5%E9%96%93,%E5%90%8C%E5%86%85%E5%AE%B9%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%83%E3%83%97%E3%81%A7%E3%81%99%E3%80%82">公式ページから抜粋</a><br>
                        というゲームジャム形式のインターンシップでした。
                    </p>

                    <h3>・期間</h3>
                    <p>
                        2020年10月19日~21日(3日間)
                    </p>

                    <h3>・制作したもの</h3>
                    <p>
                        光と影を利用する「パズル×脱出ローグライク」ゲームを作成しました。<br>
                        <router-link id="green" to="/HRR_production">詳しくは「High Right Road」へ</router-link>
                    </p>

                    <v-row>
                        <v-col cols="0" sm=1 md=1 lg=1 xl=1>
                        </v-col>
                        <v-col cols="12" sm=10 md=10 lg=10 xl=10 id="center">
                            <img width="100%" src="../../assets/ca_challenge2020/HighRigahtRoad.png"/>
                        </v-col>
                        <v-col cols="0" sm=1 md=1 lg=1 xl=1>
                        </v-col>
                    </v-row>

                    <h3>・参加した経緯</h3>
                    <p>
                        このインターンシップは申込みをしたわけでもなく、招待という形で参加しました。<br>
                        なぜ招待されたかというと、
                        <router-link id="green" to="/CA_Tech_Dojo_2020">前回のインターンシップ</router-link>
                        の希望者の中で合計8名選ばれるという形で選ばれました。<br>
                        他の用事もなかったため、「どうせなら」という軽い気持ちで参加希望を出したので、 選ばれたときはサイトを調べに行って驚きました。
                    </p>

                    <h3>・チームメンバー</h3>
                    <p>
                        チーム構成は、クライアント(Unity)エンジニア3人、バックエンド(Go)エンジニア1人(僕)でした。<br>
                        メンターの方は、クライアントエンジニア2人、バックエンドエンジニア1人に付いていただきました。(最終日は付きっきりで見てもらいました。ありがとうございました。)
                    </p>

                    <h3>・当日までにしたこと</h3>
                    <h4>
                        ・9/16(前々々日) 自己紹介
                    </h4>
                    <p>
                        顔合わせと、何を作りたいか少し話しました。
                    </p>
                    <h4>
                        ・9/17(前々日)
                    </h4>
                    <p>
                        全体のスケジュールと、作るゲーム(「シューティング」or「パズル」)を、どちらにするか相談しました。<br>
                        非常に悩みましたが、全員シューティングゲームは一度やったことがあるということで、挑戦したいということででパズルに決定しました。<br>
                    </p>
                    <h4>
                        ・9/18(前日)
                    </h4>
                    <p>
                        制作物がパズルに決まったので、内容を決めました。<br>
                        全員集まる時間までに作りたいゲーム案を考え発表しました。<br>
                        そこで、全員の評価が高かった光と影を用いたパズル×ローグライクゲームに決定しました。<br>
                    </p>

                    <h3>・開発期間</h3>
                    <h4>
                        ・9/19(1日目)
                    </h4>
                    <p>
                        作成物は17日に決めていたので、早速設計から始めました。<br>
                        <v-row>
                            <v-col cols="12" sm=6 md=6 lg=6 xl=6>
                                <b>DB設計</b><br>
                                <img width="100%" src="../../assets/ca_challenge2020/DB.jpg"/>
                            </v-col>
                            <v-col cols="12" sm=6 md=6 lg=6 xl=6>
                                <b>API設計</b><br>
                                <img width="100%" src="../../assets/ca_challenge2020/API.jpg"/>
                            </v-col>
                        </v-row>
                        設計作成後はそれぞれのAPIを作成していきました。<br>
                    </p>

                    <h4>
                        ・9/20(2日目)
                    </h4>
                    <p>
                        2日目の時点でバックエンドの作業は完成させました。<br>
                        go.modについて気になっていたので、メンターの方に少しお話をしていただきました。<br>
                    </p>

                    <h4>
                        ・9/21(最終日)
                    </h4>
                    <p>
                        クライアントのとの兼ね合いでAPIの設計を少し変更になったため対応しました。<br>
                        残りの時間は発表資料をを作成しました。<br>
                    </p>

                    <h3>
                        ・結果
                    </h3>
                    <p>
                        4位でした。。。。<br>
                        何回かハッカソンに参加してきた僕の肌感で優勝できるクオリティがあったと感じていたので、当時はとても悔しかったです。<br>
                        話を聞く限りでは、2位投票が非常に多かったみたいでした。<br>
                        後に冷静に考えてみると、やり込み要素や中毒性を意識した超王道パズルゲームを作成したので、ド迫力なシューティングゲームに1位投票が集まりやすいのではないかと思いました。<br>
                    </p>
                    <h3>
                        ・感想
                    </h3>
                    <p>
                        <router-link id="green" to="/CA_Tech_Dojo_2020">前回のインターンシップ</router-link>から1週間後にアウトプットの機会に招待された僕は恵まれていると思いました。(サイバーさんありがとう!!)<br>
                        自分の成長や今までチーム開発やハッカソンに何度か参加している経験を活かせつつ、初めての領域（ゲーム制作）に挑戦できたので大満足な3日感にでした。<br>
                        最高の夏になりました。ありがとうございました。<br>
                        ↓ Slackに送ったメッセージ<br>
                        <v-row>
                            <v-col cols="12" sm=7 md=7 lg=7 xl=7 class="center">
                                <img width="100%" src="../../assets/ca_challenge2020/Slack.jpg"/>
                            </v-col>
                        </v-row>
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "CA_Tech_Challenge_2020"
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