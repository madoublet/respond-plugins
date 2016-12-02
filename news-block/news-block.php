<div class="news-block" animation="<?php print $attributes['animation']; ?>">
<?php

  $route = $attributes['route'];
  $cycle = $attributes['cycle'];
  $route = ltrim($route, '/');
  $i = 0;

  foreach($components as $component) {

    if (0 === strpos($component['url'], $route)) {
      $delay = ($cycle - 3) * $i;
      print '<div respond-plugin type="component" component="'.$component['url'].'" runat="client" delay="'.$delay.'"></div>';
      $i++;
    }

  }


?>
</div>