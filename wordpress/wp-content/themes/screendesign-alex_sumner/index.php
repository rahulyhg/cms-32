<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>

<section id="banner">
	<article>
		<span>
				Webdesign mit
				Sinn und Zweck
				und XYZ
		</span>
		<button onclick="void(0)">Angebot einholen</button>
	</article>
</section>
<section class="main">
	<article id="leistungen">
		<h2>Leistungen</h2>
		<div id="wrapper">
			<div onclick="#" class="leistung">
						<h3>Design</h3>
						<img alt="design" src="<?php echo get_template_directory_uri(); ?>/images/icons/design.png" class="leistung">
			</div>
			<div class="leistung">
						<h3>Strategie</h3>
						<img alt="strategy" src="<?php echo get_template_directory_uri(); ?>/images/icons/strategy.png" class="leistung">
			</div>
			<div class="leistung">
						<h3>Consulting</h3>
						<img alt="consulting" src="<?php echo get_template_directory_uri(); ?>/images/icons/consulting.png" class="leistung">
			</div>
		</div>
	</article>
	<article id="news">
		<h2>News</h2>
		<div id = "wrapper">
			<div>
				<h3>Das Jugendwort des Jahres</h3>
				<p class="post">Eine fachmännische Jury von fünf
					77 jährigen pensionierten Bibliothekaren hat
					nach langer Überlegung das Jugendwort des Jahres gewählt.
				</p>
			</div>
			<div>
				<h3>#MCMSGA</h3>
				<p class="post">
					Unter dem Hashtag "MCMSGA" (make content management
					systems great again)
					hat der erfahrene Webprogrammierer und Designer
					@j_rubenz die Content Management Systeme mit dem
					meisten swag für Sie zusammengefasst.
				</p>
			</div>
			<div>
				<h3>Kristina Schneider in Salzburg</h3>
				<p class="post">
					Vergangenes Wochenende war die renommierte UX
					Designerin und CSS Enthusiastin Kristina Schneider
					zu Gast an der FH Salzburg. Sie versuchte, mit ihrem
					Know-How angehende Webpros für CSS zu begeistern.
				</p>
			</div>
		</div>
	</article>
	<article id="referenzen">
			<h2>Referenzen</h2>
			<div id="wrapper">
				<div onclick="#" class="leistung">
					<h3>Fakebook</h3>
					<img alt="fakebook" src="<?php echo get_template_directory_uri(); ?>/images/icons/Fakebook.jpeg" class="leistung">
				</div>
				<div class="leistung">
					<h3>#MCMSGA</h3>
					<img alt="MCMSGA" src="<?php echo get_template_directory_uri(); ?>/images/icons/CMSGA.jpeg" class="leistung">
				</div>
				<div class="leistung">
					<h3>Mitter</h3>
					<img alt="mitter" src="<?php echo get_template_directory_uri(); ?>/images/icons/Mitter.png" class="leistung">
				</div>
			</div>
	</article>
</section>
<footer>
		<h3>
				&copy; <a title="Senden Sie mir eine Kontaktanfrage"
						 class="special"
						 href="mailto:alex@sumner-web.at">Alex Sumner</a>, Webdesigner zu Salzburg
		</h3>
<?php get_footer(); ?>
