<script lang="ts">
    import { fade, scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    let show = false;
    setInterval(() => {
   //logic goes here
    }, 1000);
    
</script>

<div >
    <button on:click={ () => show = !show }>click me</button>
    {#if show == true }
        <h1 in:scale out:fade >test</h1>
    {/if}
</div>