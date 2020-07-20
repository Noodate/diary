Page({
  data: {
    onItemTap: 'handleListItemTap',
    header: '任务列表',
    num:'',
    bus_name:'',
    data: []
  },
  onReady() {
    var that = this;
    // 页面加载完成
    dd.httpRequest({
      url: getApp().data.ip + '/center/queryRecord',
      method: 'GET',
      headers: { 'content-type': 'application/json;charset=utf-8' },
      dataType: 'json',
      success: function(res) {
        console.log(res);
        that.setData({
          data: res.data,
        });
      },
      fail: function(res) {
        console.log(res);
      }
    });
  },
  handleListItemTap(e) {
    console.log(e);
    dd.navigateTo({ url: '../service/service?param=edit&id=' + e.currentTarget.dataset.index })
  },
  translateList(data) {
    data.forEach(function(obj) {
    })
  },
  bindKeyInput(e) {
    switch (e.target.dataset.index) {
      case 'num':
        this.setData({
          num: e.detail.value,
        });
        break;
      case 'bus_name':
        this.setData({
          bus_name: e.detail.value,
        });
        break;
    }
  },
  delTask(e) {
    let that = this;
    console.log(e.currentTarget.dataset.index);
    dd.confirm({
      title: '温馨提示',
      content: '是否确定删除此单据',
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      success: (result) => {
        if (result.confirm) {
          dd.httpRequest({
            url: getApp().data.ip + '/center/deleteRecord',
            method: 'POST',
            data: {
              recordIds: e.currentTarget.dataset.index,
            },
            dataType: 'json',
            success: function(res) {
              dd.showToast({
                content: '删除成功', // 文字内容
              });
              that.getRecordList();
            },
            fail: function(res) {
              that.getRecordList();
              console.log(res);
            },
          });
        }
      },
    });
  },
  queryByCondition() {
    dd.showLoading({
      content: '查询中...',
    });
    let that=this;
    let bus_name=encodeURIComponent(this.data.bus_name);
    console.log('busName:'+bus_name);
    dd.httpRequest({
      url: getApp().data.ip + '/center/queryRecord?identifyNo='+this.data.num+'&companyName='+bus_name,
      method: 'GET',
      success: function(res) {
        dd.hideLoading();
        if(res.data.length==0){
          dd.alert({content:'无结果'});
        }
        console.log(res.data.length);
        that.setData({
          data: res.data,
        });
      },
      fail: function(res) {
        dd.hideLoading();
        console.log(res);
      }
    });
  },
});
