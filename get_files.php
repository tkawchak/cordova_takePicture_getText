<?php
//echo "/usr/local/lib/python2.7/site-packages/" > /Library/Python/2.7/site-packages/wolframalpha.pth
$myfile = fopen("helloworld.txt", "r") or die("Unable to open file!");
//For one line of text
//$textfile = fgets($myfile);
//Get more than one line
while(!feof($myfile)) {
  $textfile = fgets($myfile);
  $result = exec("python cordova_takePicture_getText.py '$textfile'") or die("Dang bruh");
  echo $result . PHP_EOL;
}

fclose($myfile);
?>
