
export default [
    {
        name:'toweekmost',
        url:"/toweekmost",
        template:'<toweekmost class="routename"></toweekmost>',
        lazyload:require("bundle?lazy&name=toweekmost!../components/toweekmost/toweekmost.js"),
        tracking:{
            key:'toweekmost'
        }
    },
     {
        name:'todaymost',
        url:"/todaymost",
        template:'<todaymost class="routename"></todaymost>',
        lazyload:require("bundle?lazy&name=todaymost!../components/todaymost/todaymost.js"),
        tracking:{
            key:'todaymost'
        }
    }
]
