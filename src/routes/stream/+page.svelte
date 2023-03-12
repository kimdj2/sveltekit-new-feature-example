<script lang='ts'>
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>
	{data.data}
</div>
<div>
	{#await data.streamed.data}
		Loading Streaed..
	{:then value}
		{value}
	{/await}
</div>

<style></style>
