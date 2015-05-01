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
      <div class="header__bar">
        <div class="full-width-wrapper">

          <?php if ($site_name): ?>
            <div class="header__name-and-slogan" id="name-and-slogan">
                <h1 class="header__site-name" id="site-name">
                  <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
                </h1>
            </div>
          <?php endif; ?>

          <div class="header__inside">

            <div class="timer-text"><?php print t('The Conference Begins In:'); ?></div>
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



        </div> <!-- full-width-wrapper -->
      </div> <!-- header__bar -->

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



      <section class="banner">
        <div class="pattern">
          <div class="full-width-wrapper">
            <p><?php print t('June 24 2015'); ?> &middot; <span><?php print t('Ottawa'); ?></span>
            <h2><?php print t('All Things Drupal'); ?><br><span>In Our Nation's Captital</span></h2>
            <a href="/register"class="button window-btn">Register Now →</a>
          </div>
        </div>
      </section>
    
    </header>


    <div id="main">

    <div id="navigation">
      <div class="full-width-wrapper">
        <?php if ($main_menu): ?>
          <nav id="main-menu" role="navigation" tabindex="-1">
            <?php
            // This code snippet is hard to modify. We recommend turning off the
            // "Main menu" on your sub-theme's settings form, deleting this PHP
            // code block, and, instead, using the "Menu block" module.
            // @see https://drupal.org/project/menu_block
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
      </div> <!-- full-width-wrapper -->
    </div> <!-- #navigation -->

  <div class="full-width-wrapper">

    <div id="content" class="column" role="main">
        <?php print render($page['highlighted']); ?>
        <?php print $breadcrumb; ?>
        <a id="main-content"></a>
        <?php print render($title_prefix); ?>
        <?php if ($title): ?>
          <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
        <?php endif; ?>
        <?php print render($title_suffix); ?>
        <?php print $messages; ?>
        <?php print render($tabs); ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?>
          <ul class="action-links"><?php print render($action_links); ?></ul>
        <?php endif; ?>
        <?php print render($page['content']); ?>
        <?php print $feed_icons; ?>
    </div> <!-- #content -->



    <?php
      // Render the sidebars to see if there's anything in them.
      $sidebar_first  = render($page['sidebar_first']);
      $sidebar_second = render($page['sidebar_second']);
    ?>

    <?php if ($sidebar_first || $sidebar_second): ?>
      <aside class="sidebars">
        <?php print $sidebar_first; ?>
        <?php print $sidebar_second; ?>
      </aside>
    <?php endif; ?>
  
  </div> <!-- full-width-wrapper -->

<?php

  @include 'footer.inc';

?>