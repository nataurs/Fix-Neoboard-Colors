// ==UserScript==
// @name         Fix neoboards link colors
// @match        *://*.neopets.com/neoboards/*
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
#boardIndex h3,
#boardList ul .boardNavBottom .createTopicButton a, #boardList ul .boardNavTop .createTopicButton a,
#boardCreateTopic h1,
#boardTopic .topicReplyContainer .topicReplySubmit, #boardCreateTopic .topicCreateContainer .topicCreateSubmit,
#boardTopic ul .topicNavTop .replyTopicButton-top,
#boardList ul .pageNav .boardPageButton-active, #boardTopic .pageNav .boardPageButton-active,
#boardList ul .pageNav .boardPageButton:hover, #boardTopic .pageNav .boardPageButton:hover,
#boardTopic ul .topicReplyContainer .topicReplyTitle {
	background-color: #3b54b4 !important;
}
#boardIndex ul li h4, #boardIndex ul li p a,
#boardList .breadcrumbs a, #boardTopic .breadcrumbs a,
#boardList ul li .last a, #boardList ul li .last-mobile a, #boardList ul li .author-mobile a,
#boardList ul .pageNav .boardPageButton, #boardTopic .pageNav .boardPageButton,
#boardTopic ul li .boardPostByline a,
#boardTopic ul .topicNavTop .topicCreator,
.neoboardPenTitle,
.boardPostMessage a,
#boardList ul li .boardTopicTitle,
#boardIndex ul li .premiumBoardButton a {
	color: #3b54b4 !important;
}
#boardList ul .pageNav .boardPageButton:hover, #boardTopic .pageNav .boardPageButton:hover {
	border: 1px solid #3b54b4 !important;
}

/* Secondary */
#boardList ul .boardNavBottom .createTopicButton a:hover, #boardList ul .boardNavTop .createTopicButton a:hover,
#boardTopic .topicReplyContainer .topicReplySubmit:hover, #boardCreateTopic .topicCreateContainer .topicCreateSubmit:hover {
	background-color: #3b54b4 !important;
}
#boardIndex ul li h4:hover, #boardIndex ul li p a:hover,
#boardList .breadcrumbs a:hover, #boardTopic .breadcrumbs a:hover,
#boardList ul li .last a:hover, #boardList ul li .last-mobile a:hover, #boardList ul li .author-mobile a:hover,
#boardTopic ul .topicNavTop .replyTopicButton-top:hover,
#boardTopic ul li .boardPostByline a:hover,
#boardTopic ul .topicNavTop .topicCreator:hover,
.boardPostMessage a:hover,
#boardList ul li .boardTopicTitle:hover,
#boardIndex ul li .premiumBoardButton a:hover {
	color: #3b54b4!important;
}
`);
