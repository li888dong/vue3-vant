<template>
    <h1>{{ msg }}</h1>
    <span>plusOne is: {{ plusOne }}</span>
    <button @click="refcount++">refcount is: {{ refcount }}</button>
    <p>Edit <code>{{title}}</code> {{author}}</p>
</template>

<script>
    import {ref, reactive, toRefs, watch, computed, watchEffect} from "vue"

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        setup(props, ctx) {
            console.log(props, ctx)
            const refcount = ref(0)


            const book = reactive({
                author: 'Vue Team',
                year: '2020',
                title: 'Vue 3 Guide',
                description: 'You are reading this book right now ;)',
                price: 'free'
            })

            let plusOne = computed({
                get: () => refcount.value + 1,
                set: val => {
                    refcount.value = val - 1
                }
            })

            let {author, title} = toRefs(book)

            setInterval(() => {
                author.value += 'lidong'
                title.value = 'vue3 learn'
                plusOne.value += 100
            }, 4000)

            // 使用 effect() 函数定义副作用函数
            watch(author, () => {
                console.log('watch', refcount.value)
            })
            watchEffect(() => console.log('watchEffect', refcount.value))

            return {
                plusOne,
                refcount,
                author,
                title
            }
        },
        data() {
            return {
                count: 0
            }
        }
    }
</script>
