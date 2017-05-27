<html><head>
<meta http-equiv="content-type" content="text/html; charset=windows-1252"></head><body>var
 postTitle=new Array();var postUrl=new Array();var postMp3=new 
Array();var postDate=new Array();var postLabels=new Array();var 
postBaru=new Array();var sortBy="titleasc";var tocLoaded=false;var 
numChars=250;var postFilter="";var numberfeed=0;function 
loadtoc(a){function b(){if("entry" in a.feed){var 
d=a.feed.entry.length;numberfeed=d;ii=0;for(var h=0;h<d;h++){var n="a.feed.entry[h];var" e="n.title.$t;var" m="n.published.$t.substring(0,10);var" j;for(var="" g="0;g&lt;n.link.length;g++){if(n.link[g].rel==&quot;alternate&quot;){j=n.link[g].href;break}}var" o="" ;for(var="" c="" ;if("category"="" in="" n){for(var="" f="c.lastIndexOf(&quot;;&quot;);if(f!=-1){c=c.substring(0,f)}postLabels[ii]=c;postTitle[ii]=e;postDate[ii]=m;postUrl[ii]=j;postMp3[ii]=o;if(h&lt;10){postBaru[ii]=true}else{postBaru[ii]=false}ii=ii+1}}}}}b();sortBy=&quot;titleasc&quot;;sortPosts(sortBy);sortlabel();tocLoaded=true;displayToc2();document.write('&lt;/br"><a href="http://www.khaldia-library.com/" style="font-size: 8px; text-decoration:none; color: #616469;">khaldia-library.com</a>')}function
 filterPosts(a){scroll(0,0);postFilter=a;displayToc(postFilter)}function
 allPosts(){sortlabel();postFilter="";displayToc(postFilter)}function 
sortPosts(d){function c(e,g){var 
f=postTitle[e];postTitle[e]=postTitle[g];postTitle[g]=f;var 
f=postDate[e];postDate[e]=postDate[g];postDate[g]=f;var 
f=postUrl[e];postUrl[e]=postUrl[g];postUrl[g]=f;var 
f=postLabels[e];postLabels[e]=postLabels[g];postLabels[g]=f;var 
f=postMp3[e];postMp3[e]=postMp3[g];postMp3[g]=f;var 
f=postBaru[e];postBaru[e]=postBaru[g];postBaru[g]=f}for(var b=0;b<posttitle.length-1;b++){for(var a="b+1;a&lt;postTitle.length;a++){if(d==&quot;titleasc&quot;){if(postTitle[b]">postTitle[a]){c(b,a)}}if(d=="titledesc"){if(postTitle[b]<posttitle[a]){c(b,a)}}if(d=="dateoldest"){if(postdate[b]>postDate[a]){c(b,a)}}if(d=="datenewest"){if(postDate[b]<postdate[a]){c(b,a)}}if(d=="orderlabel"){if(postlabels[b]>postLabels[a]){c(b,a)}}}}}function sortlabel(){sortBy="orderlabel";sortPosts(sortBy);var a=0;var b=0;while(b<posttitle.length){temp1=postlabels[b];firsti=a;do{a=a+1}while(postlabels[a]==temp1);b=a;sortposts2(firsti,a);if(b>postTitle.length){break}}}function
 sortPosts2(d,c){function e(f,h){var 
g=postTitle[f];postTitle[f]=postTitle[h];postTitle[h]=g;var 
g=postDate[f];postDate[f]=postDate[h];postDate[h]=g;var 
g=postUrl[f];postUrl[f]=postUrl[h];postUrl[h]=g;var 
g=postLabels[f];postLabels[f]=postLabels[h];postLabels[h]=g;var 
g=postMp3[f];postMp3[f]=postMp3[h];postMp3[h]=g;var 
g=postBaru[f];postBaru[f]=postBaru[h];postBaru[h]=g}for(var b=d;b<c-1;b++){for(var a="b+1;a&lt;c;a++){if(postTitle[b]">postTitle[a]){e(b,a)}}}}function
 displayToc(a){var l=0;var h="";var e="Judul Artikel";var m="Klik untuk 
sortir berdasarkan judul";var d="Tanggal";var k="Klik untuk Sortir 
bedasarkan tanggal";var c="Kategori";var 
j="";if(sortBy=="titleasc"){m+=" (descending)";k+=" (newest 
first)"}if(sortBy=="titledesc"){m+=" (ascending)";k+=" (newest 
first)"}if(sortBy=="dateoldest"){m+=" (ascending)";k+=" (newest 
first)"}if(sortBy=="datenewest"){m+=" (ascending)";k+=" (oldest 
first)"}if(postFilter!=""){j="Klik untuk menampilkan 
semua"}h+="";h+="";h+='";h+='";h+='";h+='";h+="";for(var g=0;g<posttitle.length;g++){if(a==""){h+='<tr></posttitle.length;g++){if(a==""){h+='<tr>';l++}else{z=postLabels[g].lastIndexOf(a);if(z!=-1){h+='';l++}}}h+="<table><tbody><tr><td class="toc-header-col1">';h+='<a href="javascript:toggleTitleSort();" title="'+m+'">'+e+"</a>";h+="</td><td class="toc-header-col2">';h+='<a href="javascript:toggleDateSort();" title="'+k+'">'+d+"</a>";h+="</td><td class="toc-header-col3">';h+='<a href="javascript:allPosts();" title="'+j+'">'+c+"</a>";h+="</td><td class="toc-header-col4">';h+="Download MP3";h+="</td></tr><tr><td class="toc-entry-col1"><a href="http://www.khaldia-library.com/2009/08/blog-post_05.html">'+postTitle[g]+'</a></td><td class="toc-entry-col2">'+postDate[g]+'</td><td class="toc-entry-col3">'+postLabels[g]+'</td><td class="toc-entry-col4"><a href="http://www.khaldia-library.com/2009/08/blog-post_05.html">Download</a></td></tr><tr><td class="toc-entry-col1"><a href="http://www.khaldia-library.com/2009/08/blog-post_05.html">'+postTitle[g]+'</a></td><td class="toc-entry-col2">'+postDate[g]+'</td><td class="toc-entry-col3">'+postLabels[g]+'</td><td class="toc-entry-col4"><a href="http://www.khaldia-library.com/2009/08/blog-post_05.html">Download</a></td></tr></tbody></table>";if(l==postTitle.length){var f='<span class="toc-note">Menampilkan Semua '+postTitle.length+" Artikel<br></span>"}else{var f='<span class="toc-note">Menampilkan '+l+" artikel dengan kategori '";f+=postFilter+"' dari "+postTitle.length+" Total Artikel<br></span>"}var b=document.getElementById("toc");b.innerHTML=f+h}function displayToc2(){var a=0;var b=0;while(b<posttitle.length){temp1=postlabels[b];document.write("<p>");document.write('<p><a href="http://www.khaldia-library.com/2009/08/blog-post_05.html">'+temp1+"</a></p><ol>");firsti=a;do{document.write("<li>");document.write('<a href="http://www.khaldia-library.com/2009/08/blog-post_05.html">'+postTitle[a]+"</a>");if(postBaru[a]==true){document.write(' - <strong><em><span style="color: rgb(255, 0, 0);">New !!</span> </em></strong>')}document.write("</li>");a=a+1}while(postLabels[a]==temp1);b=a;document.write("</ol>");sortPosts2(firsti,a);if(b&gt;postTitle.length){break}}}function
 
toggleTitleSort(){if(sortBy=="titleasc"){sortBy="titledesc"}else{sortBy="titleasc"}sortPosts(sortBy);displayToc(postFilter)}function
 
toggleDateSort(){if(sortBy=="datenewest"){sortBy="dateoldest"}else{sortBy="datenewest"}sortPosts(sortBy);displayToc(postFilter)}function
 showToc(){if(tocLoaded){displayToc(postFilter);var 
a=document.getElementById("toclink")}else{alert("Just wait... TOC is 
loading")}}function hideToc(){var 
a=document.getElementById("toc");a.innerHTML="";var 
b=document.getElementById("toclink");b.innerHTML='<a href="#" onclick="scroll(0,0); showToc(); Effect.toggle(\'toc-result\',\'blind\');">?? Menampilkan Daftar Isi</a> <img src="blogtoc-min_fichiers/new_1.gif">'}function looptemp2(){for(var a=0;a<numberfeed;a++){document.write("<br>");document.write('Post Link		  : <a href="http://www.khaldia-library.com/2009/08/blog-post_05.html">'+postTitle[a]+"</a><br>");document.write('Download mp3  : <a href="http://www.khaldia-library.com/2009/08/blog-post_05.html">'+postTitle[a]+"</a><br>");document.write("<br>")}};</numberfeed;a++){document.write("<br></posttitle.length){temp1=postlabels[b];document.write("<p></c-1;b++){for(var></posttitle.length){temp1=postlabels[b];firsti=a;do{a=a+1}while(postlabels[a]==temp1);b=a;sortposts2(firsti,a);if(b></postdate[a]){c(b,a)}}if(d=="orderlabel"){if(postlabels[b]></posttitle[a]){c(b,a)}}if(d=="dateoldest"){if(postdate[b]></posttitle.length-1;b++){for(var></d;h++){var></body></html>
