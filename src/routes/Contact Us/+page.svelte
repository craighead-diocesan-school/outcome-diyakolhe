<script>
  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
</script>

<Header />
<Nav />

<main>
  <div class="container">
    <img src="promo video image.jpg" alt="food" />
  </div>

  <div class="columns">
    <div class="column is-one-third">
      <label>
        Name:<br />
        <input type="text" />
      </label><br />
      <label>
        Phone Number:<br />
        <input type="text" />
      </label><br />
      <label>
        Email Address<br />
        <input type="text" />
      </label><br />
    </div>
    <div class="column">
      <label>
        Enter your message:<br />
        <input type="text" class="info" />
      </label><br />
    </div>
  </div>

  <div class="submit">
    <p>If you would like to directly get in touch with the business, please call or message on this phone number: 02112727868</p>
    <button class="button">Submit</button>
  </div>
</main>
<Footer />

<style>
  .container {
    object-fit: fill;
  }

  label {
    color: white;
  }

  p {
    color: white;
  }

  .submit {
    display: flex;
    flex-direction: row;
  }

  .button {
    margin-left: 7cm;
    font-size: 2ch;
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;
    color: white;
    background-color: #f27a2d;
  }

  input {
    width: 10cm;
  }

  .info {
    height: 4cm;
    width: 21cm;
  }
</style>
