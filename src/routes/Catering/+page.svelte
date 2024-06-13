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
      <h2>From birthday parites, to events and functions, we cater for all.</h2>
      <p>For any catering inquires please contact us through phone or leave your details below and we will get back to you as soon as possible</p>
      <label>
        Name:<br />
        <input type="text" />
      </label><br />
      <label>
        Phone Number:<br />
        <input type="text" />
      </label><br />
      <label>
        Email Address:<br />
        <input type="text" />
      </label><br />
    </div>
    <div class="column">
      <img src="promo video image.jpg" alt="food" />
      <label>
        Catering Information (amount of people/possible food options etc.)<br />
        <input type="text" class="cateringInfo" />
      </label>
    </div>
  </div>
</main>
<Footer />

<style>
  h2 {
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;
    color: white;
    font-size: 4ch;
  }

  p {
    color: white;
    font-size: 2.5ch;
  }

  label {
    color: white;
  }

  .cateringInfo {
    height: 10ch;
    width: 20ch;
  }
</style>
