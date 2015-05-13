<?php
/**
 * @file
 * Returns the HTML for the footer region.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728140
 */
?>
<?php if ($content): ?>
  <footer id="footer" class="<?php print $classes; ?>">
    <div class="full-width-wrapper">
    <?php print $content; ?>
    <div class="colophon"><?php print t('Copyright &copy; ') . date(Y) . t(' DrupalCamp Ottawa. Built using the !cod', array('!cod' => l('Conference Organizing Distribution. ', 'https://www.drupal.org/project/cod', array('external' => TRUE)))); ?></div>
    </div>
  </footer>
<?php endif; ?>
