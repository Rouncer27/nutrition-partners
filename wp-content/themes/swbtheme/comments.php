<?php
/**
 * The template for displaying comments
 *
 * The area of the page that contains both current comments
 * and the comment form.
 *
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage comments template
 * @version 3.1
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
  return;
}
?>

<div id="comments" class="comments-area">

	<?php

	function swb_theme__move_comment_field_to_bottom( $fields ) {
		$comment_field = $fields['comment'];
		unset( $fields['comment'] );
		$fields['comment'] = $comment_field;

		return $fields;
	}

	add_filter( 'comment_form_fields', 'swb_theme__move_comment_field_to_bottom' );

	comment_form( array(
	  //'comment_notes_after' => '<p>Thanks for the feedback!</p>',
	  'title_reply'         => 'What Did You Think?<br /> Leave a Comment',
	  'title_reply_before'  => '<h2 id="reply-title" class="comment-reply-title">',
	  'title_reply_after'   => '</h2>',
	  //'comment_field'       => '<p class="comment-form-comment"><label for="comment">' . _x( 'Comment', 'noun' ) . '</label><br /><textarea id="comment" name="comment" aria-required="true"></textarea></p>',
	) );

  ?>

  <?php if ( have_comments() ) : ?>
	<h2 class="comments-title">
	  <?php
		$comments_number = get_comments_number();
		if ( 1 === $comments_number ) {
		  /* translators: %s: post title */
		  printf( _x( 'One comment on &ldquo;%s&rdquo;', 'comments title', 'swbtheme' ), get_the_title() );
		} else {
		  printf(
			/* translators: 1: number of comments, 2: post title */
			_nx(
			  '%1$s comment on &ldquo;%2$s&rdquo;',
			  '%1$s comments on &ldquo;%2$s&rdquo;',
			  $comments_number,
			  'comments title',
			  'swbtheme'
			),
			number_format_i18n( $comments_number ),
			get_the_title()
		  );
		}
	  ?>
	</h2>

	<?php the_comments_navigation(); ?>

	<ol class="comment-list">
	  <?php
		wp_list_comments( array(
		  'style'       => 'ol',
		  'short_ping'  => true,
		  'avatar_size' => 42,
		) );
	  ?>
	</ol><!-- .comment-list -->

	<?php the_comments_navigation(); ?>

  <?php endif; // Check for have_comments(). ?>

  <?php
	// If comments are closed and there are comments, let's leave a little note, shall we?
	if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) :
  ?>
	<p class="no-comments"><?php _e( 'Comments are closed.', 'swbtheme' ); ?></p>
  <?php endif; ?>
  
</div><!-- .comments-area -->




















