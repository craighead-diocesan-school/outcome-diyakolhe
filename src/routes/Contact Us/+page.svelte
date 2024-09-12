<script>
  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
</script>

<Header />
<Nav />

<main>
  <div class="columns">
    <div class="column is-two-fifths">
      <p>If you would like to directly get in touch with the business, please call or message on this phone number: 02112727868</p>
      <p>Visit our social media pages on Instagram and Facebook for more info @bombaystreetfeast</p>
    </div>
    <div class="column">
      <img src="promo video image.jpg" alt="food" />
    </div>
  </div>
</main>
<Footer />

<style>
  p {
    color: white;
    text-align: center;
    font-size: 3.5ch;
    font-family: "Karma", serif;
    font-weight: 400;
    font-style: normal;
    margin-left: 1ch;
    margin-top: 1ch;
  }
</style>
