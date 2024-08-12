<script>
  //display the userOrder and other details that they can fill out such as their name etc.
  //button to select if the order is a delivery or a pick up

  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
</script>

<Header />
<Nav />
<!-- {userOrder} -->
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
<label>
  Other Information:<br />
  <input type="text" />
</label><br />

<button>Pick Up</button>
<button>Delivery</button>

<p>Payment Method</p>
<button>Cash</button>
<button>Eftpos</button>
<Footer />

<style>
  button {
    font-size: 2ch;
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;
    color: white;
    background-color: #f27a2d;
  }

  p {
    color: white;
  }

  label {
    color: white;
  }
</style>
