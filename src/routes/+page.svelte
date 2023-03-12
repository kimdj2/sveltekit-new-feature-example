<script lang='ts'>
  import type { Snapshot } from "./$types";

	let formValue = {
		name: '',
		email: '',
		phone: ''
	}

  export const snapshot: Snapshot = {
    capture: () => formValue,
    restore: (value) => formValue = value
  };
</script>

<form class="content">
	<div class="content-value">
		<label>Name</label>
		<input type="text" bind:value={formValue.name} />	
	</div>
	<div class="content-value">
		<label>E-mail</label>
		<input type="text" bind:value={formValue.email} />
	</div>
	<div class="content-value">
  	<label>Telephone</label>
  	<input type="text" bind:value={formValue.phone} />
	</div>
</form>

<style lang="scss">
  .content {
		&-value {
			display: flex;
    	gap: 10px;
			justify-content: center;
			margin-bottom: 10px;
		}
  }
</style>
