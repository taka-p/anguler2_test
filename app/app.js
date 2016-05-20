(function() {
    var AppComponent = ng
        .Component({
            // コンポーネント要素の宣言（my-app要素が処理を呼び出す - 厳密にはAppCompponentをインスタンス化）
            selector: 'my-app',
            template: '<h1>My SECOND Angular 2 app</h1>'
        })
        .Class({
            // コンポーネント振る舞いを定義する（ビューモデルとの受け渡し）
            constructor: function () {
            }
        });

    // nb.bootstrapメソッドによって、アプリケーションを起動する
    document.addEventListener('DOMContentLoaded', function () {
        ng.bootstrap(AppComponent);
    });
})();
