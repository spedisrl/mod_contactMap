<?php
/**
 * @version    1.0.x
 * @package    Contact map
 * @author     SPEDI srl http://www.spedi.it
 * @copyright  Copyright (c) Spedi srl.
 * @license    GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */

defined('_JEXEC') or die;

/* params */
$title_1      = $params->get('title-1');
$caption_1    = $params->get('caption-1');
$title_2      = $params->get('title-2');
$caption_2    = $params->get('caption-2');
$fullmap      = $params->get('full-map');
$hieght       = $params->get('hieght');
$social       = $params->get('social');
$googleMapKey = $params->get('gmapkey');

if($social){
  $social = array();
  // facebook
  $facebook = $params->get('facebook');
  if($facebook)
    $social['facebook'] = array('link' => $facebook, 'icon' => 'facebook');
  $instagram = $params->get('facebook');
  if($instagram)
    $social['instagram'] = array('link' => $instagram, 'icon' => 'instagram');
  $twitter = $params->get('facebook');
  if($twitter)
    $social['twitter'] = array('link' => $twitter, 'icon' => 'twitter');
}

if($fullmap){
  $col  = '12';
  $none = ' d-none';
} else{
  $col  = '6';
  $none = '';
}

$document = JFactory::getDocument();
$document->addStyleSheet(JUri::base(true).'/modules/'.$module->module.'/css/contactmap.min.css');

/* style */
require JModuleHelper::getLayoutPath($module->module, $params->get('layout', 'default'));
