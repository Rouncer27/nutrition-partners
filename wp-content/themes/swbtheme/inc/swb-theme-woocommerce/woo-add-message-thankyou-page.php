<?php

function swb_thankyou_message() {
  ?>
  <div class="thankyou-message">
    <h4>THANK YOU!</h4>
  </div>  

  <?php
}



add_action( 'woocommerce_thankyou', 'swb_thankyou_message', 15 );

?>