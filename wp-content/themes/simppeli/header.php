<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Simppeli
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'simppeli' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
	
		<div class="site-branding">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<div class="site-description"><?php bloginfo( 'description' ); ?></div>
		</div><!-- .site-branding -->

		<?php get_template_part( 'menu', 'primary' ); // Loads the menu-primary.php template. ?>
	
		<?php if ( get_header_image() ) : // Header image. ?>
			<a class="header-image-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
				<img class="header-image" src="<?php header_image(); ?>" width="<?php echo esc_attr( get_custom_header()->width ); ?>" height="<?php echo esc_attr( get_custom_header()->height ); ?>" alt="" />
			</a>
		<?php endif; // End header image check. ?>
	
	</header><!-- #masthead -->

	<div id="content" class="site-content">
