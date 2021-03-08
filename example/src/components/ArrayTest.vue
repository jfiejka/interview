<template>
    <div>
        {{ array }}
        {{ reversedArray }}
        <button @click="extendArray">add item</button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class ArrayTest extends Vue {
        @Prop() array!: number[];

        extendArray(){
            this.array.push(Math.floor(Math.random() * 3))
        }

        get reversedArray(){
          return this.array.reverse();
        }
    }
</script>
