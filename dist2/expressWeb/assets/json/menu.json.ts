export const Menu = [
    {
        label:'首页',
        icon:'pi pi-fw pi-tag',
        routerLink: '/index'
        // items:[
        //     {
        //         label:'New',
        //         icon:'pi pi-fw pi-plus',
        //         items:[
        //         {
        //             label:'Bookmark',
        //             icon:'pi pi-fw pi-bookmark'
        //         },
        //         {
        //             label:'Video',
        //             icon:'pi pi-fw pi-video'
        //         },

        //         ]
        //     },
        //     {
        //         label:'Delete',
        //         icon:'pi pi-fw pi-trash'
        //     },
        //     {
        //         separator:true
        //     },
        //     {
        //         label:'Export',
        //         icon:'pi pi-fw pi-external-link'
        //     }
        // ]
    },
    {
        label:'物流服务',
        icon:'pi pi-fw pi-globe',
        items:[
            
            {
                label:'国际标快',
                icon:'pi pi-fw pi-align-right'
            },
            {
                label:'国际特惠',
                icon:'pi pi-fw pi-align-center'
            },
           
            

        ]
    },
    {
        label:'服务支持',
        icon:'pi pi-fw pi-user',
        items:[
            {
                label:'寄件',
                icon:'pi pi-fw pi-user-plus',

            },
            {
                label:'查件',
                icon:'pi pi-fw pi-user-minus',

            },
            {
                label:'服务查询',
                icon:'pi pi-fw pi-eye',
                
            },
            {
                label:'会员权益',
                icon:'pi pi-fw pi-users',
            }
        ]
    },
    {
        label:'关于我们',
        icon:'pi pi-fw pi-calendar',
        items:[
            {
                label:'关于挺好',
                icon:'pi pi-fw pi-pencil',
                routerLink:'/about'
               
            },
            {
                label:'新闻资讯',
                icon:'pi pi-fw pi-calendar-times',
                
            },
            {
                label:'服务公告',
                icon:'pi pi-fw pi-calendar-times',
                
            }
        ]
    }

]