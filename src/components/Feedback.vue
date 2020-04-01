<template>
    <div id="feedback">
        <div class="">
            <img class="image" :src="posts.usersImg" height="50">
            <h6>{{posts.name}}</h6>
            <p>{{posts.msgs}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['posts']
}
</script>

<style scoped>
.image{
    border-radius: 100%;
    
}
</style>