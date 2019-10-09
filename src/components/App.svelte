<div class="wrapper">
	<div class="content">
		<h1>Hello Svelte3 + Parcel!</h1>
		<ul>
			<li><a href="https://parceljs.org/" target="_blank" rel="noopener noreferrer">Parcel</a></li>
			<li><a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a></li>
		</ul>
		<p>
			Hello { name }, the time is <span class="the-time">{ hours }:{ minutes }:{ seconds }</span>
		</p>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.content {
		text-align: center;
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

	let hours, minutes, seconds;

	$: {
	  hours = time.getHours();
	  minutes = time.getMinutes();
	  seconds = time.getSeconds();
	}
</script>
