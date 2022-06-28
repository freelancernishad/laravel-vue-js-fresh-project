<template>
</template>

<script>
export default {

	created(){
        User.loggedOut();
        Notification.customSuccess('Logout successfully Complete');
		this.$router.push({name: '/login'})
	}
}
</script>

<style lang="css" scoped>
</style>
