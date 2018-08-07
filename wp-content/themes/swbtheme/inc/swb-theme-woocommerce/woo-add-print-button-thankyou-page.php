<?php

function swb_thankyou_print_button() {
  ?>
  <div class="print-button-section">
    <h4>For your records</h4>
    <p>Would you like to print this reciept?</p>
    <p class="button aqua-btn"><a href="javascript:window.print()">Printer Friendly Version</a></p>
  </div>  

  <?php
}



add_action( 'woocommerce_thankyou', 'swb_thankyou_print_button', 10 );

?>