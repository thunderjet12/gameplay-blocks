<?php
/**
 * An example view.
 *
 * Layout: layouts/example.php
 *
 * @package GameplayBlocks
 */

?>
<div class="gameplay_blocks__view">
	<?php \GameplayBlocks::render( 'partials/example', [ 'message' => __( 'Hello World!', 'gameplay_blocks' ) ] ); ?>
</div>
