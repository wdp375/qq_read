
/*
趣红包
#####################################################################################################################################
[task_local]
#趣红包
4 0 * * * https://raw.githubusercontent.com/dclemon/qq_read/master/pear.js, tag=Pear, enabled=true
[rewrite_local]
#趣红包
^https://m.pearkin.com/api/account/ExeSign url script-request-header https://raw.githubusercontent.com/dclemon/qq_read/master/pear.js
[MITM]
hostname = m.pearkin.com
*/

const $ = new Env('趣红包');
let pearurl = $.getdata('pearurl')
let pearhd = $.getdata('pearhd')
!(async () => {
    if (typeof $request !== "undefined") {
        await pearck()

    } else {

        console.log(`\n趣红包開始！💦\n`)
        await pearqd()
        $.msg("","","趣红包运行完毕！")
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
//数据获取
function pearck() {
    if ($request.url.indexOf("api2.guaniuvideo.com/reward/video") > -1) {
        const pearurl = $request.url
        if (pearurl) $.setdata(pearurl, 'pearurl')
        $.log(pearurl)
        const pearhd = JSON.stringify($request.headers)
        if (pearhd) $.setdata(pearhd, 'pearhd')
        $.log(pearhd)
        const pearbody = JSON.stringify($request.body)
        if (pearbody) $.setdata(pearhd, 'pearbody')
        $.log(pearbody)
        $.msg($.name, "", "趣红包数据获取成功！")
    }
}

function qhb_spjb(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('pearurl') === "undefined") {
        $.msg($.name,"",'请先获取趣红包数据',)
        $.done()
      }


pearhd = JSON.parse($.getdata('pearhd'))  

const myRequest = {
    url: $.getdata('pearurl'),
    method: `POST`,
    headers: pearhd,
    body: $.getdata('pearbody')
};
$task.fetch(myRequest).then(response => {
    const result = JSON.parse(response.body)
     if(result.message == 'success'){
        console.log('签到成功：获得'+result.reward_gold+"金币。")
 $done();}
}, reason => {
    console.log(reason.error);
 $done();
});
    },timeout)
  })
}



