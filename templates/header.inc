<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div id="page" data-state="slide-closed">
  <div class="sliding-canvas">


    <header class="header" id="header" role="banner">
      <div class="full-width-wrapper">
        <?php if ($logo): ?>
          <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
        <?php endif; ?>

        <?php if ($site_name || $site_slogan): ?>
          <div class="header__name-and-slogan" id="name-and-slogan">
            <?php if ($site_name): ?>
              <h1 class="header__site-name" id="site-name">
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
              </h1>
            <?php endif; ?>
          </div>
        <?php endif; ?>

        <div class="header__inside">
          <div id="timer">
            <div class="numbers" id="count2"></div>
            <ul>
              <li class="numbers" id="day"></li>
              <li class="numbers" id="hour"></li>
              <li class="numbers" id="min"></li>
              <li class="numbers" id="sec"></li>
            </ul>
            <ul>
              <li class="title" id="days"><?php print t('Days'); ?></li>
              <li class="title" id="hours"><?php print t('Hours'); ?></li>
              <li class="title" id="minutes"><?php print t('Minutes'); ?></li>
              <li class="title" id="seconds"><?php print t('Seconds'); ?></li>
            </ul>
          </div>

          <?php if ($secondary_menu): ?>
            <nav class="header__secondary-menu desktop-secondary" id="secondary-menu" role="navigation">
              <?php print theme('links__system_secondary_menu', array(
                'links' => $secondary_menu,
                'attributes' => array(
                  'class' => array('links', 'inline', 'clearfix'),
                ),
                'heading' => array(
                  'text' => $secondary_menu_heading,
                  'level' => 'h2',
                  'class' => array('element-invisible'),
                ),
              )); ?>
            </nav>
          <?php endif; ?>
        </div> <!-- header__inside -->

        <!-- Menu Toggle Icon -->
        <a class="menu-toggle" href="#main-menu"><i class="i-menu"></i><span><?php print t('Menu'); ?></span></a>  

         <div class="slide-menu">
            <div id="mobile_navigation">
              <?php if ($secondary_menu): ?>
                <nav class="header__mobile-secondary-menu" id="mobile-secondary-menu" role="navigation">
                  <?php print theme('links__system_secondary_menu', array(
                    'links' => $secondary_menu,
                    'attributes' => array(
                      'class' => array('links', 'inline', 'clearfix'),
                    ),
                    'heading' => array(
                      'text' => $secondary_menu_heading,
                      'level' => 'h2',
                      'class' => array('element-invisible'),
                    ),
                  )); ?>
                </nav>
              <?php endif; ?>

              <?php if ($main_menu): ?>
                <nav id="mobile-main-menu" role="navigation">
                  <?php
                  // This code snippet is hard to modify. We recommend turning off the
                  // "Main menu" on your sub-theme's settings form, deleting this PHP
                  // code block, and, instead, using the "Menu block" module.
                  // @see http://drupal.org/project/menu_block
                  print theme('links__system_main_menu', array(
                    'links' => $main_menu,
                    'attributes' => array(
                      'class' => array('links', 'inline', 'clearfix'),
                    ),
                    'heading' => array(
                      'text' => t('Main menu'),
                      'level' => 'h2',
                      'class' => array('element-invisible'),
                    ),
                  )); ?>
                </nav>
              <?php endif; ?>

              <?php print render($page['navigation']); ?>

            </div><!-- /#navigation -->
          </div><!-- /.slide-menu -->

        <?php print render($page['header']); ?>

      </div> <!-- full-width-wrapper -->

    <section class="banner">
      <?php if ($site_slogan): ?>
        <h2 class="header__site-slogan" id="site-slogan"><?php print $site_slogan; ?></h2>
      <?php endif; ?>
    </section>
    
    </header>


    <div id="main">