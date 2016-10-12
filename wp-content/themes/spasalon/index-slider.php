<!-- Slider without Thumbnails -->
<div id="main" role="main">
<section class="slider">
  <div id="slider" class="flexslider">
	<ul class="slides">
	<?php
	$flex = new WP_Query(array('category_name' => 'Slider', 'posts_per_page' => 5));
	$defalt_arg =array('class' => "img-responsive");
	if($flex->have_posts()) :
	    while($flex->have_posts()) : $flex->the_post();
	?>
	  <li class="imagecap">
		<?php the_post_thumbnail('', $defalt_arg); ?>
		<h2><?php the_excerpt(); ?></h2>

	  </li>
	<?php
	    endwhile;
	endif;
	?>
	</ul>
  </div>
</section>
</div>
<!-- End of Slider without Thumbnails -->
<div class="clearfix"></div>