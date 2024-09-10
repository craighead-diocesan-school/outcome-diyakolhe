<script>
  export let form
</script>

<div>
  <fieldset>
    <legend>Send Emails</legend>
    <form method="POST" action="?/sendEmail">
      <div class="input">
        <label for="">To:</label>
        <input name="to" type="email" value="bombaystreetfeast@gmail.com" />
      </div>
      <div class="input">
        <label for="">Subject:</label>
        <input name="subject" type="text" value="" />
      </div>
      <div class="input">
        <label for="">Body:</label>
        <textarea name="body" rows="6" value="" />
      </div>
      <button type="submit">Send</button>
    </form>
    <p class="success">{form?.success || ""}</p>
  </fieldset>
</div>
