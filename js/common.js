$(function () {
    tocController.init();
});

var tocController = {
    init: function () {
        // 모바일 TOC 토글
        this.tocTitle = $('#tocSection > .title');
        this.tocTitle.on('click', $.proxy(this.onClickTocTitle, this));
        // PC TOC 스크롤
        this.tocSection = $('#tocSection');
        $(window).on('scroll', $.proxy(this.onScroll, this));
    },
    onClickTocTitle: function () {
        $('div.markdownToc').toggleClass('d-none');
    },
    onScroll: function () {
        this.tocSection.css({'top': $(window).scrollTop() + 'px'});
    }
}