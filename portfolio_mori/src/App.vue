<template>
    <v-app>
        <v-app-bar color="white">
            <v-toolbar-title
                    color="black"
                    class="font-weight-black headline"
            >
                <router-link id="router-link" to="/">
                    MORI KEIGO もり けいご
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
        >
            <v-list nav dense>
                <v-list-item-group
                        v-model="group"
                        active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

        </v-navigation-drawer>
        <router-view/>
    </v-app>
</template>
<script>
  export default {
    name: 'App',
    components: {},
    data: () => ({
      drawer: false,
    }),
  };
</script>

<style scoped>
    #router-link {
        text-decoration: none;
        color: black;
    }
</style>