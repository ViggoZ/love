
  (function ($) {
    var _host = 'http://love.alibabaued.com';
    var _wxReady = false;
    var _shareUrl = encodeURIComponent(window.location.href.split('#')[0]);
    var _defaultTitle = '怎样的设计才是更好的设计？加入蚂蚁公益设计，让灵感为关爱而生！';
    var _defaultDesc = '设计，为每一个人；设计，让人人都受益';
    var _defaultImage = 'https://gw.alicdn.com/tfs/TB1MqVMnTtYBeNjy1XdXXXXyVXa-300-300.png';
    
    function wxInit(){
        $.ajax({
            url: 'http://love.alibabaued.com/getsignature',
            type: 'post',
            data: {
                url: _shareUrl
            },
            dataType: "json",
            success: function (res) {
                var _res = typeof res == "string" ? JSON.parse(res).data : res.data;
                wx.config({
                    debug: false,
                    appId: _res.appId,
                    timestamp: _res.timestamp,
                    nonceStr: _res.nonceStr,
                    signature: _res.signature,
                    jsApiList: [
                        // 所有要调用的 API 都要加到这个列表中
                        'onMenuShareAppMessage',
                        'onMenuShareTimeline'
                    ]
                });
                //分享给朋友
                wx.ready(function () {
                    _wxReady = true;
                    //pengyou
                    wx.onMenuShareAppMessage({
                        title: _defaultTitle, // 分享标题
                        desc: _defaultDesc, // 分享描述
                        link: "http://love.alibabaued.com/index.html", // 分享链接
                        imgUrl: _defaultImage, // 分享图标
                        type: '', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    //pyq
                    wx.onMenuShareTimeline({
                        title: _defaultTitle, // 分享标题
                        link: "http://love.alibabaued.com/index.html", // 分享链接
                        imgUrl: _defaultImage, // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    wx.error(function (res) {
                        // alert("errorMSG:"+ JSON.stringify(res));
                    });
                });
            },
            error: function () {
                // alert('fail');
            }
        });
    }
  
    wxInit();
  })(jQuery);
