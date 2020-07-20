if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../..//app');
require('../../pages/index/index');
require('../../pages/service/service');
require('../../pages/query/query');
require('../../pages/self/self');
require('../../pages/ocr/ocr');
require('../../pages/cloud/cloud');
require('../../pages/demo/demo');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}