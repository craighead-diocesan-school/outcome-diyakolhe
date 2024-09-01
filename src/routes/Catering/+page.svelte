<script>
  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"

  let info = ""
  let name = ""
  let phoneNumber = ""
  let email = ""
  let cateringInfo = ""

  function catering() {
    info = [name, phoneNumber, email, cateringInfo]
    //send the info variable to the business
    alert("Your message has been sent to the business, we will get in touch with you as soon as possible")
  }
</script>

<Header />
<Nav />

<main>
  <div class="columns">
    <div class="column is-two-fifths">
      <h2>From birthday parites, to events and functions, we cater for all.</h2>
      <br />
      <p>For any catering inquires please contact us through phone or leave your details below and we will get back to you as soon as possible</p>
      <br />

      <label>
        Name:<br />
        <input type="text" bind:value={name} />
      </label><br />
      <label>
        Phone Number:<br />
        <input type="text" bind:value={phoneNumber} />
      </label><br />
      <label>
        Email Address:<br />
        <input type="text" bind:value={email} />
      </label><br />
    </div>
    <div class="column">
      <img src="promo video image.jpg" alt="food" />
      <label>
        Catering Information (amount of people/possible food options etc.)<br />
        <input type="text" class="cateringInfo" bind:value={cateringInfo} />
      </label>
      <button class="button" on:click={catering}>Submit</button>
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

  input {
    width: 12cm;
    margin-bottom: 0.4cm;
  }

  .cateringInfo {
    height: 2.5cm;
    width: 19cm;
  }

  .button {
    margin-left: 16.4cm;
    font-size: 2ch;
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;
    color: white;
    background-color: #f27a2d;
  }
</style>
