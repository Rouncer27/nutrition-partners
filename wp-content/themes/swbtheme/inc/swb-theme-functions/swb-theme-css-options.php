<?php
/**
* Switchback Creative Custom Theme optional css
*
* @author Switchback Creative Inc.
* @package swbtheme
* @subpackage functions
* @version 1.0.6
*/


	function swb_enqueue_inline_styles() {

		$css = '';

		// Header image used in the page template one.

		$templateOneHeaderID = get_post_meta( get_the_id(), '_swb_theme_header_image', true );

		if( $templateOneHeaderID ) :

			$imageFull    = wp_get_attachment_image_src( $templateOneHeaderID, 'herofull' );
			$imageDesk    = wp_get_attachment_image_src( $templateOneHeaderID, 'fullbackground' );
			$imageMobile  = wp_get_attachment_image_src( $templateOneHeaderID, 'contained' );

			$css .='

				.swb-sec-header { background-image: url(' . esc_url( $imageMobile[0] ) . '); }

				@media screen and (min-width: 1024px) {
					.swb-sec-header { background-image: url(' . esc_url( $imageDesk[0] ) . '); }
				}

				@media screen and (min-width: 1600px) {
					.swb-sec-header { background-image: url(' . esc_url( $imageFull[0] ) . '); }
				}

			';

		endif;

		// End of section. //

		// Side by Side section used in the page template one. //

		$layouts = get_post_meta( get_the_id(), '_swb_theme_switchback_creative_template_one', true );

		if( $layouts ) :

			foreach( (array) $layouts as $count => $layout ) {

				switch( $layout ) {

					case 'swb_theme_side_by_side_section';

						$sectionSideXSideImgID = get_post_meta( get_the_id(), '_swb_theme_switchback_creative_template_one_' . $count . '_swb_theme_section_side_by_side_main_image', true );

						if( $sectionSideXSideImgID ) :

							$imageFull    = wp_get_attachment_image_src( $sectionSideXSideImgID, 'herofull' );
							$imageDesk    = wp_get_attachment_image_src( $sectionSideXSideImgID, 'fullbackground' );
							$imageMobile  = wp_get_attachment_image_src( $sectionSideXSideImgID, 'contained' );

							$css .='
								
								.swbsidebside__image { background-image: url(' . esc_url( $imageMobile[0] ) . '); }

								@media screen and (min-width: 1024px) {
									.swbsidebside__image { background-image: url(' . esc_url( $imageDesk[0] ) . '); }
								}

								@media screen and (min-width: 1600px) {
									.swbsidebside__image { background-image: url(' . esc_url( $imageFull[0] ) . '); }
								}

							';

						endif;	

					break;		

				}
			}

		endif;

		// End of section. //


		if( !empty( $css ) ) :

			wp_add_inline_style( 'main', $css );

		endif;	

	}

	add_action( 'wp_enqueue_scripts', 'swb_enqueue_inline_styles' );