<?php
	session_start();

	define( 'FACEBOOK_APP_ID', '2532904296869709' );
	define( 'FACEBOOK_APP_SECRET', '●●●●●●●●' );
	define( 'FACEBOOK_REDIRECT_URI', 'https://jawuatfdiaz.github.io/instagramApiGraph/instagram_graph_api/obtaining_access_token.php' );
	define( 'ENDPOINT_BASE', 'https://graph.facebook.com/v5.0/' );

	// accessToken
	$accessToken = 'YOUR-ACCESS-TOKEN-HERE';

	// page id
	$pageId = 'YOUR-PAGE-ID';

	// instagram business account id
	$instagramAccountId = 'YOUR-INSTAGRAM-ACCOUNT-ID';