(function () {
    if ((typeof cocosAnalytics) !== 'undefined'){
        var initArgs = {
            appID: '623224426',
            storeID: 'H5',
            engine: 'cocos',
            callNumber: ''
        };
        if (!initArgs.appID || !initArgs.storeID) return console.error('Please set the appID of Cocos Analytics in the editor. If you publish on Android or iOS, please select the corresponding channel.');
        let cocosAnalyticsID1 = cocosAnalytics.init(initArgs);
        let _global = globalThis || window;
        _global.cocosAnalyticsID1 = _global.cocosAnalyticsID1 || cocosAnalyticsID1;
    }
})();