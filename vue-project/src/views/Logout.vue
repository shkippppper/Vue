<template>
    <div></div>
</template>

<script>
import token from '../api/token'

export default {
    name: "LogoutPage",
    props: {
        userData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    mounted() {
        token.clearToken()
        this.$emit('clearUserData', { route: { name: 'home' } })
    }
}
</script>