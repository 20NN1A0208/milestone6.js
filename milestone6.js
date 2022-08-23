<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JavaScript  program</title>
</head>
<body>
<p><mark><i>Topic:control statements</mark></i></p>
<script>
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    document.write("Teja"+" ");
  }
  else if ( i%3 === 0 ) 
  {
    document.write( "Teena"+" " );
  }
  else if ( i%5 === 0 ) 
  {
    document.write("Chinnu"+" " );
  }
  else
  {
  document.write(i+" ");
  }
 
}
</script><br><br>
<p><mark><i>Topic:Error Handling</mark></i></p>
<script>
var z=reverseString("Talentio");
function reverseString(s) {
    try {
         s = s.split('').reverse().join('');
    } catch (e) {
         document.write('s.split is not a function');
    }

    document.write(s);
}