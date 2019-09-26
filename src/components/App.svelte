<h1>Hello Svelte3 + Parcel!</h1>
<div>
	<ul>
		<li><a href="https://parceljs.org/" target="_blank" rel="noopener noreferrer">Parcel</a></li>
		<li><a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a></li>
	</ul>
</div>

<p>
	Hello { name }, the time is <span class="the-time">{ hours }:{ minutes }:{ seconds }</span>
</p>

<style>
  .the-time {
    font-weight: bold;
  }
</style>

<script>
	import { onMount } from "svelte";

	export let name = "Anonymous";
	let time = new Date();

	onMount(() => {
	  const timer = setInterval(() => {
	    time = new Date();
	  }, 1000);

	  return () => {
	    clearInterval(timer);
	  };
	});

	let hours, minutes, seconds;

	$: {
	  hours = time.getHours();
	  minutes = time.getMinutes();
	  seconds = time.getSeconds();
	}
</script>