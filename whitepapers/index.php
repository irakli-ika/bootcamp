<?php
function getFileName($url)
{
    $array = explode("/", $url);
    return $array[1];
}
?>
<?php $source = glob("source/*") ?>
<ul>
    <?php foreach ($source as $link) : ?>
        <li><a href="<?= $link ?>" target="_blank"><?= getFileName($link) ?></a></li>
    <?php endforeach ?>
</ul>
<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    ul li {
        padding: 4px;
    }
</style>