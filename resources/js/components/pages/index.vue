<template>
	<form>
		<div class="container">
			<div class="row">
				<h1>Form</h1>
				<div class="col-md-8">
					<input class="form-control" type="text" v-model="form.url" placeholder="Enter url">
				</div>
				<div class="mt-3">
					<button @click="submit" class="btn-primary">Submit</button>
				</div>
			</div>
		</div>
	</form>
</template>
<script setup>
	import { reactive } from 'vue'

	const form = reactive({
	    url: '',
	})

	const submit = (e) => {
		e.preventDefault();
        axios.post('/url', form)
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
            
	}
</script>