Page({
  data:{
    id:'',
    name:'马云',
    idCard:'130927111122223333',
    area:'XXXXXXXX省XXXXXXXXX市XX区XXXXXXXXX号',
    company:'XX省XX市XX县公安局',
    validTime:'2013年10月27日——2023年10月27日',

    business_name:'Tencent',
    business_address:"深圳",
    business_number:'123123456849616352',
    business_salary:'1000000000',
    business_date:'1998年11月',


    array: [{
      mode: 'aspectFill',
      text: '身份证正面',
      src:'/image/ant.png'
    },
    {
      mode: 'aspectFill',
      text: '身份证反面',
      src:'/image/ant.png'
    }, {
      mode: 'aspectFill',
      text: '营业执照',
      src:'/image/ant.png'
    }, {
      mode: 'aspectFill',
      text: '组织机构代码证',
      src:'/image/ant.png'
    }, {
      mode: 'aspectFill',
      text: '税务登记证正本',
      src:'/image/ant.png'
    }],

    record_state:'2',




    failReason:'身份证拍反了'
  },
  onLoad(query) {
    // 页面加载
    console.info(query);
    this.setData({
      id:query.id
    })
  },
  onReady() {
    // 页面加载完成
    console.log(this.data.id);
    dd.httpRequest({
      url: getApp().data.ip + '/center/recordDetail?recordId='+this.data.id,
      method: 'GET',
      headers: { 'content-type': 'application/json;charset=utf-8' },
      
      success: (res) => {
        console.log(res);
        let xx = new Array();
        res.data.data.imageList.forEach(function (element) {
          let x = new Object();
          x.mode = 'aspectFill';
          x.text = element.imageName;
          x.src = element.imageSrc;
          xx.push(x);
        });
        console.log(xx);
        this.setData({
            name: res.data.data.idcard_name,
            idCard:res.data.data.idcard_number,
            area:res.data.data.idcard_address,
            company:res.data.data.company,
            validTime:res.data.data.validTime,

            business_name:res.data.data.business_name,
            business_address:res.data.data.business_address,
            business_number:res.data.data.business_code,
            business_salary:res.data.data.business_salary,
            business_date:res.data.data.business_time,

            array:xx,

            record_state:res.data.data.record_state
        });
      },
      fail: function(res) {
        console.log(res);
      },
    });
  },
  previewImage(e) {
    console.log(e.currentTarget.dataset['name']);
    var url;
    switch (e.currentTarget.dataset['name']) {
      case 'scaleToFill':
        url = this.data.array[0].src;
        break;
      case 'aspectFill':
        url = this.data.array[1].src;
        break;
      case 'aspectFill':
        url = this.data.array[2].src;
        break;
      case 'aspectFill':
        url = this.data.array[3].src;
        break;
    }
    dd.previewImage({
      current: 1,
      urls: [''
      ].concat(url)
    });
  },
  updateToService(){ 
    dd.navigateTo({ url: '../service/service?param=edit&id='+this.data.id})
  },
});
