<div class="wrapper">
	<div class="content">
		<h1>Hello Svelte3 + Parcel!</h1>
		<ul>
			<li><a href="https://parceljs.org/" target="_blank" rel="noopener noreferrer">Parcel</a></li>
			<li><a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a></li>
		</ul>
		<p>
			Hello { name }, the time is <span class="the-time">{ hours }:{ minutes }:{ seconds } { tz }</span>
		</p>
	</div>
</div>

<style type="scss">
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		height: 100%;

		> .content {
			text-align: center;
		}
	}
	h1 {
		font-weight: 300;
	}
	h2 {
		font-weight: 500;
	}
	a {
		color: #ff3e00;
	}
	.the-time {
    font-weight: bold;
  }
	ul {
		list-style: none;
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

	let hours, minutes, seconds, tz;

	$: {
	  hours = time.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
	  minutes = time.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
		seconds = time.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
		tz = time.toLocaleTimeString().split(' ')[1]; // no reason for not using toLocaseTimeString other than keeping hours, minutes, seconds, tz all separate
	}
</script>
