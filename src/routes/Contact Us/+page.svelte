<script>
  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"

  let info = ""
  let name = ""
  let phoneNumber = ""
  let email = ""
  let message = ""

  function contactUs() {
    info = [name, phoneNumber, email, message]
    //this info variable will be sent to the business.
    alert("Your message has been sent to the business, we will be in touch with you as soon as possible")

    info = ""
    name = ""
    phoneNumber = ""
    email = ""
    message = ""
  }
</script>

@@ -1,94 +1,101 @@
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
        <input type="text" bind:value={name} />
      </label><br />
      <label>
        Phone Number:<br />
        <input type="text" bind:value={phoneNumber} />
      </label><br />
      <label>
        Email Address<br />
        <input type="text" bind:value={email} />
      </label><br />
    </div>
    <div class="column">
      <label>
        Enter your message:<br />
        <input type="text" class="info" bind:value={message} />
      </label><br />
    </div>
  </div>

  <div class="submit">
    <p>If you would like to directly get in touch with the business, please call or message on this phone number: 02112727868</p>
    <button class="button" on:click={contactUs}>Submit</button>
  </div>

  {info}
</main>
<Footer />

<style>
  .container {
    object-fit: fill;
  }

  label {
    color: white;
    padding-left: 0.4cm;
  }

  input {
    margin-left: 0.4cm;
    width: 10cm;
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
    width: 20.2cm;
  }
</style>
