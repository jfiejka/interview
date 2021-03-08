<template>
    <div>
        <input type="text" v-model="search" />
        <ul>
            <li v-for="user in getFilteredUsers()">
                {{ `${user.name.first} ${user.name.last}` }}
            </li>
        </ul>
        <ArrayTest :array="array"/>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { getUsers } from "../api/getUsers";
    import ArrayTest from "../components/ArrayTest.vue";

    @Component({
        components: { ArrayTest }
    })
    export default class Home extends Vue {
        users: any[] = [];
        search = "";
        array = [3, 2, 1];

        getFilteredUsers() {
            return this.users.filter(user =>
                `${user.name.first} ${user.name.last}`.includes(this.search)
            );
        }

        async mounted() {
            this.users = await getUsers().then(r => r.results);
        }
    }
</script>
