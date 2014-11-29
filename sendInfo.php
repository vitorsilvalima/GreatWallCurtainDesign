<?xml version = “1.0” encoding = “utf-8” ?>
<!DOCTYPE html>
<html>
	<head>
		<title>Great Wall Curtain Design</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" type="text/css" href="./Styles/mainStyle.css"/>
	</head>
	<body>
		<div id="mainContainer">
			<div id="container">
				<header>
					<div id="mainHeader">
						<a href="index.html" id="logoWeb"><img alt="Logo" src="./Images/webSiteIcon.png"/></a>
						<h1>Great Wall Curtain Design</h1>
					</div>
					<div id="socialMedia">
						<ul>
							<li><a href="https://www.facebook.com/pages/Great-Curtain-Desing/750672265001756" target="_blank"><img src="./Images/facebook-icon.png" alt="facebook link" /></a></li>
							<li><a href="https://www.youtube.com/watch?v=oo0Mn5ebKgM" target="_blank"><img src="./Images/youtube-icon.png" alt="youtube link"/></a></li>
						</ul>
					</div>
				</header>
				<nav>
					<ul id="mainMenu">
						<li><a href="index.html">Home</a ></li>
						<li><a href="curtainPage.html">Curtains</a>
						</li>
						<li><a href="designPage.html">Design</a></li>
						<li><a href="contactPage.html">Contact</a></li>
						<li><a href="historyPage.html">History</a></li>
						<li><a href="mapPage.html">Map</a></li>
					</ul>
				</nav>
			</div>
			<div id="wireframe">
				<main>
					<article>
						<h2>Message</h2>
						<p>
							<?php
								echo 'Welcome '. $_POST["idName"] .'<br> You information has been sent!<br>';
								// the message
								$msg = 'Client Name: '. $_POST["idName"];
								$msg .="\n".'Telephone: '. $_POST["idTelephone"];
								$msg .="\n".'Email: '. $_POST["idEmail"];
								$msg .="\n".'Commentary: '. $_POST["idCommentary"];
								// send email
								mail("benli543364@gmail.com","Client Message",$msg);
							?>
						</p>
					</article>
				</main>
			</div>
			<footer>
				<h3>Email: benli543364@gmail.com</h3>
				<h3>Telephone: 778-891-3001</h3>
				<h3>&copy;Great Wall Curtain Desing</h3>
			</footer>
		</div>
	</body>
</html>