<script>
  export let itemName
  export let itemPrice
  export let itemImage
</script>

<img src={itemImage} alt="item" />

<div class="itemInfo">
  <h2 class="itemName">{itemName}</h2>
  <h2 class="price">{itemPrice}</h2>
</div>

<style>
  img {
    padding-top: 1ch;
    height: 5cm;
    width: 5cm;
    margin-left: 2ch;
  }

  h2 {
    color: white;
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;
  }

  .price {
    padding-left: 2ch;
  }

  .itemInfo {
    display: flex;
    flex-direction: row;
    padding-left: 1ch;
  }
</style>
