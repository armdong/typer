(function(window, document, undefined) {

  document.addEventListener('DOMContentLoaded', function(e) {

    const tp = new typer('container');
    const hello = '晚上好，忙碌了一天，您辛苦了！';
    const message = '2015年9月20日，优麦医生APP横空出世';
    
    tp.type(hello).end().type(1000).del().end().type(message);
  }, false);

})(window, document);