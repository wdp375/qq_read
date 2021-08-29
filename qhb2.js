const $ = new Env('趣红包');




!(async () => {
    if (typeof $request !== "undefined") {
        await qhbck()

    } else {

        console.log(`\n趣红包開始！💦\n`)
      
      
      var num = 1
      while (num <= 10){
      await qhb_spjb()
      await $.wait(60000);
      num ++

      }
      
        await qhb_lxjl()
        $.msg("","","趣红包运行完毕！")
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())

//数据获取
function qhbck() {

    if ($request.url == "http://api2.guaniuvideo.com/reward/video") {
        const qhburl = $request.url
        if (qhburl) $.setdata(qhburl, 'qhburl')
        $.log(qhburl)
        const qhbhd = JSON.stringify($request.headers)
        if (qhbhd) $.setdata(qhbhd, 'qhbhd')
        $.log(qhbhd)
        const qhbbody = JSON.stringify($request.body)
        if (qhbbody) $.setdata(qhbhd, 'qhbbody')
        $.log(qhbbody)
        
        
        $.msg($.name, "", "趣红包视频数据获取成功！")
    }
    else if ($request.url == "http://api2.guaniuvideo.com/reward/videoNotify") {
        const qhb_gg_url = $request.url
        if (qhb_gg_url) $.setdata(qhburl, 'qhb_gg_url')
        $.log(qhburl)
        const qhb_gg_hd = JSON.stringify($request.headers)
        if (qhb_gg_hd) $.setdata(qhb_gg_hd, 'qhbhd')
        $.log(qhb_gg_hd)
        const qhb_gg_body = JSON.stringify($request.body)
        if (qhb_gg_body) $.setdata(qhbhd, 'qhb_gg_body')
        $.log(qhb_gg_body)
        
        
        $.msg($.name, "", "趣红包广告数据获取成功！")
    }

    else if ($request.url.indexOf("leaveReward") > -1) {
        const qh_lx_burl = $request.url
        if (qhb_lx_url) $.setdata(qhb_lx_url, 'qhb_lx_url')
        $.log(qhb_lx_url)
        const qhb_lx_hd = JSON.stringify($request.headers)
        if (qhb_lx_hd) $.setdata(qhb_lx_hd, 'qhb_lx_hd')
        $.log(qhb_lx_hd)
        
        
        $.msg($.name, "", "趣红包离线奖励数据获取成功！")
    }
}



//视频金币
function qhb_spjb(timeout = 1000) {

  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('qhbhd') === "undefined") {
        $.msg($.name,"",'请先获取趣红包视频数据',)
        $.done()
      }
        /*
      if (typeof $.getdata('qhb_lx_hd') === "undefined") {
        $.msg($.name,"",'请先获取趣红包离线数据',)
        $.done()
      }
      */


qhbhd = JSON.parse($.getdata('qhbhd')) 
//qhbhd.ApiAuthTime = String(new Date().getTime())

        
const myRequest = {
    url: $.getdata('qhburl'),
    method: `POST`,
    headers: qhbhd,
    body: $.getdata('qhbbody')
};

$task.fetch(myRequest).then(response => {
    const result = JSON.parse(response.body)

    console.log(result.code)
     if(result.code == 200){

        console.log('趣红包观看成功：获得'+String(result.data.reward_gold)+"金币。")
        

}$done();
}, reason => {
    console.log('状态码显示出错了！');
    $done()


});
    },timeout)
  })
}


