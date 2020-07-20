Page({
  data: {
    disabled: false,
    corporationOrOperator: 'corporation',
    show_checkbox_dialog: false,
    service: {},
    //媒体文件重命名
    renameShow: false,
    rename: '',
    renameSrc: '',
    //公司
    business_name: '',
    business_type: '',
    business_address: '',
    business_salary: '',
    business_time: '',
    business_term: '',
    business_scope: '',
    business_reg_num: '', //营业执照编号
    business_lawer: '', // 法人
    business_date: '',// 成立日期
    business_term: '',// 营业期限
    business_area_code: '',// 地区代码
    industry_type: '',
    business_area_code: '',
    industry_type_items: [
      { name: 'A', value: 'A' },
      { name: 'B', value: 'B' },
      { name: 'C', value: 'C' },
      { name: 'D', value: 'D' },
      { name: 'E', value: 'E' },
      { name: 'F', value: 'F' },
      { name: 'G', value: 'G' },
      { name: 'H', value: 'H' },
      { name: 'I', value: 'I' },
      { name: 'J', value: 'J' },
      { name: 'K', value: 'K' },
      { name: 'L', value: 'L' },
      { name: 'M', value: 'M' },
      { name: 'N', value: 'N' },
      { name: 'O', value: 'O' },
      { name: 'P', value: 'P' },
      { name: 'Q', value: 'Q' },
      { name: 'R', value: 'R' },
      { name: 'S', value: 'S' },
      { name: 'T', value: 'T' },
    ],
    business_phone: '',
    business_post_code: '',
    //财会
    financeManagerName: '',
    financeManagerPhone: '',
    financeManagerMobilePhone: '',
    financeName: '',
    financePhone: '',
    financeMobilePhone: '',
    verifyFinanceName: '',
    verifyFinancePhone: '',
    verifyFinanceMobilePhone: '',
    verifyFinanceAddress: '',
    //开户许可证
    approval_number: '',
    depositor_name: '',
    depositor_type: '',
    proveFileType: '',
    card_number: '',
    law_name: '',
    card_type: '',
    card_num: '',
    lawFixPhone: '',// 法人固定电话
    lawMovePhone: '',// 法人移动电话
    reconciliationMethod: '',
    reconciliationFrequency: '',
    is_check: '',
    ifOpen: '', //是否开立
    //法人
    idCardFrontSrc: '',
    idCardBackSrc: '',
    selfImageSrc: '',
    name: '',
    sex: '',
    nationality: '',
    birth: '',
    number: '',
    address: '',
    authority: '',
    date: '',
    ssim: '',
    //经办人
    operatorFrontPath: '',
    operatorBackPath: '',
    operatorPeoplePath: '',
    operatorName: '',
    operatorSex: '',
    operatorNationality: '',
    operatorBirth: '',
    operatorNumber: '',
    operatorAddress: '',
    operatorAuthority: '',
    operatorDate: '',
    primaryComparedResult: '',

    //杂七杂八
    userid: '',
    record_id: '',
    previewImageIndex: 0,
    mediaList: [
      {
        type: 'image',
        src: '/image/main/mediaAddImage.png',
        name: '',
        imageIndex: 0
      },
    ],
    modelList: [
      {
        src: '/image/main/xls.png',
        index: 'moduleOne',
        name: '模板一'
      },
      {
        src: '/image/main/xls.png',
        index: 'moduleTwo',
        name: '模板二'
      },
      {
        src: '/image/main/word.png',
        index: 'moduleThree',
        name: '模板三'
      },
      {
        src: '/image/main/xls.png',
        index: 'moduleFour',
        name: '模板四'
      },
      {
        src: '/image/main/word.png',
        index: 'moduleFive',
        name: '模板五'
      },
    ],
    arrayExamine: [],
    arrIndex: 0,
    type_array: ['有限责任公司', '股份有限责任公司', '个人独资企业', '合伙企业'],
    depositor_array: [
      '企业法人', '非法人企业', '机关', '事业单位', '社会团体',
      '民办非企业组织', '个体工商户', '军队单位', '武警部队单位', '律师事务所', '税务师事务所',
      '外地常设机构', '大使馆、领事馆', '外资企业驻华代表处', '外资企业办事处', '单位设立的独立核算的附属机构',
      '类似民办学校', '福利机构', '居民委员会、村民委员会、社区委员会', '其他组织'
    ],
    proveFileType_array: [
      '《企业法人营业执照正本》', '《营业执照》或《个人独资企业营业执照》或《合伙企业营业执照》或《合伙企业分支机构营业执照》', '《中央预算单位开立银行账户批复书》或批文', '《事业法人登记证书》或《中央预算单位开立银行账户批复书》或开户证明', '《社会团体法人登记证书》或《社会团体分支机构登记证书》或《社会团体代表机构登记证书》或《工会法人资格证书》或《工会法人资格证书》或《宗教活动场所登记证》',
      '《民办非企业单位登记证书》', '《个体工商户营业执照》', '《军队单位开户核准通知书》或《军队单位开户核准通知书》', '《武警部队单位开户核准通知书》', '《律师事务所执业许可证》',
      '《税务师事务所执业证》', '《驻X办事机构登记证》', '政府外事部门的批文', '《外国（地区）企业常驻代表机构登记证》', '《外商投资企业办事机构注册证》',
      '隶属单位批准设立独立核算的附属机构的批文、隶属单位的基本存款账户开户许可证、隶属单位组织机构代码及负责人身份证明文件', '《民办非企业单位登记证》或《社会力量办学许可证》', '《民办非企业单位登记证》或《社会福利机构执业证照》', '其主管部门的批文或由民政部门和乡以上级政府（含乡级和办事处）签章的《当选证书》等证明。', '其主管部门或相关管理部门出示的证明'
    ],
    range_array: ['身份证', '居住证', '签证', '护照', '户口本', '军人证', '团员证', '党员证', '港澳通行证等'],
    term_array: [],
    reconciliationMethod_array: ['纸质对账', '网上对账'],
    reconciliationFrequency_array: ['按月对账', '按季对账'],
    is_check_array: ['同意', '不同意'],
    ifOpen_array: ['是', '否'],
    videoSrc: ''

  },
  scrollToTop(e) {
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
  onPullDownRefresh() {
    // this.onLoad();
    dd.stopPullDownRefresh();
  },
  onLoad(service) {
    this.reset();
    // 页面加载
    var that = this;
    //开户业务的初始化  覆盖法人经办人临时数据  营业期限
    console.log('corporationOrOperator  ' + service.corporationOrOperator);
    that.setData({
      corporationOrOperator: service.corporationOrOperator,
    })
    //查询审核人列表
    dd.httpRequest({
      url: getApp().data.ip + '/check/allChecker',
      method: 'POST',
      headers: { 'content-type': 'application/json;charset=utf-8' },
      success: (res) => {
        let xx = new Array();
        let x = new Object();
        x.id = '0';
        x.checker_id = '';
        x.name = '无';
        xx.push(x);
        let i = 1;
        res.data.forEach((element) => {
          let x = new Object();
          x.id = i;
          x.checker_id = element.checker_id;
          x.name = element.realname;
          xx.push(x);
          i++;
        })
        this.setData({
          arrayExamine: xx,
          service: service
        })
      },
    })
    //再次编辑情况 包括已经审核成功的
    if (service.param == 'edit') {
      dd.httpRequest({
        url: getApp().data.ip + '/center/recordDetail?recordId=' + service.id,
        method: 'GET',
        headers: { 'content-type': 'application/json;charset=utf-8' },
        success: (res) => {
          console.log('state:  ' + res.data.data.record_state);
          console.log(res);
          var that = this;
          //判断是否有经办人
          if (res.data.data.operator_name == undefined || res.data.data.operator_name == '') {
            that.setData({
              corporationOrOperator: 'corporation',
            })
          } else {
            that.setData({
              corporationOrOperator: 'operator',
            })
          }
          for (let i = 0; i < that.data.arrayExamine.length; i++) {
            if (res.data.data.check_id == that.data.arrayExamine[i].checker_id) {
              that.setData({
                arrIndex: i
              })
            }
          }
          let xx = new Array();
          let x = new Object();
          //判断是否是成功的，是则表单都不可改
          if (res.data.data.record_state == '1') {
            this.setData({
              disabled: true,
            })
          } else {
            x.type = "image";
            x.src = "/image/main/mediaAddImage.png";
            xx.push(x);
          }
          res.data.data.mediaList.forEach((element) => {
            xx.push(element);
            if (element.type == 'image') {
              previewImageIndex: ++that.data.previewImageIndex
            }
          })
          console.log(xx);
          //转换回去
          if (res.data.data.verifyWay == 'byPaper') {
            res.data.data.verifyWay = '纸质对账'
          }
          if (res.data.data.verifyWay == 'byInternet') {
            res.data.data.verifyWay = '网上对账'
          }
          if (res.data.data.verifyRate == 'byMonth') {
            res.data.data.verifyRate = '按月对账'
          }
          if (res.data.data.verifyRate == 'bySeason') {
            res.data.data.verifyRate = '按季对账'
          }
          if (res.data.data.ifOpenInterBank == 'yes') {
            res.data.data.ifOpenInterBank = '同意'
          }
          if (res.data.data.ifOpenInterBank == 'no') {
            res.data.data.ifOpenInterBank = '不同意'
          }
          if (res.data.data.ifOpen) {
            res.data.data.ifOpen = '是'
          }
          if (!res.data.data.ifOpen) {
            res.data.data.ifOpen = '否'
          }
          that.setData({
            userid: service.userid,
            //公司
            business_name: res.data.data.business_name,
            business_type: res.data.data.business_type,
            business_address: res.data.data.business_address,
            business_salary: res.data.data.business_salary,
            business_scope: res.data.data.business_scope,
            business_lawer: res.data.data.business_lawer,
            business_date: res.data.data.business_date,
            business_term: res.data.data.business_term,
            business_area_code: res.data.data.business_area_code,
            industry_type: res.data.data.industryTypes,
            business_phone: res.data.data.business_phone,
            business_post_code: res.data.data.business_post_code,
            //财会
            financeManagerName: res.data.data.financeManagerName,
            financeManagerPhone: res.data.data.financeManagerPhone,
            financeManagerMobilePhone: res.data.data.financeManagerMobilePhone,
            financeName: res.data.data.financeName,
            financePhone: res.data.data.financePhone,
            financeMobilePhone: res.data.data.financeMobilePhone,
            verifyFinanceName: res.data.data.verifyFinanceName,
            verifyFinancePhone: res.data.data.verifyFinancePhone,
            verifyFinanceMobilePhone: res.data.data.verifyFinanceMobilePhone,
            verifyFinanceAddress: res.data.data.verifyFinanceAddress,
            //开户基本信息
            approval_number: res.data.data.permitNum,
            depositor_name: res.data.data.depositorName,
            depositor_type: res.data.data.depositorType,
            proveFileType: res.data.data.proveFileType,
            card_number: res.data.data.proveFileNumber,
            law_name: res.data.data.legalPerson,
            card_type: res.data.data.certificatesType,
            card_num: res.data.data.certificatesNumber,
            lawFixPhone: res.data.data.lawFixPhone,
            lawMovePhone: res.data.data.lawMovePhone,
            reconciliationMethod: res.data.data.verifyWay,
            reconciliationFrequency: res.data.data.verifyRate,
            is_check: res.data.data.ifOpenInterBank,
            ifOpen: res.data.data.ifOpen,
            //经办人
            operatorName: res.data.data.operator_name,
            operatorSex: res.data.data.operator_sex,
            operatorNationality: res.data.data.operator_nationality,
            operatorBirth: res.data.data.operator_birth,
            operatorNumber: res.data.data.operator_number,
            operatorAddress: res.data.data.operator_address,
            operatorAuthority: res.data.data.operator_authority,
            operatorDate: res.data.data.operator_date,
            operatorFrontPath: res.data.data.operator_front_path,
            operatorBackPath: res.data.data.operator_back_path,
            primaryComparedResult: res.data.data.primary_compared_result,
            //法人
            name: res.data.data.idcard_name,
            sex: res.data.data.idcard_sex,

            nationality: res.data.data.idcard_nationality,
            birth: res.data.data.idcard_birth,
            number: res.data.data.idcard_number,
            address: res.data.data.idcard_address,
            authority: res.data.data.idcard_authority,
            date: res.data.data.idcard_date,
            idCardFrontSrc: res.data.data.idcard_front_path,
            idCardBackSrc: res.data.data.idCardBackSrc,
            ssim: res.data.data.people_card_core_first,
            //文件列表
            mediaList: xx,
            record_id: res.data.data.record_id
          });
        },
        fail: function(res) {
          console.log(res);
        },
      });
    }
  },
  datePicker() {
    dd.datePicker({
      currentDate: '2000-1-1',
      startDate: '2000-1-1',
      endDate: '2025-1-1',
      success: (res) => {
        console.log(res);
        this.setData({
          business_time: res.date,
        });
      },
    });
  },
  bindPickerChange(e) {
    console.log(e.target.dataset.index);
    switch (e.target.dataset.index) {
      case 'type':
        this.setData({
          business_type: this.data.type_array[e.detail.value],
        });
        break;
      case 'range':
        this.setData({
          card_type: this.data.range_array[e.detail.value],
        });
        break;
      case 'term':
        this.setData({
          business_term: this.data.term_array[e.detail.value],
        });
        break;
      case 'depositor_type':
        this.setData({
          depositor_type: this.data.depositor_array[e.detail.value],
          proveFileType: this.data.proveFileType_array[e.detail.value]
        });
        break;
      case 'reconciliationMethod':
        this.setData({
          reconciliationMethod: this.data.reconciliationMethod_array[e.detail.value],
        });
        break;
      case 'reconciliationFrequency':
        this.setData({
          reconciliationFrequency: this.data.reconciliationFrequency_array[e.detail.value],
        });
        break;
      case 'is_check':
        this.setData({
          is_check: this.data.is_check_array[e.detail.value],
        });
        break;
      case 'ifOpen':
        this.setData({
          ifOpen: this.data.ifOpen_array[e.detail.value],
        });
        break;
    }
  },
  reset() {
    this.setData({
      disabled: false,
      renameShow: false,
      rename: '',
      renameSrc: '',
      corporationOrOperator: 'corporation',
      //公司
      business_name: '',
      business_type: '',
      business_address: '',
      business_salary: '',
      business_time: '',
      business_term: '',
      business_scope: '',
      //法人
      idCardFrontSrc: '',
      idCardBackSrc: '',
      selfImageSrc: '',
      name: '',
      sex: '',
      nationality: '',
      birth: '',
      number: '',
      address: '',
      authority: '',
      date: '',
      ssim: '',
      //经办人
      operatorFrontPath: '',
      operatorBackPath: '',
      operatorPeoplePath: '',
      operatorName: '',
      operatorSex: '',
      operatorNationality: '',
      operatorBirth: '',
      operatorNumber: '',
      operatorAddress: '',
      operatorAuthority: '',
      operatorDate: '',
      primaryComparedResult: '',

      //杂七杂八
      userid: '',
      record_id: '',
      mediaList: [
        {
          type: 'image',
          src: '/image/main/mediaAddImage.png',
        },
      ],
      arrayExamine: [],
      arrIndex: 0,
      type_array: ['有限责任公司', '股份有限责任公司', '个人独资企业', '合伙企业'],
      range_array: ['身份证', '居住证', '签证', '护照', '户口本', '军人证', '团员证', '党员证', '港澳通行证等'],
      term_array: [],
      videoSrc: ''
    });
  },
  previewImage(e) {
    console.log(e);
    let xx = new Array();
    this.data.mediaList.forEach((res) => {
      if (res.type == 'image' && res.src != '/image/main/mediaAddImage.png') {
        xx.push(res.src);
      }
    })
    dd.previewImage({
      current: e.currentTarget.dataset.index,
      urls: xx
    });
  },
  playVideo(e) {
    this.setData({
      videoSrc: e.target.dataset.index
    })
  },
  hideVideo() {
    this.setData({
      videoSrc: ''
    })
  },
  actionSheetTap() {
    var that = this;
    const items = ['上传图片', '上传视频'];
    dd.showActionSheet({
      title: '选择',
      cancelButtonText: '取消',
      items,
      success({ index }) {
        //图片
        if (index == 0) {
          that.uploadOtherImageList();
        }
        //视频
        if (index == 1) {
          that.uploadVideo();
        }
      },
    });
  },
  idCardOcr(e) {
    var that = this;
    const items = ['身份证照片面', '身份证国徽面'];
    dd.showActionSheet({
      title: '选择',
      cancelButtonText: '取消',
      items,
      success({ index }) {
        //正面
        if (index == 0) {
          that.uploadSelfImage(e.target.dataset.index);
        }
        //反面
        if (index == 1) {
          that.uploadSelfBackImage(e.target.dataset.index);
        }
      },
    });
  },
  chooseImage(e) {
    dd.chooseImage({
      sourceType: ['camera', 'album'],
      count: 1,
      success: (res) => {
        if (res && res.filePaths) {
          switch (e.currentTarget.dataset.name) {
            case 'marketImageSrc':
              this.setData({
                marketImageSrc: res.filePaths[0],
              });
              break;
            case 'groupImageSrc':
              this.setData({
                groupImageSrc: res.filePaths[0],
              });
              break;
            case 'taxationImageSrc':
              this.setData({
                taxationImageSrc: res.filePaths[0],
              });
              break;
          }
        }
      },
      fail: () => {
      }
    })
  },
  uploadSelfImage(person) {
    console.log(person);
    dd.chooseImage({
      sourceType: ['camera', 'album'],
      count: 1,
      success: res => {
        const path = (res.filePaths && res.filePaths[0]) || (res.apFilePaths && res.apFilePaths[0]);
        dd.showLoading({
          content: 'OCR扫描中...',
        });
        if (person == 'faren') {
          this.setData({
            ssim: '',
          })
        }
        if (person == 'jingbanren') {
          this.setData({
            primaryComparedResult: '',
          })
        }
        setTimeout(() => {
          dd.hideLoading();
        }, 1000);
        dd.uploadFile({
          url: getApp().data.ip + '/upload/cardOcr?cardFace=id-card-front',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: res => {
            dd.hideLoading();
            let obj = JSON.parse(res.data);
            let ocr = obj.data[0].results[0].idCardInfo;
            if (person == 'faren') {
              this.setData({
                idCardFrontSrc: obj.data[2],
                name: ocr.name,
                sex: ocr.sex,
                nationality: ocr.nationality,
                birth: ocr.birth,
                number: ocr.number,
                address: ocr.address,
              });
            } else if (person == 'jingbanren') {
              this.setData({
                operatorFrontPath: obj.data[2],
                operatorName: ocr.name,
                operatorSex: ocr.sex,
                operatorNationality: ocr.nationality,
                operatorBirth: ocr.birth,
                operatorNumber: ocr.number,
                operatorAddress: ocr.address,
              });
            }
          },
          fail: function(res) {
          },
        });
      },
    });
  },
  uploadSelfBackImage(person) {
    dd.chooseImage({
      sourceType: ['camera', 'album'],
      count: 1,
      success: res => {
        this.setData({
          selfBackImageSrc: res.filePaths[0],
        });
        const path = (res.filePaths && res.filePaths[0]) || (res.apFilePaths && res.apFilePaths[0]);
        dd.showLoading({
          content: 'OCR扫描中...',
        });
        setTimeout(() => {
          dd.hideLoading();
        }, 1000);
        dd.uploadFile({
          url: getApp().data.ip + '/upload/cardOcr?cardFace=id-card-back',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: res => {
            dd.hideLoading();
            let obj = JSON.parse(res.data);
            let ocr = obj.data[0].results[0].idCardInfo;
            console.log(obj);
            if (person == 'faren') {
              this.setData({
                idCardBackSrc: obj.data[2],
                authority: ocr.authority,
                date: ocr.startDate + '到' + ocr.endDate,
              });
            } else if (person == 'jingbanren') {
              this.setData({
                operatorBackPath: obj.data[2],
                operatorAuthority: ocr.authority,
                operatorDate: ocr.startDate + '到' + ocr.endDate,
              });
            }
          },
          fail: function(res) {
          },
        });
      },
    });
  },
  ocr(e) {
    let url;
    switch (e.target.dataset.index) {
      case 'business_card':
        url = getApp().data.ip + '/center/license';
        break;
      case 'approval':
        url = getApp().data.ip + '/center/approval';
        break;
    }
    dd.chooseImage({
      sourceType: ['camera', 'album'],
      count: 1,
      success: res => {
        const path = (res.filePaths && res.filePaths[0]) || (res.apFilePaths && res.apFilePaths[0]);
        dd.showLoading({
          content: 'OCR扫描中...',
        });
        setTimeout(() => {
          dd.hideLoading();
        }, 1000);
        dd.uploadFile({
          url: url,
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: res => {
            let obj = JSON.parse(res.data);
            if (obj.valid_period == '29991231') {
              obj.valid_period = '长期'
            } else {
              obj.valid_period = obj.establish_date + '到' + obj.valid_period
            }

            switch (e.target.dataset.index) {
              case 'business_card':
                console.log(obj);
                this.setData({
                  business_name: obj.name,
                  business_type: obj.type,
                  business_address: obj.address,
                  business_salary: obj.capital,
                  business_scope: obj.business,
                  business_reg_num: obj.reg_num,
                  business_lawer: obj.person, // 法人
                  business_date: obj.establish_date,// 成立日期
                  business_term: obj.valid_period,// 营业期限
                })
                break;
              case 'approval':
                console.log(obj);
                this.setData({
                  approval_number: obj.items.CHECK_ID,
                  depositor_name: obj.items.NAME_CH,
                  law_name: obj.items.OWNER,
                  depositor_type: '企业法人',
                  proveFileType: '《企业法人营业执照正本》',
                  card_number: this.data.business_reg_num,
                  card_type: '身份证',
                  card_num: this.data.number
                })
                break;
            }
          },
        });
      },
    });
  },
  testOneSelf() {
    var that = this;
    //表单验证
    if (that.data.idCardFrontSrc == '' && that.data.operatorFrontPath == '') {
      dd.alert({ title: '请等待身份证OCR' });
      return;
    }
    dd.chooseImage({
      sourceType: ['camera'],
      count: 1,
      success: res => {
        dd.showLoading({
          content: '人证比对中...',
        });
        const path = (res.filePaths && res.filePaths[0]) || (res.apFilePaths && res.apFilePaths[0]);
        //上传人身图
        dd.uploadFile({
          url: getApp().data.ip + '/upload/saveImage',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          formData: {
            idNumber: that.data.number,
            imageName: 'selfImage.png'
          },
          success: res => {
            let obj = JSON.parse(res.data);
            console.log(obj);
            console.log('认证对比上传图片成功');
            if (this.data.corporationOrOperator == 'corporation') {
              that.setData({
                selfImageSrc: obj.data.src,
              })
            } else if (this.data.corporationOrOperator == 'operator') {
              that.setData({
                operatorPeoplePath: obj.data.src,
              })
            }
            setTimeout(() => {
              dd.hideLoading();
            }, 1000);
            console.log('身份证 ' + that.data.operatorFrontPath, '人身照 ' + that.data.operatorBackPath);
            let testUrl;
            if (this.data.corporationOrOperator == 'corporation') {
              testUrl = getApp().data.ip + '/center/AipFaceApp?image_url_1=' + that.data.idCardFrontSrc + '&image_url_2=' + that.data.selfImageSrc;
            } else if (this.data.corporationOrOperator == 'operator') {
              testUrl = getApp().data.ip + '/center/AipFaceApp?image_url_1=' + that.data.operatorFrontPath + '&image_url_2=' + that.data.operatorPeoplePath;
            }
            dd.httpRequest({
              url: testUrl,
              method: 'GET',
              headers: { 'content-type': 'application/json;charset=utf-8' },
              success: (res) => {
                console.log(res);
                dd.hideLoading();
                let test = res.data.confidence.toFixed(2);
                if (this.data.corporationOrOperator == 'corporation') {
                  that.setData({
                    ssim: test
                  })
                } else if (this.data.corporationOrOperator == 'operator') {
                  that.setData({
                    primaryComparedResult: test
                  })
                }

              }
            });
          }
        });

      },
    });
  },
  uploadOtherImageList() {
    dd.chooseImage({
      sourceType: ['camera', 'album'],
      count: 10,
      success: res => {
        var that = this;
        for (let i = 0; i < res.filePaths.length; i++) {
          that.uploadImageList('image' + i + '.png', that.data.number, res.filePaths[i]);
        }
      },
    });
  },
  uploadVideo() {
    dd.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 600,
      success: res => {
        var that = this;
        console.log('视频路径' + res.filePath);
        console.log('视频时间' + res.duration);
        console.log('视频大小' + res.size);
        that.uploadVideoList('video.mp4', that.data.number, res.filePath);
      }
    });
  },
  // 表单输入赋值
  bindKeyInput(e) {
    switch (e.target.dataset.index) {
      case 'business_name':
        this.setData({
          business_name: e.detail.value,
        });
        break;
      case 'business_address':
        this.setData({
          business_address: e.detail.value,
        });
        break;
      case 'business_salary':
        this.setData({
          business_salary: e.detail.value,
        });
        break;
      case 'business_time':
        this.setData({
          business_time: e.detail.value,
        });
        break;
      case 'business_term':
        this.setData({
          business_term: e.detail.value,
        });
        break;
      case 'business_scope':
        this.setData({
          business_scope: e.detail.value,
        });
        break;
      case 'business_lawer':
        this.setData({
          business_lawer: e.detail.value,
        });
        break;
      case 'business_date':
        this.setData({
          business_date: e.detail.value,
        });
        break;
      case 'business_term':
        this.setData({
          business_term: e.detail.value,
        });
        break;
      case 'business_area_code':
        this.setData({
          business_area_code: e.detail.value,
        });
        break;
      case 'industry_type':
        console.log('行业分类');
        this.setData({
          show_checkbox_dialog: true
        });
        break;
      case 'business_phone':
        this.setData({
          business_phone: e.detail.value,
        });
        break;
      case 'business_post_code':
        this.setData({
          business_post_code: e.detail.value,
        });
        break;
      //财会
      case 'financeManagerName':
        this.setData({
          financeManagerName: e.detail.value,
        });
        break;
      case 'financeManagerPhone':
        this.setData({
          financeManagerPhone: e.detail.value,
        });
        break;
      case 'financeManagerMobilePhone':
        this.setData({
          financeManagerMobilePhone: e.detail.value,
        });
        break;
      case 'financeName':
        this.setData({
          financeName: e.detail.value,
        });
        break;
      case 'financePhone':
        this.setData({
          financePhone: e.detail.value,
        });
        break;
      case 'financeMobilePhone':
        this.setData({
          financeMobilePhone: e.detail.value,
        });
        break;
      case 'verifyFinanceName':
        this.setData({
          verifyFinanceName: e.detail.value,
        });
        break;
      case 'verifyFinancePhone':
        this.setData({
          verifyFinancePhone: e.detail.value,
        });
        break;
      case 'verifyFinanceMobilePhone':
        this.setData({
          verifyFinanceMobilePhone: e.detail.value,
        });
        break;
      case 'verifyFinanceAddress':
        this.setData({
          verifyFinanceAddress: e.detail.value,
        });
        break;
      //开户许可证
      case 'approval_number':
        this.setData({
          approval_number: e.detail.value,
        });
        break;
      case 'depositor_name':
        this.setData({
          depositor_name: e.detail.value,
        });
        break;
      case 'depositor_type':
        this.setData({
          depositor_type: e.detail.value,
        });
        break;
      case 'proveFileType':
        console.log(222);
        if (this.data.proveFileType) {
          dd.alert({
            title: this.data.proveFileType
          });
        }
        break;
      case 'card_number':
        this.setData({
          card_number: e.detail.value,
        });
        break;
      case 'law_name':
        this.setData({
          law_name: e.detail.value,
        });
        break;
      case 'card_type':
        this.setData({
          card_type: e.detail.value,
        });
        break;
      case 'card_num':
        this.setData({
          card_num: e.detail.value,
        });
        break;
      case 'lawFixPhone':
        this.setData({
          lawFixPhone: e.detail.value,
        });
        break;
      case 'lawMovePhone':
        this.setData({
          lawMovePhone: e.detail.value,
        });
        break;
      case 'verifyType':
        this.setData({
          verifyType: e.detail.value,
        });
        break;
      case 'is_check':
        this.setData({
          is_check: e.detail.value,
        });
        break;
      case 'ifOpen':
        this.setData({
          ifOpen: e.detail.value,
        });
        break;
      //法人
      case 'name':
        this.setData({
          name: e.detail.value,
        });
        break;
      case 'sex':
        this.setData({
          sex: e.detail.value,
        });
        break;
      case 'nationality':
        this.setData({
          nationality: e.detail.value,
        });
        break;
      case 'birth':
        this.setData({
          birth: e.detail.value,
        });
        break;
      case 'number':
        this.setData({
          number: e.detail.value,
        });
        break;
      case 'address':
        this.setData({
          address: e.detail.value,
        });
        break;
      case 'authority':
        this.setData({
          authority: e.detail.value,
        });
        break;
      case 'date':
        this.setData({
          date: e.detail.value,
        });
        break;
      case 'operatorName':
        this.setData({
          operatorName: e.detail.value,
        });
        break;
      case 'operatorSex':
        this.setData({
          operatorSex: e.detail.value,
        });
        break;
      case 'operatorNationality':
        this.setData({
          operatorNationality: e.detail.value,
        });
        break;
      case 'operatorBirth':
        this.setData({
          operatorBirth: e.detail.value,
        });
        break;
      case 'operatorNumber':
        this.setData({
          operatorNumber: e.detail.value,
        });
        break;
      case 'operatorAuthority':
        this.setData({
          operatorAuthority: e.detail.value,
        });
        break;
      case 'operatorAddress':
        this.setData({
          operatorAddress: e.detail.value,
        });
        break;
      case 'operatorDate':
        this.setData({
          operatorDate: e.detail.value,
        });
        break;
      case 'rename':
        this.setData({
          rename: e.detail.value,
        });
        break;
    }
  },
  uploadFile(e) {
    var that = this;
    let obj = that.data;
    if (e.target.dataset.index == '0') {
      //表单验证
      if (!that.testForm()) {
        return;
      }
    }
    //转换审核人id
    let checker_id;
    this.data.arrayExamine.forEach((element) => {
      if (element.id == this.data.arrIndex) {
        checker_id = element.checker_id;
      }
    })
    if (checker_id == '') {
      checker_id = -1;
    }
    //先传文字
    that.uploadTest(checker_id, e.target.dataset.index);
    console.log("表单文字上传成功");
    //再传媒体
    // let list = that.data.mediaList;
    // console.log(list);
    // for (let i = 1; i < list.length; i++) {
    //   if (list[i].type == 'image') {
    //     that.uploadImageList('image' + i + '.png', that.data.number, list[i].src);
    //   }
    //   if (list[i].type == 'video') {
    //     that.uploadVideoList('video' + i + '.mp4', that.data.number, list[i].src);
    //   }
    // }
    if (e.target.dataset.index == '0') {
      dd.alert({ content: '提交成功' });
    }
    if (e.target.dataset.index == '3') {
      dd.alert({ content: '保存成功' });
    }
    dd.navigateTo({ url: '../index/index' })
  },
  showToast(x) {
    dd.showToast({
      content: x, // 文字内容
    });
  },
  testForm() {
    var obj = this.data;
    // 法人办理业务表单验证
    if (this.data.corporationOrOperator == 'corporation') {
      if (obj.ssim == '') {
        this.showToast('法人人证对比为空');
        return false;
      }
    }
    // 经办人业务表单验证
    if (this.data.corporationOrOperator == 'operator') {
      if (obj.primaryComparedResult == '') {
        this.showToast('经办人人证对比为空');
        return false;
      } else if (obj.operatorName == '') {
        this.showToast('经办人姓名为空');
        return false;
      } else if (obj.operatorSex == '') {
        this.showToast('经办人性别为空');
        return false;
      } else if (obj.operatorNationality == '') {
        this.showToast('经办人民族为空');
        return false;
      } else if (obj.operatorBirth == '') {
        this.showToast('经办人出生日期为空');
        return false;
      } else if (obj.operatorNumber == '' || !this.isIdCard(obj.operatorNumber)) {
        this.showToast('经办人身份证号为空');
        return false;
      } else if (obj.operatorAddress == '') {
        this.showToast('经办人地址为空');
        return false;
      } else if (obj.operatorAuthority == '') {
        this.showToast('经办人签发机关为空');
        return false;
      } else if (obj.operatorDate == '') {
        this.showToast('经办人有效期限为空');
        return false;
      }
    }
    //共有表单验证
    //公司信息
    if (obj.business_name == '') {
      this.showToast('企业名称为空');
      return false;
    } else if (obj.business_type == '') {
      this.showToast('企业类型为空');
      return false;
    } else if (obj.business_address == '') {
      this.showToast('企业地址为空');
      return false;
    } else if (obj.business_scope == '') {
      this.showToast('经营范围为空');
      return false;
    } else if (obj.industry_type == '') {
      this.showToast('行业分类为空');
      return false;
    } else if (obj.business_lawer == '') {
      this.showToast('公司-法人为空');
      return false;
    } else if (obj.business_date == '') {
      this.showToast('公司-成立日期为空');
      return false;
    } else if (obj.business_term == '') {
      this.showToast('公司-营业期限为空');
      return false;
    } else if (obj.business_area_code == '') {
      this.showToast('公司-地区代码为空');
      return false;
    } else if (obj.business_phone == '' || !this.isNumber(obj.business_phone)) {
      this.showToast('企业电话为空');
      return false;
    } else if (obj.business_post_code == '' || !this.isNumber(obj.business_phone)) {
      this.showToast('企业邮编为空');
      return false;
    }
    //财会信息
    else if (obj.financeManagerName == '') {
      this.showToast('财会负责人为空');
      return false;
    } else if (obj.financeManagerPhone == '' || !this.isNumber(obj.financeManagerPhone)) {
      this.showToast('财会负责人固定电话为空');
      return false;
    } else if (obj.financeManagerMobilePhone == '' || !this.isNumber(obj.financeManagerMobilePhone)) {
      this.showToast('财会负责人移动电话为空');
      return false;
    } else if (obj.financeName == '') {
      this.showToast('财会人员姓名为空');
      return false;
    } else if (obj.financePhone == '' || !this.isNumber(obj.financePhone)) {
      this.showToast('财会人员固定电话为空');
      return false;
    } else if (obj.financeMobilePhone == '' || !this.isNumber(obj.financeMobilePhone)) {
      this.showToast('财会人员移动电话为空');
      return false;
    } else if (obj.verifyFinanceName == '') {
      this.showToast('对账联系人姓名为空');
      return false;
    } else if (obj.verifyFinancePhone == '' || !this.isNumber(obj.verifyFinancePhone)) {
      this.showToast('对账联系人固定电话为空');
      return false;
    } else if (obj.verifyFinanceMobilePhone == '' || !this.isNumber(obj.verifyFinanceMobilePhone)) {
      this.showToast('对账联系人移动电话为空');
      return false;
    } else if (obj.verifyFinanceAddress == '') {
      this.showToast('纸质对账单寄送地址为空');
      return false;
    }
    //开户信息
    else if (obj.approval_number == '') {
      this.showToast('开户许可证-准和号为空');
      return false;
    } else if (obj.depositor_name == '') {
      this.showToast('开户许可证-公司名称为空');
      return false;
    } else if (obj.depositor_type == '') {
      this.showToast('开户许可证-存款人类别为空');
      return false;
    } else if (obj.proveFileType == '') {
      this.showToast('开户许可证-证明文件种类为空');
      return false;
    } else if (obj.card_number == '') {
      this.showToast('开户许可证-证明文件编号为空');
      return false;
    } else if (obj.law_name == '') {
      this.showToast('开户许可证-法定代表人为空');
      return false;
    } else if (obj.card_type == '') {
      this.showToast('开户许可证-证件种类为空');
      return false;
    } else if (obj.card_num == '') {
      this.showToast('开户许可证-证件编号为空');
      return false;
    } else if (obj.lawFixPhone == '') {
      this.showToast('开户许可证-法人固定电话为空');
      return false;
    } else if (obj.lawMovePhone == '') {
      this.showToast('开户许可证-法人移动电话为空');
      return false;
    } else if (obj.reconciliationMethod == '') {
      this.showToast('开户许可证-对账方式为空');
      return false;
    } else if (obj.reconciliationFrequency == '') {
      this.showToast('开户许可证-对账频率为空');
      return false;
    } else if (obj.reconciliationFrequency == '') {
      this.showToast('开户许可证-对账频率为空');
      return false;
    } else if (obj.is_check == '') {
      this.showToast('开户许可证-网上银行是否开通');
      return false;
    } else if (obj.ifOpen == '') {
      this.showToast('开户许可证-是否开例');
      return false;
    }
    //法人信息
    else if (obj.name == '') {
      this.showToast('法人姓名为空');
      return false;
    } else if (obj.sex == '') {
      this.showToast('法人性别为空');
      return false;
    } else if (obj.nationality == '') {
      this.showToast('法人民族为空');
      return false;
    } else if (obj.birth == '') {
      this.showToast('法人出生日期为空');
      return false;
    } else if (obj.number == '' || !this.isIdCard(obj.number)) {
      this.showToast('法人身份证号为空或格式不对');
      return false;
    } else if (obj.address == '') {
      this.showToast('法人地址为空');
      return false;
    } else if (obj.authority == '') {
      this.showToast('法人签发机关为空');
      return false;
    } else if (obj.date == '') {
      this.showToast('法人有效期限为空');
      return false;
    } else {
      return true;
    }
  },
  uploadTest(checker_id, state) {
    console.log("--------"+this.data.operatorFrontPath+"  "+this.data.operatorBackPath+" 2 "+this.data.idCardFrontSrc+"  "+this.data.idCardBackSrc);
    let Operater = new Object();
    Operater.operatorName = this.data.operatorName;// 经办人姓名
    Operater.operatorSex = this.data.operatorSex;
    Operater.operatorNationality = this.data.operatorNationality;
    Operater.operatorBirth = this.data.operatorBirth;
    Operater.operatorNumber = this.data.operatorNumber;
    Operater.operatorAuthority = this.data.operatorAuthority;
    Operater.operatorAddress = this.data.operatorAddress;
    Operater.operatorDate = this.data.operatorDate;
    Operater.primaryComparedResult = this.data.primaryComparedResult;
    Operater.operatorFrontPath = this.data.operatorFrontPath;
    Operater.operatorBackPath = this.data.operatorBackPath;
    let businessUser = new Object();  //法人
    businessUser.idcard_name = this.data.name;
    businessUser.idcard_sex = this.data.sex;
    businessUser.idcard_nationality = this.data.nationality;
    businessUser.idcard_birth = this.data.birth;
    businessUser.idcard_number = this.data.number;
    businessUser.idcard_address = this.data.address;
    businessUser.idcard_authority = this.data.authority;
    businessUser.idcard_date = this.data.date;
    businessUser.idcard_front_path = this.data.idCardFrontSrc;
    businessUser.idcard_back_path = this.data.idCardBackSrc;
    let business = new Object();  //  企业
    business.business_name = this.data.business_name;
    business.business_type = this.data.business_type;
    business.business_address = this.data.business_address;
    business.business_salary = this.data.business_salary;
    business.business_scope = this.data.business_scope;
    business.business_lawer = this.data.business_lawer;
    business.business_date = this.data.business_date;
    business.business_term = this.data.business_term;
    business.business_area_code = this.data.business_area_code;
    business.industryTypes = this.data.industry_type;
    business.business_phone = this.data.business_phone;
    business.business_post_code = this.data.business_post_code;
    let finance = new Object();   // 财会
    finance.financeManagerName = this.data.financeManagerName;
    finance.financeManagerPhone = this.data.financeManagerPhone;
    finance.financeManagerMobilePhone = this.data.financeManagerMobilePhone;
    finance.financeName = this.data.financeName;
    finance.financePhone = this.data.financePhone;
    finance.financeMobilePhone = this.data.financeMobilePhone;
    finance.verifyFinanceName = this.data.verifyFinanceName;
    finance.verifyFinancePhone = this.data.verifyFinancePhone;
    finance.verifyFinanceMobilePhone = this.data.verifyFinanceMobilePhone;
    finance.verifyFinanceAddress = this.data.verifyFinanceAddress;
    let account = new Object();   //开户
    account.permitNum = this.data.approval_number;
    account.depositorName = this.data.depositor_name;
    account.depositorType = this.data.depositor_type;
    account.proveFileType = this.data.proveFileType;
    account.proveFileNumber = this.data.card_number;
    account.lawFixPhone = this.data.lawFixPhone;
    account.lawMovePhone = this.data.lawMovePhone;
    account.legalPerson = this.data.law_name;
    account.certificatesType = this.data.card_type;
    account.certificatesNumber = this.data.card_num;
    if (this.data.reconciliationMethod == '纸质对账') {
      account.verifyWay = 'byPaper'
    }
    if (this.data.reconciliationMethod == '网上对账') {
      account.verifyWay = 'byInternet'
    }
    if (this.data.reconciliationFrequency == '按月对账') {
      account.verifyRate = 'byMonth'
    }
    if (this.data.reconciliationFrequency == '按季对账') {
      account.verifyRate = 'bySeason'
    }
    if (this.data.is_check == '同意') {
      account.ifOpenInterBank = 'yes'
    }
    if (this.data.is_check == '不同意') {
      account.ifOpenInterBank = 'no'
    }
    if (this.data.ifOpen == '是') {
      account.ifOpen = true;
    }
    if (this.data.ifOpen == '否') {
      account.ifOpen = false;
    }
    // account.verifyWay = this.data.reconciliationMethod;
    // account.verifyRate = this.data.reconciliationFrequency;
    // account.ifOpenInterBank = this.data.is_check;
    let list = new Array();
    for (let i = 1; i < this.data.mediaList.length; i++) {
      let x = new Object();
      if (this.data.mediaList[i].type == 'image') {
        x.name = Math.random() * 100 + '.png';
      } else {
        x.name = Math.random() * 100 + '.mp4';
      }
      x.url = this.data.mediaList[i].src;
      x.imageIndex = this.data.mediaList[i].imageIndex + '';
      list.push(x);
    }
    console.log(list);
    //record_state 0 1 2 3 待审核 已审核 已退办 暂存代办
    //record_id默认为''意为新增，有值的话意为修改
    let recordParam = new Object();
    recordParam.checker_id = checker_id;
    recordParam.record_state = state;
    recordParam.recordKey = this.data.record_id;
    recordParam.people_card_core_first = this.data.ssim;
    dd.httpRequest({
      url: getApp().data.ip + '/upload/saveFormApp',
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      data: {
        operator: JSON.stringify(Operater),
        businessUser: JSON.stringify(businessUser),
        business: JSON.stringify(business),
        list: JSON.stringify(list),
        recordParam: JSON.stringify(recordParam),
        finance: JSON.stringify(finance), // 财会信息
        account: JSON.stringify(account) // 开户信息
      },
      dataType: 'json',
      success: function(res) {
      },
      fail: function(res) {
      },
    });
  },
  uploadVideoList(videoName, idNumber, filePath) {
    dd.showLoading({
      content: '上传视频中...',
    });
    dd.uploadFile({
      url: getApp().data.ip + '/upload/saveVideo',
      fileType: 'video',
      fileName: 'file',
      filePath: filePath,
      formData: {
        idNumber: idNumber,
        videoName: videoName
      },
      success: res => {
        dd.hideLoading();
        let obj = JSON.parse(res.data);
        let xx = this.data.mediaList;
        let x = new Object();
        x.type = obj.data.type;
        x.src = obj.data.src;
        xx.push(x);
        // xx=JSON.stringify(xx);
        console.log(xx);
        this.setData({
          mediaList: xx,
        });
      },
      fail: function(res) {
        dd.hideLoading();
        console.log('视频上传失败', res);
      }
    });
  },
  uploadImageList(imageName, idNumber, filePath) {
    dd.showLoading({
      content: '上传图片中...',
    });
    dd.uploadFile({
      url: getApp().data.ip + '/upload/saveImage',
      fileType: 'image',
      fileName: 'file',
      filePath: filePath,
      formData: {
        idNumber: idNumber,
        imageName: imageName
      },
      success: res => {
        dd.hideLoading();
        let obj = JSON.parse(res.data);
        console.log(obj);
        let xx = this.data.mediaList;
        let x = new Object();
        x.type = obj.data.type;
        x.src = obj.data.src;
        x.imageIndex = this.data.previewImageIndex;
        xx.push(x);
        console.log(xx);
        this.setData({
          mediaList: xx,
          previewImageIndex: ++this.data.previewImageIndex
        });
      },
      fail: function(res) {
        dd.hideLoading();
      }
    });
  },
  bindObjPickerChange(e) {
    this.setData({
      arrIndex: e.detail.value,
    });
  },
  isNumber(val) {
    let regPos = /^\d+(\.\d+)?$/; //非负浮点数
    let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
      return true;
    } else {
      return false;
    }
  },
  isIdCard(code) {
    var ts = this;
    //身份证号合法性验证 
    //支持15位和18位身份证号
    //支持地址编码、出生日期、校验位验证
    var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
    var tip = "";
    var pass = true;
    var reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
    if (!code || !code.match(reg)) {
      tip = "身份证号格式错误";
      pass = false;
    } else if (!city[code.substr(0, 2)]) {
      tip = "地址编码错误";
      pass = false;
    } else {
      //18位身份证需要验证最后一位校验位
      if (code.length == 18) {
        code = code.split('');
        //∑(ai×Wi)(mod 11)
        //加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        //校验位
        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        var sum = 0;
        var ai = 0;
        var wi = 0;
        for (var i = 0; i < 17; i++) {
          ai = code[i];
          wi = factor[i];
          sum += ai * wi;
        }
        var last = parity[sum % 11];
        if (parity[sum % 11] != code[17]) {
          tip = "校验位错误";
          pass = false;
        }
      }
    }
    return pass;
  },
  rename(e) {
    console.log(e);
    this.setData({
      renameShow: true,
      rename: e.currentTarget.dataset.name,
      renameSrc: e.currentTarget.dataset.src
    })
  },
  renameSubmit() {
    this.setData({
      renameShow: false,
    })
    console.log(this.data.rename + '   ' + this.data.renameSrc);
    let mlist = this.data.mediaList;
    mlist.forEach((element) => {
      console.log(element);
      if (element.src == this.data.renameSrc) {
        element.name = this.data.rename;
      }
    })
    this.setData({
      mediaList: mlist,
    })
    dd.alert({ title: '修改成功' });
    console.log(this.data.mediaList);
  },
  onChangePickerView(e) {
    this.setData({
      value: e.detail.value,
    });
  },
  show_industry_type() {
    if (!this.data.disabled) {
      this.setData({
        show_checkbox_dialog: true
      })
    }
  },
  submit_industry_type(e) {
    let x = '';
    e.detail.value.libs.forEach((element) => {
      x += element + ',';
    })
    x = x.substr(0, x.length - 1);
    console.log(x);
    this.setData({
      show_checkbox_dialog: false,
      industry_type: x
    });
  },
  saveModel(e) {
    dd.showLoading({
      content: '生成模板中...',
    });
    console.log(e);
    let that = this;
    if (e.currentTarget.dataset.index == "moduleFour") {
      that.saveToDingTalk(getApp().data.modelFour, '模板四.xls');
    } else if (e.currentTarget.dataset.index == "moduleFive") {
      that.saveToDingTalk(getApp().data.modelFive, '模板五.docx');
    }
    else {
      dd.httpRequest({
        url: getApp().data.ip + '/account/manager?recordId=' + this.data.service.id + '&office=' + e.currentTarget.dataset.index,
        method: 'GET',
        headers: { 'content-type': 'application/json;charset=utf-8' },
        success: (res) => {
          console.log(res.data.data);
          let name;
          switch (e.currentTarget.dataset.index) {
            case "moduleOne":
              name = '模板一.xls';
              break;
            case "moduleTwo":
              name = '模板二.xls';
              break;
            case "moduleThree":
              name = '模板三.docx';
              break;
          };
          that.saveToDingTalk(res.data.data.wordFastPath, name);
        }
      })
    }
  },
  saveToDingTalk(url, name) {
    console.log('url: ' + url + '   name: ' + name);
    dd.saveFileToDingTalk({
      url: url,  // 文件在第三方服务器地址
      name: name,
      success: (res) => {
        dd.hideLoading();
        console.log(res);
        dd.previewFileInDingTalk({
          corpId: getApp().data.corpId,
          spaceId: res.data[0].spaceId,
          fileId: res.data[0].fileId,
          fileName: res.data[0].fileName,
          fileSize: res.data[0].fileSize,
          fileType: res.data[0].fileType,
        })
      },
      fail: (err) => {
        dd.hideLoading();
        dd.alert({
          content: "生成模板失败"
        });
        console.log(err);
      }
    })
  }
});
