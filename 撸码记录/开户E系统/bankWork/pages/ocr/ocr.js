Page({
  data: {
    showView: true,
    type: 'front',
    src: '/image/main/ocr.png',
    name: '袁崇焕',
    sex: '男',
    nationality: '汉',
    birth: '未知',
    number: '没有',
    address: '？',
    authority: '也没有',
    date: '都没有',
  },
  scrollToTop(e) {
    console.log(e);
    this.setData({
      scrollTop: 0,
    });
  },
  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        const next = (i + 1) % order.length;
        this.setData({
          toView: order[next],
          scrollTop: next * 200,
        });
        break;
      }
    }
  },
  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10,
    });
  },
  onLoad(service) {
    // 页面加载
    console.info(service);
    if (service.type == 'front') {
      this.setData({
        type: service.type,
        src: service.src,
        name: service.name,
        sex: service.sex,
        nationality: service.nationality,
        birth: service.birth,
        address: service.address,
        number: service.number,
      })
    }
    if (service.type == 'back') {
      this.setData({
        type: service.type,
        src: service.src,
        authority: service.authority,
        date: service.date,
      })
    }
  },
  copyOcr() {
    console.log(this.data.type);
    var that = this;
    let text;
    if (this.data.type == 'front') {
      text = '姓名 ' + this.data.name
        + '\n性别 ' + this.data.sex
        + '\n民族 ' + this.data.nationality
        + '\n出生日期 ' + this.data.birth
        + '\n地址 ' + this.data.address
        + '\n身份证号 ' + this.data.number;
    }
    if (this.data.type == 'back') {
      text = '签发机关 ' + this.data.authority
        + '\n有效期限 ' + this.data.date
      console.log(text);
    }
    dd.setClipboard({
      text: text,
    });
    dd.alert({
      title: `复制成功`
    });
  },
});
