import Useful from './useful'
import ScrollActions from './ScrollActions'
import LoadActions from './LoadActions'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
const _vidPlayer = new VideoPlayer().init();

var _articles = {};

var _downloadArticle = function(articleId ,callback){
    $.ajax({
        url: Useful.getRelativePath() + 'ArticleHandler.ashx',
        data: {article : articleId}
    }).done(callback);
}
var _getArticle = function(articleId, callback) {
    var article = _articles[articleId];
    if (article){
        callback(article);
    }
    else {
        _downloadArticle(articleId, function(articleHtml){
            _articles[articleId] = 'exists';
            callback(articleHtml);
        });
    }
}

var _articleExists = function(articleId){
    return _articles[articleId] ? true : false;
}

var _openArticle = function($elem){
    $elem.addClass('article-open');
}

var _closeArticle = function($elem){
    window.scrollTo(0 ,$elem.offset().top);
    $elem.removeClass('article-open');
    _stopVideos();
}
var _modifyHtml = function (html){
    return html;
    //var htmlResult = $.parseHTML(html)[1].innerHTML;
    //var innerHtmlElems = $.parseHTML(htmlResult);
    //var $articleHeader = $(innerHtmlElems[0]);
    //$articleHeader.find('span,div,h3').remove();
    //var $articleBody = $(innerHtmlElems[2]);
    //$articleBody.find('a').attr('target', '_blank');
    //htmlResult = $articleHeader.html() + $articleBody.html();
    //return htmlResult;
}
var _stopVideos = function(){
    const vids = _vidPlayer.getAllVideos();
    for (let vidIdx in vids) {
        const vidItem = vids[vidIdx];
        vidItem.providerInstance.stop();
    }
}

let $closeBtn;
export default class ArticleMgr {
    static SetEvents() {
        $('.article-btn-more').on('click', function(){
            var $article = $(this).closest('.article');
            if($article.hasClass('article-loading')) return false;

            var articleId = $article.data('article');
            if(_articleExists(articleId)) {
                if($article.hasClass('article-open')){
                    _closeArticle($article);
                }
                else{
                    _openArticle($article);
                }
            }
            else {
                $article.addClass('article-loading');
                _getArticle(articleId, function(res) {
                    $article.find('.article-content').html(_modifyHtml(res));
                    setTimeout(function(){
                        $article.removeClass('article-loading');
                        $article.find('.flp6ScriptContainer').each(function(){
                            var $self = $(this);
                            const _vidId = $self.attr('id');
                            var vidData = window['flp6VideoId' + _vidId];
                            const _selector = $self.attr('id', 'vid-' + $self.attr('id')).attr('id');
                            if (vidData) {
                                _vidPlayer.addVideo({
                                    id: _vidId,
                                    selector: _selector,
                                    poster: vidData.poster,
                                    sources: {
                                        m3u8: vidData.mainUrl,
                                        mp4: vidData.mp4Url
                                    }
                                }).init();
                            }
                        });
                        _openArticle($article);
                    }, 600);
                });
            }
        });

        ScrollActions.addScrollAction(function() {
            if(!$closeBtn) $closeBtn = $('.btn-close-article');
            const _activeArticle = Useful.getElementInViewPort(document.getElementsByClassName('article-open'), 0, true);

            if(_activeArticle) {
                var $article = $(_activeArticle);
                $closeBtn.attr('data-article', $article.attr('data-article'))
                         .addClass($article.attr('data-dir'))
                         .removeClass('hidden_elem');
            }
            else {
                $closeBtn.addClass('hidden_elem').removeClass('right left');
            }
        });

        LoadActions.addLoadAction(function(){
            $('.btn-close-article').on('click', function() {
                _closeArticle(
                    $('.article[data-article=@article]'.replace(/@article/, $(this).attr('data-article')))
                    );
            });
        });
    }
}